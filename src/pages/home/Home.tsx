import './Home.scss';

import { FC } from 'react';

import Featured from '../../components/featured/Featured';
import { FeaturedBannerProvider } from '../../components/FeaturedBannerProvider';
import MovieList from '../../components/movieList/MovieList';
import { homeFeaturedConfigs } from './HomeFeaturedConfigs';
import homeListConfigs from './HomeListConfigs';

const Home: FC = () => {
  return (
    <div className="home">
      <FeaturedBannerProvider
        defaultVideoId={homeFeaturedConfigs.videoId}
        defaultImdbID={homeFeaturedConfigs.imdbID}
      >
        <Featured />
        {homeListConfigs.map((config, index) => (
          <MovieList
            key={index}
            genre={config.genre}
            search={config.search}
            type={config.type}
          />
        ))}
      </FeaturedBannerProvider>
    </div>
  );
};

export default Home;
