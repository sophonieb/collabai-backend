import { Request, Response } from "express";
import { LoginData, RegisterData } from "../../../types/auth.types";

const login = async (req: Request, res: Response) => {
  const loginData: LoginData = req.body;
};

const register = async (req: Request, res: Response) => {
  const registerData: RegisterData = req.body;
};

export { login, register };
