import '../assets/moviesearch.css';

import React, { FC, lazy, Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Movie, MovieData } from '../interfaces/movies.interface';
import searchMovies from '../services/movieService';

const MovieSearch: FC<Movie> = () => {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  const MovieCard = lazy(() => import("../components/Movie"));
  const { id } = useParams();
  const fetchMovies = async (searchValue: string, currentPage: number) => {
    setLoading(true);
    setError(null);

    try {
      const results = await searchMovies(searchValue, currentPage);
      const resultsSearch: MovieData[] = results.Search;
      const totalPages = Math.ceil(results.totalResults / 10);
      if (resultsSearch.length !== 0) {
        resultsSearch.sort((a, b) => b.Year - a.Year);
        setMovies(resultsSearch);
        setTotalPages(totalPages);

        console.log("Results: ", resultsSearch);
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(`An error occurred: ${err}`);
        setMovies([]);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    if (searchValue) {
      timeoutId = setTimeout(() => {
        fetchMovies(searchValue, currentPage);
      }, 300);
      return () => clearTimeout(timeoutId);
    } else {
      setMovies([]);
      setLoading(false);
      setError(null);
      setTotalPages(0);
    }
  }, [searchValue, currentPage]);

  return (
    <>
      <NavBar searchValue={searchValue} setSearchValue={setSearchValue} />
      {movies ? (
        loading ? (
          <p className="d-flex justify-content-center align-items-center text-center text-light">
            Loading...
          </p>
        ) : (
          <>
            <Suspense fallback={<div>Loading movies...</div>}>
              <MovieCard
                movies={movies}
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            </Suspense>
          </>
        )
      ) : (
        error && <p className="text-light bg-danger">Error: {error}</p>
      )}
    </>
  );
};

export default MovieSearch;
