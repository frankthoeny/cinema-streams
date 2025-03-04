import { MovieData } from '../interfaces/movies.interface';

const API_KEY = import.meta.env.VITE_APP_API_KEY;
const API_URL = `http://www.omdbapi.com?apikey=${API_KEY}`;

async function MovieTypeService(
  search: string,
  type: string
): Promise<MovieData[]> {
  const response = await fetch(
    `${API_URL}&s=${search}&type=${type}&r=json&page=1`
  );
  if (!response.ok) {
    throw new Error(
      `Failed to fetch movie data: ${response.status} ${response.statusText}`
    );
  }
  const data = await response.json();

  if (data.Error) {
    throw new Error(data.Error);
  }
  return data.Search;
}

export default MovieTypeService;
