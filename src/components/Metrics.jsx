import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { init, sendPageview } from "../utils/metrics";

const Metrics = () => {
  const location = useLocation();

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    sendPageview();
  }, [location]);

  return <div>Metrics</div>;
};

export default Metrics;
