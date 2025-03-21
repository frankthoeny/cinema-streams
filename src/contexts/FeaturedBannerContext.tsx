import React, { createContext } from 'react';

interface BannerProps {
  videoId?: string;
  imdbID: string;
  title: string;
}

export const FeaturedBannerContext = createContext<{
  banner: BannerProps;
  setBanner: React.Dispatch<React.SetStateAction<BannerProps>>;
}>({
  banner: { videoId: "", imdbID: "", title: "" },
  setBanner: () => {},
});
