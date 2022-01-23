import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/useGlobalContext";
import { Comment } from "../types/Comment";

export function useComments(
  id?: number | string
): [Comment[], boolean, string | undefined] {
  const { http } = useGlobalContext();

  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    async function readCommentList() {
      if (!id) return;

      try {
        setIsLoading(true);
        const commentsResponse: AxiosResponse<Comment[]> = await http.get(
          `/comments`,
          { params: { postId: id } }
        );
        setComments(commentsResponse.data);
      } catch (error: any) {
        setError(error?.message);
      }
      setIsLoading(false);
    }
    readCommentList();
  }, [http, id]);

  return [comments, isLoading, error];
}
