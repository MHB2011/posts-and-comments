import React from "react";
import { withWelcomeMessage } from "../hoc/withWelcomeMessage";
import { Comment } from "../types/Comment";

interface CommentItemProps {
  comment: Comment;
}

const S: { [index: string]: React.CSSProperties } = {
  container: {
    padding: "8px",
  },
};

export const CommentItem = withWelcomeMessage<CommentItemProps>(
  function CommentItem({ comment: { name, body } }) {
    return (
      <div style={S.container}>
        <h3>{name}</h3>
        <p>{body}</p>
      </div>
    );
  }
);
