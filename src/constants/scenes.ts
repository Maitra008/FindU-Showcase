import { Scene } from '../types';

export const VIDEO_DURATION = 60.0;
export const VIDEO_ASSET_PATH = '/assets/findu_cinematic_showcase.mp4';
export const PORTAL_URL = 'https://find-u-portal-v2.vercel.app/';
export const REPO_URL = 'https://github.com/Maitra008/FindU';

export const SCENES: Scene[] = [
  {
    id: 'scattered-footage',
    chapterNumber: '01',
    title: 'Scattered Footage',
    startTime: 0.0,
    endTime: 7.5,
    overlayPosition: 'none',
    embeddedTextSummary: 'Surveillance camera grid across multiple terminal zones: Every missing person leaves a trail.',
  },
  {
    id: 'candidate-detection',
    chapterNumber: '02',
    title: 'Candidate Detection',
    startTime: 7.5,
    endTime: 15.5,
    overlayPosition: 'top-right',
    action: {
      label: 'Detection Pipeline',
      url: `${PORTAL_URL}#methodology`,
      description: 'Multi-camera pipeline specification',
    },
    embeddedTextSummary: 'Concourse B feed isolation with Track 01 candidate bounding box.',
  },
  {
    id: 'evidence-examination',
    chapterNumber: '03',
    title: 'Evidence Examination',
    startTime: 15.5,
    endTime: 25.5,
    overlayPosition: 'top-right',
    action: {
      label: 'Reference Matching',
      url: `${PORTAL_URL}#architecture`,
      description: 'Cosine re-ID & spatial constraints',
    },
    embeddedTextSummary: 'Reference record comparison (SIM-0001) linked to detected candidate.',
  },
  {
    id: 'timeline-synthesis',
    chapterNumber: '04',
    title: 'Timeline Synthesis',
    startTime: 25.5,
    endTime: 35.5,
    overlayPosition: 'top-right',
    action: {
      label: 'Investigation View',
      url: `${PORTAL_URL}#investigation`,
      description: 'Simulated investigation workflow',
    },
    embeddedTextSummary: 'Connecting sightings across timestamps into a coherent investigative path.',
  },
  {
    id: 'human-verification',
    chapterNumber: '05',
    title: 'Human Verification',
    startTime: 35.5,
    endTime: 46.5,
    overlayPosition: 'top-right',
    action: {
      label: 'Human Safeguards',
      url: `${PORTAL_URL}#validation`,
      description: 'Human-in-the-loop validation protocol',
    },
    embeddedTextSummary: 'Candidate timeline under authorized human review. Technology finds candidates, people verify.',
  },
  {
    id: 'system-resolution',
    chapterNumber: '06',
    title: 'Resolution',
    startTime: 46.5,
    endTime: 60.0,
    overlayPosition: 'none',
    action: {
      label: 'Explore FindU',
      url: PORTAL_URL,
      description: 'Enter the public technical portal',
    },
    embeddedTextSummary: 'Closing statement: Technology can help find the lead. Human judgment determines what happens next.',
  },
];

