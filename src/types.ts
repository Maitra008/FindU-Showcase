export interface Scene {
  id: string;
  chapterNumber: string;
  title: string;
  startTime: number; // in seconds
  endTime: number;   // in seconds
  // Where in the viewport the subtle overlay appears (to avoid covering video's built-in text at bottom-left)
  overlayPosition: 'top-right' | 'right' | 'center' | 'top-center' | 'none';
  // Contextual link (sparse, intentional)
  action?: {
    label: string;
    url: string;
    description?: string;
  };
  embeddedTextSummary: string; // Documenting what the video already communicates
}

export interface PlaybackState {
  currentTime: number;
  duration: number;
  progress: number; // 0.0 to 1.0
  activeSceneIndex: number;
  isPlaying: boolean;
  isMuted: boolean;
  isScrubbing: boolean;
  isVideoReady: boolean;
  hasAudio: boolean;
  mode: 'scroll' | 'autoplay'; // allows toggle between scroll scrubbing and continuous play
}

