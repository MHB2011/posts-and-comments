import React from "react";
import { useParams } from "react-router-dom";
import { CommentItem } from "../components/CommentItem";
import { List } from "../components/List";
import { Page } from "../components/Page";
import { PostItem } from "../components/PostItem";
import { UserName } from "../components/UserName";
import { withWelcomeMessage } from "../hoc/withWelcomeMessage";
import { usePost } from "../hooks/usePost";
import { constants } from "../styles/constants";
import { useComments } from "../hooks/useComments";

const S: { [index: string]: React.CSSProperties } = {
  ListStyle: {
    backgroundColor: constants.light,
  },
  CommentsHeader: {
    backgroundColor: constants.light,
    marginBottom: 0,
  },
};

export const PostDetailsPage = withWelcomeMessage(function PostDetailsPage({
  message,
}) {
  const { id } = useParams<{ id: string }>();
  const [post, isLoadingPost, errorPost] = usePost(id);
  const [comments, isLoadingComments, errorComments] = useComments(id);

  if (isLoadingPost || isLoadingComments) {
    return (
      <Page message={message}>
        <h3>Loading...</h3>
      </Page>
    );
  }

  if (errorPost || errorComments) {
    return (
      <Page message={message}>
        <h3>{errorPost}</h3>
        <h3>{errorComments}</h3>
      </Page>
    );
  }

  if (!post) {
    return (
      <Page message={message}>
        <h3>Post not found :(</h3>
      </Page>
    );
  }

  return (
    <Page message={message}>
      <PostItem
        message={message}
        post={post}
        renderUserName={() => (
          <UserName userId={post.userId} message={message} />
        )}
        renderCommentsHeader={() => (
          <div style={S.CommentsHeader}>
            <h3 className="m-0 px-2">Comments</h3>
          </div>
        )}
        renderComments={() => (
          <List
            testId="comment-list"
            data={comments}
            message={message}
            renderItem={(comment) => (
              <CommentItem comment={comment} message={message} />
            )}
            style={S.ListStyle}
          />
        )}
      />
    </Page>
  );
});
