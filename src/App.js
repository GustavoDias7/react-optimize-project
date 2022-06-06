import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Metrics from "./google/Metrics";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import { page1, page2, root, testB } from "./utils/links";
import { init } from "./utils/metrics";

function App() {
  useEffect(() => {
    init();
  }, []);

  return (
    <Routes>
      <Route path={testB} element={<Metrics />} />
      <Route path={root} element={<Home />} />
      <Route path={testB} element={<Home />} />
      <Route path={page1} element={<Page1 />} />
      <Route path={page2} element={<Page2 />} />
    </Routes>
  );
}

export default App;
