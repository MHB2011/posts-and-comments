import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";

import { GlobalContextProvider } from "./context/GlobalContextProvider";

const message = "Hello from";

test("Layout renders all elements", async () => {
  const component = (
    <BrowserRouter>
      <GlobalContextProvider>
        <Layout message={message} />
      </GlobalContextProvider>
    </BrowserRouter>
  );

  render(component);

  const headerTitle = screen.getByText(/React test Assignment/i);
  expect(headerTitle).toBeVisible();

  const header = screen.getByTestId("header");
  expect(header).toBeVisible();

  const postsLink = screen.getByText(/posts/i);
  expect(postsLink).toBeVisible();
});
