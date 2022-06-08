import React from "react";
import { Link } from "react-router-dom";
import { page1, page2, root, testB } from "../utils/links";

const Nav = () => {
  return (
    <>
      <nav className="nav">
        <p>Component Link</p>
        <Link to={root}>Home</Link>
        <Link to={testB}>Test B</Link>
        <Link to={page1}>Page1</Link>
        <Link to={page2}>Page2</Link>
      </nav>
      <nav className="nav">
        <p>Tag a</p>
        <a href={root}>Home</a>
        <a href={testB}>Test B</a>
        <a href={page1}>Page1</a>
        <a href={page2}>Page2</a>
      </nav>
    </>
  );
};

export default Nav;
