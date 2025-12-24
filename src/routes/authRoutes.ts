import { Router } from "express";
import rateLimit from "express-rate-limit";
import { validateBody } from "../middlewares/validatemiddleware";
import { loginSchema, registerSchema } from "../schemas/authschema";
import * as authController from "../controllers/authController";

const router = Router();


const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
});

router.post("/register", authLimiter, validateBody(registerSchema), authController.register);
router.post("/login", authLimiter, validateBody(loginSchema), authController.login);

export default router;
