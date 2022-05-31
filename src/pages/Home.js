import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { useLocation } from "react-router-dom";
import useGO from "../hooks/useGO";
import style from "./Home.module.css";

const Home = () => {
  // const variant = useGO();
  const location = useLocation();

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      ReactGA.initialize("UA-230277864-1");
      window.GA_INITIALIZED = true;
    }
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
