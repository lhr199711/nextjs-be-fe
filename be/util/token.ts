import jwt from "jsonwebtoken";
import { JWT_SECRET, JWT_EXPIRE } from "./const";
export const generateToken = (userId: string) => {
  return jwt.sign({ id: userId }, JWT_SECRET, {
    expiresIn: JWT_EXPIRE,
  });
};
export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};
