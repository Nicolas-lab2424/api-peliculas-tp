
import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();


app.use(cors());
app.use(express.json());


app.use(
  morgan(":method :url :status")
);

app.get("/health", (_req, res) => {
  res.json({ status: "ok", message: "API de películas funcionando 🚀" });
});

export default app;
