import { z } from "zod";

export const createMovieSchema = z.object({
  title: z.string().min(1, "title es requerido"),
  synopsis: z.string().min(1, "synopsis es requerido"),
  rating: z.number().min(0).max(10),
  genre: z.string().min(1, "genre es requerido"),
  releaseYear: z.number().int().min(1888),
  director: z.string().min(1, "director es requerido"),
});

export type CreateMovieDto = z.infer<typeof createMovieSchema>;
