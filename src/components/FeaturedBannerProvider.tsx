import { FC, useState } from 'react';

import { FeaturedBannerContext } from '../contexts/FeaturedBannerContext';

interface BannerProps {
  videoId?: string;
  imdbID: string;
  title: string;
}
// Create the provider
export const FeaturedBannerProvider: FC<{
  children: React.ReactNode;
  defaultVideoId?: string;
  defaultImdbID?: string;
  defaultTitle?: string;
}> = ({ children, defaultVideoId, defaultImdbID, defaultTitle }) => {
  const [banner, setBanner] = useState<BannerProps>({
    videoId: defaultVideoId || "",
    imdbID: defaultImdbID || "",
    title: defaultTitle || "",
  });

  return (
    <FeaturedBannerContext.Provider value={{ banner, setBanner }}>
      {children}
    </FeaturedBannerContext.Provider>
  );
};
