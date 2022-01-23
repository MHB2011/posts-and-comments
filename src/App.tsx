import { Route, Routes } from "react-router-dom";
import { GlobalContextProvider } from "./context/GlobalContextProvider";
import { PostDetailsPage } from "./pages/PostDetailsPage";
import { PostListPage } from "./pages/PostListPage";
import { Layout } from "./components/Layout";
import { useRef } from "react";

export function App() {
  const message = useRef("Hello from").current;

  return (
    <GlobalContextProvider>
      <Routes>
        <Route path="/" element={<Layout message={message} />}>
          <Route path="posts" element={<PostListPage message={message} />} />
          <Route
            path="post/:id"
            element={<PostDetailsPage message={message} />}
          />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here :(</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </GlobalContextProvider>
  );
}
