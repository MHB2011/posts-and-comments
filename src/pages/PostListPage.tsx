import { useCallback, useEffect, useState } from "react";
import { CommentList } from "../components/CommentList";
import { CommentsHeader } from "../components/CommentsHeader";
import { List } from "../components/List";
import { Page } from "../components/Page";
import { PostItem } from "../components/PostItem";
import { SearchFilter } from "../components/SearchFilter";
import { useGlobalContext } from "../context/useGlobalContext";
import { withWelcomeMessage } from "../hoc/withWelcomeMessage";
import { usePosts } from "../hooks/usePosts";

export const PostListPage = withWelcomeMessage(function PostListPage({
  message,
}) {
  const [posts, isLoading, error] = usePosts();
  const [search, setSearch] = useState<string>("");

  const { readUsers, users } = useGlobalContext();

  useEffect(() => {
    readUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnSearchChange = useCallback((searchTerm: string) => {
    setSearch(searchTerm);
  }, []);
  const filteredPosts = posts.filter((post) =>
    Object.values(post)
      .join("")
      .toLowerCase()
      .includes(search.toLocaleLowerCase())
  );

  if (isLoading) {
    return (
      <Page message={message}>
        <h3>Loading...</h3>
      </Page>
    );
  }

  if (error) {
    return (
      <Page message={message}>
        <h3>{error}</h3>
      </Page>
    );
  }

  return (
    <Page message={message}>
      <SearchFilter
        message={message}
        searchValue={search}
        onSearchChange={handleOnSearchChange}
      />

      <List
        message={message}
        testId={"post-list"}
        data={filteredPosts}
        renderItem={(post) => {
          const userName = users.find((user) => user.id === post.userId)?.name;
          return (
            <PostItem
              post={post}
              message={message}
              renderUserName={() => {
                return (
                  <div>
                    <h4>{userName}</h4>
                  </div>
                );
              }}
              renderCommentsHeader={(isCommentsOpen, setIsCommentsOpen) => (
                <CommentsHeader
                  message={message}
                  isCommentsOpen={isCommentsOpen}
                  setIsCommentsOpen={setIsCommentsOpen}
                />
              )}
              renderComments={(isCommentsOpen) =>
                isCommentsOpen ? (
                  <CommentList message={message} postId={post.id} />
                ) : null
              }
            />
          );
        }}
      />
    </Page>
  );
});
