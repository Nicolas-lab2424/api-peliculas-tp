import { Request, Response } from "express";
import * as authService from "../services/authService";
import { LoginDto, RegisterDto } from "../schemas/authschema";

export const register = async (req: Request, res: Response) => {
  try {
    const data = req.body as RegisterDto;
    const user = await authService.register(data);

    if (!user) {
      return res.status(409).json({ message: "El email ya está registrado" });
    }

    return res.status(201).json(user);
  } catch (error) {
    console.error("Error register:", error);
    return res.status(500).json({ message: "Error al registrar usuario" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const data = req.body as LoginDto;
    const result = await authService.login(data);

    if (!result) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    return res.status(200).json(result);
  } catch (error) {
    console.error("Error login:", error);
    return res.status(500).json({ message: "Error al iniciar sesión" });
  }
};
