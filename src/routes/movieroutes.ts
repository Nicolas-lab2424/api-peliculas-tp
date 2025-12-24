import { Router } from "express";
import { getMovies, createMovie } from "../controllers/moviecontroller";
import { validateBody } from "../middlewares/validateMiddleware";
import { createMovieSchema } from "../schemas/movieschema";

const router = Router();

router.get("/", getMovies);
router.post("/", validateBody(createMovieSchema), createMovie);

export default router;
