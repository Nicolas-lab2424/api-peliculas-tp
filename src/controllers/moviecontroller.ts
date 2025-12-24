import { Request, Response } from "express";
import * as movieService from "../services/movieservice";
import { CreateMovieDto } from "../schemas/movieschema";
import { UpdateMovieDto } from "../schemas/movieUpdateschema";

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

export const getMovie = async (req: Request, res: Response) => {
  try {
    const movie = await movieService.getMovieById(req.params.id);

    if (!movie) {
      return res.status(404).json({ message: "Película no encontrada" });
    }

    res.status(200).json(movie);
  } catch (error) {
    console.error("Error al obtener película:", error);
    res.status(500).json({ message: "Error al obtener película" });
  }
};

export const updateMovie = async (req: Request, res: Response) => {
  try {
    const data = req.body as UpdateMovieDto;
    const movie = await movieService.updateMovieById(req.params.id, data);

    if (!movie) {
      return res.status(404).json({ message: "Película no encontrada" });
    }

    res.status(200).json(movie);
  } catch (error) {
    console.error("Error al actualizar película:", error);
    res.status(500).json({ message: "Error al actualizar película" });
  }
};

export const deleteMovie = async (req: Request, res: Response) => {
  try {
    const movie = await movieService.deleteMovieById(req.params.id);

    if (!movie) {
      return res.status(404).json({ message: "Película no encontrada" });
    }

    res.status(200).json({ message: "Película eliminada" });
  } catch (error) {
    console.error("Error al eliminar película:", error);
    res.status(500).json({ message: "Error al eliminar película" });
  }
};
