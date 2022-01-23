import { AxiosInstance } from "axios";
import { createContext } from "react";
import { User } from "../types/User";

export const GlobalContext = createContext<
  | { http: AxiosInstance; readUsers: () => Promise<void>; users: User[] }
  | undefined
>(undefined);
