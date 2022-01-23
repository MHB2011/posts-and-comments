import { useEffect } from "react";

export function useWelcomeMessage(message: string, name: string) {
  useEffect(() => {
    console.log(`${message} ${name}`);
  }, [name, message]);
}
