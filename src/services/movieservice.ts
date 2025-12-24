import { Movie, IMovie } from "../models/moviemodel";
import { CreateMovieDto } from "../schemas/movieschema";
import mongoose from "mongoose";
import { UpdateMovieDto } from "../schemas/movieUpdateschema";

export const createMovie = async (data: CreateMovieDto): Promise<IMovie> => {
  const movie = await Movie.create(data);
  return movie;
};

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

export const getMovieById = async (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) return null;
  return Movie.findById(id);
};

export const updateMovieById = async (id: string, data: UpdateMovieDto) => {
  if (!mongoose.Types.ObjectId.isValid(id)) return null;
  return Movie.findByIdAndUpdate(id, data, { new: true });
};

export const deleteMovieById = async (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) return null;
  return Movie.findByIdAndDelete(id);
};