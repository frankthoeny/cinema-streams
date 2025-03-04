import './Preview.scss';

import movieTrailer from 'movie-trailer';
import React, { FC, useContext, useState } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

import { FeaturedBannerContext } from '../../contexts/FeaturedBannerContext';
import { getYouTubeId } from '../../utils/GetYouTubeId';

interface VideoBackgroundProps {
  opts?: YouTubeProps["opts"];
  onReady?: YouTubeProps["onReady"];
  onEnd?: YouTubeProps["onEnd"];
}

const Preview: FC<VideoBackgroundProps> = ({ opts, onReady, onEnd }) => {
  const { banner } = useContext(FeaturedBannerContext);
  const [youTubeID, setYouTubeID] = useState<string | undefined>(
    banner.videoId
  );
  const defaultOpts = {
    width: 560,
    height: 315,
    playerVars: {
      rel: 0,
      showinfo: 0,
      modestbranding: 1,
    },
  };
  const finalOpts = { ...defaultOpts, ...opts };

  if (banner.title) {
    movieTrailer(banner.title).then((res) => {
      if (res !== null) {
        console.log(res);
        return setYouTubeID(getYouTubeId(res));
      } else {
        return setYouTubeID(banner.videoId);
      }
    });
  }

  if (!banner.videoId) {
    return <div>Select a video to feature it here.</div>;
  }

  return (
    <div className="preview">
      <YouTube
        className="youtubeComponent"
        videoId={youTubeID}
        opts={finalOpts}
        onReady={onReady}
        onEnd={onEnd}
      />

      <div className="bg-overlay"></div>
    </div>
  );
};

export default Preview;
