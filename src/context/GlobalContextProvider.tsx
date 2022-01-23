import axios, { AxiosResponse } from "axios";
import React, { useRef, useState } from "react";
import { constants } from "../constants";
import { User } from "../types/User";
import { GlobalContext } from "./GlobalContext";

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const http = useRef(
    axios.create({
      baseURL: constants.BASE_URL,
    })
  ).current;

  const [users, setUsers] = useState<User[]>([]);

  async function readUsers() {
    try {
      const response: AxiosResponse<User[]> = await http.get("/users");

      setUsers(response.data);
    } catch (error) {
      console.log("Unable to load users");
    }
  }

  return (
    <GlobalContext.Provider value={{ http, readUsers, users }}>
      {children}
    </GlobalContext.Provider>
  );
};
