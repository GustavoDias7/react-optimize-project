import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { useLocation } from "react-router-dom";
import style from "./Home.module.css";

const Home = () => {
  const location = useLocation();
  useEffect(() => {
    ReactGA.initialize("G-YQM0DZ78VN");
  }, []);

  useEffect(() => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  }, [location]);

  return (
    <div className={style.wrapper}>
      <h2>A/B Test</h2>
    </div>
  );
};

export default Home;
