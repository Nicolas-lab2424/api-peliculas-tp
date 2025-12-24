import express from "express";
import cors from "cors";
import morgan from "morgan";
import movieRouter from "./routes/movieroutes";
import authRouter from "./routes/authRoutes";
import { notFound, errorHandler } from "./middlewares/errorMiddleware";
const app = express();


app.use(cors());
app.use(express.json());

app.use(morgan(":method :url :status"));

app.get("/", (_req, res) => {
  res.json({ message: "Bienvenido a la API de películas 🚀" });
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok", message: "API de películas funcionando 🚀" });
});

app.use(notFound);
app.use(errorHandler);
app.use("/movies", movieRouter);
app.use("/auth", authRouter);
export default app;

