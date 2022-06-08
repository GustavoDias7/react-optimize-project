import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Metrics from "../components/Metrics";
import Nav from "../components/Nav";
import Home from "../pages/Home";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import { page1, page2, root, testB } from "../utils/links";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Metrics />
      <Nav />
      <Routes>
        <Route path={root} element={<Home />} />
        <Route path={testB} element={<Home />} />
        <Route path={page1} element={<Page1 />} />
        <Route path={page2} element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
