import { Router } from "express";
import { getMovies } from "../controllers/moviecontroller";

const router = Router();

router.get("/", getMovies);


export default router;
