import { family, popular, romcom } from './movieData';

interface HomeListConfig {
  genre: string;
  search: string[]; // Allow for both string arrays and single strings
  type: "movie" | "series";
}

const homeListConfigs: HomeListConfig[] = [
  { genre: "Holiday Family", search: family, type: "movie" },
  { genre: "Holiday Movies", search: popular, type: "movie" },
  { genre: "Action", search: ["hero", "fight"], type: "movie" },
  { genre: "Holiday rom-coms", search: romcom, type: "movie" },
  { genre: "Holiday Series", search: ["Holiday"], type: "series" },
  { genre: "Comedies", search: ["comedy romantic"], type: "movie" },
  { genre: "Sci-fi", search: ["Star Wars", "Star Trek"], type: "movie" },
  { genre: "Horror", search: ["Wolf"], type: "movie" },
];

export default homeListConfigs;
