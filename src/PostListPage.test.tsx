import { render, screen, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { GlobalContextProvider } from "./context/GlobalContextProvider";
import { PostListPage } from "./pages/PostListPage";

const message = "Hello from";

test("PostListPage renders all elements", async () => {
  const component = (
    <BrowserRouter>
      <GlobalContextProvider>
        <PostListPage message={message} />
      </GlobalContextProvider>
    </BrowserRouter>
  );

  render(component);

  const loadingText = await screen.findByText(/loading/i);
  expect(loadingText).toBeInTheDocument();

  const searchInput = await screen.findByPlaceholderText(/search for posts/i);
  expect(searchInput).toBeInTheDocument();

  const postList = await screen.findByTestId("post-list");
  expect(postList).toBeInTheDocument();
  const { getAllByRole } = within(postList);
  const items = getAllByRole("listitem");
  expect(items.length).toBeGreaterThan(5);
});
