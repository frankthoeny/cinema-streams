import React, { createContext, Dispatch, RefObject } from 'react';
import { YouTubePlayer } from 'react-youtube';

// Context Types
interface YouTubeContextProps {
  player: YouTubePlayer | null;
  setPlayer: Dispatch<React.SetStateAction<YouTubePlayer | null>>;
  playing: boolean;
  setPlaying: Dispatch<React.SetStateAction<boolean>>;
  playerRef: RefObject<YouTubePlayer | null>;
}

export const YouTubeContext = createContext<YouTubeContextProps | undefined>(
  undefined
);
