import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/useGlobalContext";
import { Post } from "../types/Post";

export function usePost(
  id?: string
): [Post | undefined, boolean, string | undefined] {
  const { http } = useGlobalContext();

  const [post, setPost] = useState<Post | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    async function readPost() {
      try {
        setIsLoading(true);
        const postsResponse: AxiosResponse<Post> = await http.get(
          `/posts/${id}`
        );
        setPost(postsResponse.data);
      } catch (error: any) {
        setError(error?.message);
      }
      setIsLoading(false);
    }
    readPost();
  }, [http, id]);

  return [post, isLoading, error];
}
