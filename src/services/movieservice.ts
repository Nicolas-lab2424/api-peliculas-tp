
import { Movie, IMovie } from "../models/moviemodel";

interface QueryFilters {
  title?: string;
  genre?: string;
  ratingMin?: number;
  ratingMax?: number;
  year?: number;
}

export const getAllMovies = async (filters: QueryFilters): Promise<IMovie[]> => {
  const query: any = {};

  if (filters.title) {
    query.title = { $regex: filters.title, $options: "i" };
  }

  if (filters.genre) {
    query.genre = filters.genre;
  }

  if (filters.ratingMin !== undefined) {
    query.rating = { ...query.rating, $gte: filters.ratingMin };
  }

  if (filters.ratingMax !== undefined) {
    query.rating = { ...query.rating, $lte: filters.ratingMax };
  }

  if (filters.year !== undefined) {
    query.releaseYear = filters.year;
  }

  const movies = await Movie.find(query);
  return movies;
};
