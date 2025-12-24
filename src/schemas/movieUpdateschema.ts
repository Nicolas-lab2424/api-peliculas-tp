import { z } from "zod";

export const updateMovieSchema = z
  .object({
    title: z.string().min(1).optional(),
    synopsis: z.string().min(1).optional(),
    rating: z.number().min(0).max(10).optional(),
    genre: z.string().min(1).optional(),
    releaseYear: z.number().int().min(1888).optional(),
    director: z.string().min(1).optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: "Debe enviarse al menos un campo para actualizar",
    path: [],
  });

export type UpdateMovieDto = z.infer<typeof updateMovieSchema>;
