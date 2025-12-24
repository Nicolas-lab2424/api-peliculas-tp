import { Router } from "express";
import {
  getMovies,
  createMovie,
  getMovie,
  updateMovie,
  deleteMovie,
} from "../controllers/moviecontroller";
import { validateBody } from "../middlewares/validatemiddleware";

import { createMovieSchema } from "../schemas/movieschema";
import { updateMovieSchema } from "../schemas/movieUpdateschema";
import { authMiddleware } from "../middlewares/authMiddleware";


const router = Router();

router.get("/", getMovies);
router.get("/:id", getMovie);

router.post("/", authMiddleware, validateBody(createMovieSchema), createMovie);
router.patch("/:id", authMiddleware, validateBody(updateMovieSchema), updateMovie);
router.delete("/:id", authMiddleware, deleteMovie);


export default router;
