import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { useLocation } from "react-router-dom";
import useGO from "../hooks/useGO";
import style from "./Home.module.css";

const Home = () => {
  const variant = useGO("YOUR_EXPERIMENT_ID_GOES_HERE");
  const location = useLocation();

  useEffect(() => {
    console.log({ location: location });
    ReactGA.pageview(location.pathname);
  }, [location]);

  return (
    <div className={style.wrapper}>
      <h2>A/B Test</h2>
    </div>
  );
};

export default Home;
