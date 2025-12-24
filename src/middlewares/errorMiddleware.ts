import { Request, Response, NextFunction } from "express";

export const notFound = (_req: Request, res: Response) => {
  res.status(404).json({ message: "Ruta no encontrada" });
};

export const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error(err);
  const status = err.statusCode || 500;
  res.status(status).json({
    message: err.message || "Error interno del servidor",
  });
};
