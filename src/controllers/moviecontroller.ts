// src/controllers/movie.controller.ts
import { Request, Response } from "express";
import * as movieService from "../services/movieservice";

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

