import { createContext, useContext } from 'react';

interface FeaturedMovieContextType {
  title: string;
  videoId: string;
}
export const FeaturedMovieContext = createContext<FeaturedMovieContextType>({
  title: "",
  videoId: "",
});

export const useMovie = () => {
  const FeaturedMovieContent = useContext(FeaturedMovieContext);

  if (!FeaturedMovieContent) {
    throw new Error(
      "useMovie has to be used within <FeaturedMovieContext.Provider>"
    );
  }

  return FeaturedMovieContent;
};
