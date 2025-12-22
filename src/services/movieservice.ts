import { Movie, IMovie } from "../models/moviemodel";

export const getAllMovies = async (): Promise<IMovie[]> => {
  const movies = await Movie.find();
  return movies;
};
