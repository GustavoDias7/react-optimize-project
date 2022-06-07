import React from "react";
import { Link } from "react-router-dom";
import { page1, page2, root, testB } from "../utils/links";

const Nav = () => {
  return (
    <nav className="nav">
      <Link to={root}>Home</Link>
      <Link to={testB}>Test B</Link>
      <Link to={page1}>Page1</Link>
      <Link to={page2}>Page2</Link>
    </nav>
  );
};

export default Nav;
