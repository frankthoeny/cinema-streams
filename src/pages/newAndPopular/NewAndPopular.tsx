import './NewAndPopular.scss';

import { FC } from 'react';

import Featured from '../../components/featured/Featured';
import { FeaturedBannerProvider } from '../../components/FeaturedBannerProvider';
import { SeriesFeaturedConfigs } from '../series/SeriesFeaturedConfig';

const NewAndPopular: FC = () => {
  return (
    <div className="newandpopular">
      <FeaturedBannerProvider
        defaultVideoId={SeriesFeaturedConfigs.videoId}
        defaultTitle={SeriesFeaturedConfigs.title}
      >
        <Featured />
      </FeaturedBannerProvider>
    </div>
  );
};

export default NewAndPopular;
