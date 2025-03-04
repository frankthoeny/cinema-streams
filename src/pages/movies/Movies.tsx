import './Movies.scss';

import { FC } from 'react';

import Featured from '../../components/featured/Featured';
import { FeaturedBannerProvider } from '../../components/FeaturedBannerProvider';
import { SeriesFeaturedConfigs } from '../series/SeriesFeaturedConfig';

const Movies: FC = () => {
  return (
    <div className="movies">
      <FeaturedBannerProvider
        defaultVideoId={SeriesFeaturedConfigs.videoId}
        defaultTitle={SeriesFeaturedConfigs.title}
      >
        <Featured />
      </FeaturedBannerProvider>
    </div>
  );
};

export default Movies;
