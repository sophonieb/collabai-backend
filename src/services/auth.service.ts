import { LoginData } from "../types/auth.types";
import userService from "./user.service";

export const login = async (loginData: LoginData) => {
  const { username, password } = loginData;
  try {
    const user = await userService.findByUsername(username);
  } catch (error) {
    console.error("Error: ", error);
    throw new Error(`Error User with ${username} not find`);
  }
};
