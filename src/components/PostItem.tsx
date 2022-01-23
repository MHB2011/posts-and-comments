import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { withWelcomeMessage } from "../hoc/withWelcomeMessage";
import { Post } from "../types/Post";

interface PostProps {
  post: Post;
  renderUserName?: () => React.ReactNode;
  renderComments?: (
    isCommentsOpen: boolean,
    setIsCommentsOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) => React.ReactNode;
  renderCommentsHeader?: (
    isCommentsOpen: boolean,
    setIsCommentsOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) => React.ReactNode;
}

export const PostItem = withWelcomeMessage<PostProps>(function PostItem({
  post: { id, title, body },
  renderUserName,
  renderComments,
  renderCommentsHeader,
}: PostProps) {
  const navigate = useNavigate();

  const [isCommentsOpen, setIsCommentsOpen] = useState(false);

  return (
    <>
      <div
        className="card mb-0 rounded-0 border-bottom-0"
        onClick={() => navigate(`/post/${id}`)}
      >
        {renderUserName?.()}
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      {renderCommentsHeader?.(isCommentsOpen, setIsCommentsOpen)}
      {renderComments?.(isCommentsOpen, setIsCommentsOpen)}
    </>
  );
});
