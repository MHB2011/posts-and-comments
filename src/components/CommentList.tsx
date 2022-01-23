import React from "react";
import { withWelcomeMessage } from "../hoc/withWelcomeMessage";
import { useComments } from "../hooks/useComments";
import { constants } from "../styles/constants";
import { CommentItem } from "./CommentItem";
import { Spacer } from "./Spacer";

interface CommentListProps {
  postId: number;
}

const S: { [index: string]: React.CSSProperties } = {
  commentListContainer: {
    backgroundColor: constants.light,
    padding: "0px 8px",
  },
};

export const CommentList = withWelcomeMessage<CommentListProps>(
  function CommentList({ postId, message }) {
    const [comments, isLoading, error] = useComments(postId);

    if (isLoading) {
      return (
        <div style={S.commentListContainer}>
          <h3>Loading comments...</h3>
        </div>
      );
    }

    if (error) {
      return (
        <div style={S.commentListContainer}>
          <h3>{error}</h3>
        </div>
      );
    }

    return (
      <div style={S.commentListContainer}>
        <ul data-testid="comments-list">
          {comments.map((comment, i) => {
            return (
              <li key={comment.id}>
                <CommentItem comment={comment as any} message={message} />
                {i !== comments.length - 1 && <Spacer message={message} />}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
);
