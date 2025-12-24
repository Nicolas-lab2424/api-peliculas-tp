import { Router } from "express";
import {
  getMovies,
  createMovie,
  getMovie,
  updateMovie,
  deleteMovie,
} from "../controllers/moviecontroller";
import { validateBody } from "../middlewares/validateMiddleware";
import { createMovieSchema } from "../schemas/movieschema";
import { updateMovieSchema } from "../schemas/movieUpdateschema";

const router = Router();

router.get("/", getMovies);
router.post("/", validateBody(createMovieSchema), createMovie);

router.get("/:id", getMovie);
router.patch("/:id", validateBody(updateMovieSchema), updateMovie);
router.delete("/:id", deleteMovie);

export default router;
