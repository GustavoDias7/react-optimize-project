import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { root, testB } from "./utils/links";
ReactGA.initialize("G-YQM0DZ78VN");

function App() {
  return (
    <Routes>
      <Route path={root} element={<Home />} />
      <Route path={testB} element={<Home />} />
    </Routes>
  );
}

export default App;
