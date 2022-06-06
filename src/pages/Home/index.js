import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { useLocation } from "react-router-dom";
import useExperiment from "../../hooks/useExperiment";
import style from "./Home.module.css";

const Home = () => {
  const variant = useExperiment();
  const location = useLocation();

  useEffect(() => {
    console.log("Home variant", variant);
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
      <br />
      <h2>Variant: {variant}</h2>
    </div>
  );
};

export default Home;
