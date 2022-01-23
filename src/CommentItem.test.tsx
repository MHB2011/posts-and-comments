import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { CommentItem } from "./components/CommentItem";

import { GlobalContextProvider } from "./context/GlobalContextProvider";

const message = "Hello from";
const comment = {
  postId: 1,
  id: 1,
  name: "id labore ex et quam laborum",
  email: "Eliseo@gardner.biz",
  body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
};

test("CommentItem renders all elements", async () => {
  const component = (
    <BrowserRouter>
      <GlobalContextProvider>
        <CommentItem message={message} comment={comment} />
      </GlobalContextProvider>
    </BrowserRouter>
  );

  render(component);

  const postTitle = screen.getByText(/id labore ex et quam laborum/i);
  expect(postTitle).toBeInTheDocument();

  const postBody = screen.getByText(/laudantium enim quasi est/i);
  expect(postBody).toBeInTheDocument();
});
