import { useContext } from 'react';

import { YouTubeContext } from '../contexts/YouTubeContext';

export const useYouTubeContext = () => {
    const context = useContext(YouTubeContext);
    if (!context) {
      throw new Error('useYouTubeContext must be used within a YouTubeProvider');
    }
    return context;
  };