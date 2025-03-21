import { useEffect, useState } from 'react';

import { MovieDetails } from '../interfaces/movies.interface';

// Custom hook for fetching data
const useFetch = (
  fetchString: string | null,
  fetchFunction: (fetchString: string) => Promise<MovieDetails>
) => {
  const [data, setData] = useState<MovieDetails>(); // State for data
  const [loading, setLoading] = useState<boolean>(true); // State for loading
  const [error, setError] = useState<string | null>(null); // State for error handling
  // Fetch data with the IMDB ID.
  useEffect(() => {
    if (!fetchString) {
      setData(undefined);
      setLoading(false);
      setError(null);
      return;
    }
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await fetchFunction(fetchString);
        setData(result);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchString, fetchFunction]);

  return { data, loading, error };
};

export default useFetch;
