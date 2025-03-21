import { FC } from 'react';
import { YouTubePlayer } from 'react-youtube';

import { Add, ThumbDownOutlined, ThumbUpAltOutlined } from '@mui/icons-material';

import ButtonMore from '../buttonMore/ButtonMore';
import ButtonTogglePlayPause from '../buttonTogglePlayPause/ButtonTogglePlayPause';

interface ActionBarProps {
  player: YouTubePlayer;
  playing: boolean;
  setPlaying: (player: YouTubePlayer) => void;
}
const ActionBar: FC<ActionBarProps> = ({ player, playing, setPlaying }) => {
  return (
    <>
      <div className="buttons">
        <ButtonTogglePlayPause
          playing={playing}
          player={player}
          setPlaying={setPlaying}
        />

        <ButtonMore />

        <div className="icons">
          <Add className="icon" />
          <ThumbUpAltOutlined className="icon" />
          <ThumbDownOutlined className="icon" />
        </div>
      </div>
    </>
  );
};

export default ActionBar;
