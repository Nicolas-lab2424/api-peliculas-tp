import mongoose, { Schema, Document } from "mongoose";
export interface IMovie extends Document {
  title: string;
  synopsis: string;
  rating: number;
  genre: string;
  releaseYear: number;
  director: string;
  createdAt: Date;
  updatedAt: Date;
}

const movieSchema = new Schema<IMovie>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    synopsis: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 10,
    },
    genre: {
      type: String,
      required: true,
      trim: true,
    },
    releaseYear: {
      type: Number,
      required: true,
    },
    director: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Movie = mongoose.model<IMovie>("Movie", movieSchema);
