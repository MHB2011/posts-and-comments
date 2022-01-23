import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/useGlobalContext";
import { withWelcomeMessage } from "../hoc/withWelcomeMessage";
import { User } from "../types/User";

interface UserNameProps {
  userId: number;
}

export const UserName = withWelcomeMessage(function UserName({
  userId,
}: UserNameProps) {
  const { http } = useGlobalContext();

  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    async function readCommentList() {
      try {
        const userResponse: AxiosResponse<User> = await http.get(
          `/users/${userId}`
        );
        setUser(userResponse.data);
      } catch (error: any) {
        console.log(error);
      }
    }
    readCommentList();
  }, [http, userId]);

  return (
    <div>
      <h4>{user?.name}</h4>
    </div>
  );
});
