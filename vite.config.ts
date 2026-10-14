import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

function setupRangeMiddleware(middlewares: any) {
  middlewares.use((req: any, res: any, next: any) => {
    if (req.url && req.url.startsWith('/assets/')) {
      const decoded = decodeURIComponent(req.url.split('?')[0]);
      let filePath = path.resolve(__dirname, '.' + decoded);
      if (!fs.existsSync(filePath)) {
        filePath = path.resolve(__dirname, './dist' + decoded);
      }
      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const stat = fs.statSync(filePath);
        const range = req.headers.range;

        if (range) {
          const parts = range.replace(/bytes=/, '').split('-');
          const start = parseInt(parts[0], 10);
          const end = parts[1] ? parseInt(parts[1], 10) : stat.size - 1;
          const chunksize = end - start + 1;
          const file = fs.createReadStream(filePath, { start, end });
          req.on('close', () => file.destroy());
          res.on('close', () => file.destroy());
          file.on('error', () => {
            if (!res.headersSent) {
              res.writeHead(500);
              res.end();
            }
          });
          res.writeHead(206, {
            'Content-Range': `bytes ${start}-${end}/${stat.size}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': filePath.endsWith('.mp4') ? 'video/mp4' : 'application/octet-stream',
          });
          file.pipe(res);
          return;
        } else {
          const ext = path.extname(filePath).toLowerCase();
          const mimeTypes: Record<string, string> = {
            '.mp4': 'video/mp4',
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.png': 'image/png',
            '.webp': 'image/webp',
            '.svg': 'image/svg+xml',
          };
          const contentType = mimeTypes[ext] || 'application/octet-stream';
          res.writeHead(200, {
            'Content-Length': stat.size,
            'Content-Type': contentType,
            'Accept-Ranges': 'bytes',
          });
          fs.createReadStream(filePath).pipe(res);
          return;
        }
      }
    }
    next();
  });
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-assets-folder',
      configureServer(server) {
        setupRangeMiddleware(server.middlewares);
      },
      configurePreviewServer(server) {
        setupRangeMiddleware(server.middlewares);
      },
      closeBundle() {
        // Recursively copy assets to dist/assets on build if not present
        const distAssets = path.resolve(__dirname, 'dist/assets');
        const srcAssets = path.resolve(__dirname, 'assets');
        
        function copyRecursive(src: string, dest: string) {
          if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
          const entries = fs.readdirSync(src, { withFileTypes: true });
          for (const entry of entries) {
            const srcPath = path.join(src, entry.name);
            const destPath = path.join(dest, entry.name);
            if (entry.isDirectory()) {
              copyRecursive(srcPath, destPath);
            } else {
              if (!fs.existsSync(destPath)) {
                fs.copyFileSync(srcPath, destPath);
              }
            }
          }
        }

        if (fs.existsSync(srcAssets)) {
          copyRecursive(srcAssets, distAssets);
        }
      }
    }
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: false,
  },
});
