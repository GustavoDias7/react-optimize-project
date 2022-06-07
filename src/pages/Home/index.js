import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useExperiment from "../../hooks/useExperiment";
import style from "./Home.module.css";

const Home = () => {
  const variant = useExperiment();
  const location = useLocation();

  useEffect(() => {
    console.log("Home variant", variant);
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
