import { FC } from 'react';
import { YouTubePlayer } from 'react-youtube';

import { PauseCircleFilledTwoTone, PlayArrow } from '@mui/icons-material';

export interface MovieInfo {
  player: YouTubePlayer;
  playing: boolean;
  setPlaying: (player: YouTubePlayer) => void;
}
const ButtonTogglePlayPause: FC<MovieInfo> = ({
  player,
  playing,
  setPlaying,
}) => {
  const handlePlayVideo = () => {
    if (player) {
      player.seekTo(5);
      player.playVideo();
      setPlaying(true);
    }
  };

  const handlePauseVideo = () => {
    if (player) {
      player.pauseVideo();
      setPlaying(false);
    }
  };

  return (
    <button
      type="button"
      onClick={playing ? handlePauseVideo : handlePlayVideo}
    >
      {playing ? (
        <>
          <PauseCircleFilledTwoTone />
          <span>Pause Trailer</span>
        </>
      ) : (
        <>
          <PlayArrow />
          <span>Watch Trailer</span>
        </>
      )}
    </button>
  );
};

export default ButtonTogglePlayPause;
