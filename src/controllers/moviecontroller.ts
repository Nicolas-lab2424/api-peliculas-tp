import { Request, Response } from "express";
import * as movieService from "../services/movieservice";
import { CreateMovieDto } from "../schemas/movieschema";
export const getMovies = async (req: Request, res: Response) => {
  try {
    const { title, genre, ratingMin, ratingMax, year } = req.query;

    const filters = {
      title: title as string,
      genre: genre as string,
      ratingMin: ratingMin ? Number(ratingMin) : undefined,
      ratingMax: ratingMax ? Number(ratingMax) : undefined,
      year: year ? Number(year) : undefined,
    };

    const movies = await movieService.getAllMovies(filters);
    res.status(200).json(movies);
  } catch (error) {
    console.error("Error al obtener películas:", error);
    res.status(500).json({ message: "Error al obtener películas" });
  }
};

export const createMovie = async (req: Request, res: Response) => {
  try {
    const data = req.body as CreateMovieDto;
    const movie = await movieService.createMovie(data);
    res.status(201).json(movie);
  } catch (error) {
    console.error("Error al crear película:", error);
    res.status(500).json({ message: "Error al crear película" });
  }
};
