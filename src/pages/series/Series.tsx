import './Series.scss';

import { FC } from 'react';

import Featured from '../../components/featured/Featured';
import { FeaturedBannerProvider } from '../../components/FeaturedBannerProvider';
import { SeriesFeaturedConfigs } from './SeriesFeaturedConfig';

const Series: FC = () => {
  return (
    <div className="series">
      <FeaturedBannerProvider
        defaultVideoId={SeriesFeaturedConfigs.videoId}
        defaultTitle={SeriesFeaturedConfigs.title}
      >
        <Featured />
      </FeaturedBannerProvider>
    </div>
  );
};

export default Series;
