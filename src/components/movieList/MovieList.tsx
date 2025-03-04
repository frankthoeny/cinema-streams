import './MovieList.scss';

import { FC, useContext, useEffect, useRef, useState } from 'react';

import { FeaturedBannerContext } from '../../contexts/FeaturedBannerContext';
import { MovieData } from '../../interfaces/movies.interface';
import movieTypeService from '../../services/movieTypeService';
import Carousel from '../carousel/Carousel';
import Slide from '../slide/Slide';

export interface MovieListProps {
  genre: string;
  search: string[];
  type: string;
}

const MovieList: FC<MovieListProps> = ({ genre, search, type }) => {
  const [movieData, setMovieData] = useState<MovieData[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { setBanner } = useContext(FeaturedBannerContext);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        let allResults: MovieData[] = [];
        const resultsPerSearch = Math.floor(10 / search.length);

        if (search && search.length > 0) {
          for (const searchTerm of search) {
            const fetchedData = await movieTypeService(searchTerm, type);

            if (fetchedData) {
              allResults = allResults.concat(
                fetchedData.slice(0, resultsPerSearch)
              );
            }
          }
        }
        setMovieData(allResults.slice(0, 10));
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message || "An unexpected error occurred.");
        }
      } finally {
        setLoading(false);
      }

      bannerRef.current = document.querySelector("div[ref]");
    };

    loadData();
  }, [search, type]);

  const handleSlideClick = (videoId: string, imdbID: string, title: string) => {
    if (setBanner) {
      setBanner({ videoId: videoId, imdbID: imdbID, title: title });
      window.scrollTo(0, 0);
      if (bannerRef.current) {
        bannerRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="movieList">
      {loading && <p>Loading data...</p>}
      {error && <p>Error: {error}</p>}
      <h2 className="heading">{genre}</h2>
      <Carousel>
        {movieData?.map((movie) => (
          <Slide onClick={handleSlideClick} key={movie.imdbID} slide={movie} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieList;
