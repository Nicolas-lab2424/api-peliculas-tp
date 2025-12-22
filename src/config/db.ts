
import mongoose from "mongoose";

const URI_DB = process.env.URI_DB;

if (!URI_DB) {
  throw new Error("La variable de entorno URI_DB no está definida");
}

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(URI_DB);
    console.log("🟢 Conectado a MongoDB");
  } catch (error) {
    console.error("🔴 Error al conectar a MongoDB");
    console.error(error);
    process.exit(1);
  }
};
