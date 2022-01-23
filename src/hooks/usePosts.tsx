import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/useGlobalContext";
import { Post } from "../types/Post";

export function usePosts(): [Post[], boolean, string | undefined] {
  const { http } = useGlobalContext();

  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    async function readPost() {
      try {
        setIsLoading(true);
        const postsResponse: AxiosResponse<Post[]> = await http.get(`/posts`);
        setPosts(postsResponse.data);
      } catch (error: any) {
        setError(error?.message);
      }
      setIsLoading(false);
    }
    readPost();
  }, [http]);

  return [posts, isLoading, error];
}
