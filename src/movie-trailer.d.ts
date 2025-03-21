declare module "movie-trailer" {
  function movieTrailer(
    title: string,
    options?: { tmdbId?: string; year?: string }
  ): Promise<string>;
  export default movieTrailer;
}
