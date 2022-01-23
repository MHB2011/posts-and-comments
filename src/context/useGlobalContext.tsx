import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);

    if (!context) {
        throw new Error("Global context is undefined!");
    }

    return context;
};
