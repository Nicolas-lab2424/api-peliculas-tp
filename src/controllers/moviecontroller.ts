import { Request, Response } from "express";
import * as movieService from "../services/movieservice";

export const getMovies = async (_req: Request, res: Response) => {
  try {
    const movies = await movieService.getAllMovies();
    res.status(200).json(movies);
  } catch (error) {
    console.error("Error al obtener películas:", error);
    res.status(500).json({ message: "Error al obtener películas" });
  }
};
