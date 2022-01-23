import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { PostItem } from "./components/PostItem";

import { GlobalContextProvider } from "./context/GlobalContextProvider";

const message = "Hello from";
const post = {
  userId: 1,
  id: 1,
  title:
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body: "quia et suscipit suscipit recusandae consequuntur expedita",
};

test("PostItem renders all elements", async () => {
  const component = (
    <BrowserRouter>
      <GlobalContextProvider>
        <PostItem message={message} post={post} />
      </GlobalContextProvider>
    </BrowserRouter>
  );

  render(component);

  const postTitle = screen.getByText(/sunt aut facere/i);
  expect(postTitle).toBeInTheDocument();

  const postBody = screen.getByText(/quia et suscipit suscipit recusandae/i);
  expect(postBody).toBeInTheDocument();
});
