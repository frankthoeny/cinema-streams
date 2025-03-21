import { MovieDetails } from '../interfaces/movies.interface';

const API_KEY = import.meta.env.VITE_APP_API_KEY;
const API_URL = `http://www.omdbapi.com?apikey=${API_KEY}`;

const get = async (imdbID: string):Promise<MovieDetails> =>  {
  const response = await fetch(`${API_URL}&i=${imdbID}`);

  if (!response.ok) {
    throw new Error(
      `HTTP error! status: ${response.status} ${response.statusText}`
    );
  }
  return response.json();
};

// export default get;
const MovieIdApiService = { get };
export default MovieIdApiService;
