import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../App.css";
import { withWelcomeMessage } from "../hoc/withWelcomeMessage";
import { constants } from "../styles/constants";

const S: { [index: string]: React.CSSProperties } = {
  header: {
    backgroundColor: constants.primary,
  },
  link: {
    color: constants.light,
  },
};

export const Layout = withWelcomeMessage(function Layout() {
  return (
    <header data-testid="header">
      <div style={S.header}>
        <div className="container">
          <h1 className="text-light">React test Assignment</h1>
          <nav style={S.nav}>
            <Link style={S.link} to="/posts">
              Posts
            </Link>
          </nav>
        </div>
      </div>
      <Outlet />
    </header>
  );
});
