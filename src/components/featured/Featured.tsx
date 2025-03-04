import './Featured.scss';

import { FC, useEffect, useRef, useState } from 'react';
import { YouTubePlayer, YouTubeProps } from 'react-youtube';

import MovieInfo from '../movieInfo/MovieInfo';
import Preview from '../preview/Preview';

const Featured: FC = () => {
  const [player, setPlayer] = useState<YouTubePlayer | null>(null);
  const [playing, setPlaying] = useState(false);
  let opts;
  const playerRef = useRef<YouTubePlayer | null>(null);
  useEffect(() => {
    const startVideo = () => {
      playerRef.current?.seekTo(5);
      playerRef.current?.mute();
      playerRef.current?.playVideo();
      const timer = setTimeout(() => {
        playerRef.current?.pauseVideo();
      }, 5000);

      clearTimeout(timer);
    };

    if (playerRef.current) {
      startVideo();
    }
  }, []);

  const onReady: YouTubeProps["onReady"] = (event: {
    target: YouTubePlayer;
  }) => {
    setPlayer(event.target);
    setPlaying(false);
    opts = {
      width: 560,
      height: 300,
      playerVars: {
        autoplay: 0,
        mute: 0,
      },
    };
  };
  const onEnd: YouTubeProps["onEnd"] = (event: { target: YouTubePlayer }) => {
    setPlayer(event.target);
    setPlaying(false);
  };

  return (
    <div className="featured">
      <Preview opts={opts} onReady={onReady} onEnd={onEnd} />
      <MovieInfo player={player} playing={playing} setPlaying={setPlaying} />
    </div>
  );
};

export default Featured;
