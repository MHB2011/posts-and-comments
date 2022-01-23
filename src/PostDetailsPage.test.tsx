import { render, screen, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { GlobalContextProvider } from "./context/GlobalContextProvider";
import { PostDetailsPage } from "./pages/PostDetailsPage";

const message = "Hello from";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: "1",
  }),
}));

test("PostDetailsPage renders all elements", async () => {
  const component = (
    <BrowserRouter>
      <GlobalContextProvider>
        <PostDetailsPage message={message} />
      </GlobalContextProvider>
    </BrowserRouter>
  );

  render(component);

  const loadingText = await screen.findByText(/loading/i);
  expect(loadingText).toBeInTheDocument();

  const commentList = await screen.findByTestId("comment-list");
  expect(commentList).toBeInTheDocument();
  const { getAllByRole } = within(commentList);
  const items = getAllByRole("listitem");
  expect(items.length).toBeGreaterThan(1);
});
