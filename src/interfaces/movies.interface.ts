export interface Movie {
  Response: string;
  Search: MovieData[];
  totalResults: number;
}

export interface MovieData {
  imdbID: string;
  Year: number;
  Type: string;
  Poster: string;
  Title: string;
}

export interface MovieDetails {
  Title: string;
  Year: number;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: MovieRatings[];
  Metascore: number;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

export interface MovieRatings {
  source: string;
  value: string;
}
