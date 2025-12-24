import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/userModel";
import { LoginDto, RegisterDto } from "../schemas/authschema";

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) throw new Error("JWT_SECRET no está definido");

export const register = async (data: RegisterDto) => {
  const exists = await User.findOne({ email: data.email });
  if (exists) return null;

  const hashed = await bcrypt.hash(data.password, 10);
  const user = await User.create({ email: data.email, password: hashed });

  return { id: user._id.toString(), email: user.email };
};

export const login = async (data: LoginDto) => {
  const user = await User.findOne({ email: data.email });
  if (!user) return null;

  const ok = await bcrypt.compare(data.password, user.password);
  if (!ok) return null;

  const token = jwt.sign(
    { sub: user._id.toString(), email: user.email },
    JWT_SECRET,
    { expiresIn: "7d" }
  );

  return { token };
};
