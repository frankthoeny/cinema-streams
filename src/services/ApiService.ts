import { MovieDetails } from '../interfaces/movies.interface';

const API_KEY = import.meta.env.VITE_APP_API_KEY;
const API_BASE_URL = `http://www.omdbapi.com?apikey=${API_KEY}`;

const ApiService = {
  async fetchData(fetchString: string): Promise<MovieDetails> {
    const response = await fetch(`${API_BASE_URL}&${fetchString}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  },
};

export default ApiService;
