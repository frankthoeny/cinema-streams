import './MovieInfo.scss';

import { FC, useContext, useEffect, useState } from 'react';
import { YouTubePlayer } from 'react-youtube';

import { FeaturedBannerContext } from '../../contexts/FeaturedBannerContext';
import useFetch from '../../hooks/useFetch';
import ApiService from '../../services/ApiService';
import ActionBar from '../actionBar/ActionBar';
import Details from '../details/Details';
import { VisibilityProvider } from '../VisibilityProvider';

interface MovieInfo {
  player: YouTubePlayer;
  playing: boolean;
  setPlaying: (player: YouTubePlayer) => void;
}

const MovieInfo: FC<MovieInfo> = ({ player, playing, setPlaying }) => {
  const [isMoreVisible, setIsMoreVisible] = useState(false);
  const { banner } = useContext(FeaturedBannerContext);
  const [fetchUrl, setFetchUrl] = useState<string | null>(null);
  const { data, loading, error } = useFetch(fetchUrl, ApiService.fetchData);

  useEffect(() => {
    if (banner.imdbID) {
      setFetchUrl(`i=${banner.imdbID}`);
    } else if (banner.title) {
      setFetchUrl(`t=${banner.title}`);
    } else {
      setFetchUrl(null);
    }
  }, [banner.imdbID, banner.title]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="info">
      <h2 className="desc">{data?.Title}</h2>
      <span className="desc">{data?.Plot}</span>

      <VisibilityProvider
        isMoreVisible={isMoreVisible}
        setIsMoreVisible={setIsMoreVisible}
      >
        <ActionBar player={player} playing={playing} setPlaying={setPlaying} />
      </VisibilityProvider>
      {isMoreVisible && <Details data={data} />}
    </div>
  );
};

export default MovieInfo;
