import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { init, sendPageview, handleDatalayer } from "../utils/metrics";

const Metrics = () => {
  const location = useLocation();

  useEffect(() => {
    init();
    handleDatalayer();
    sendPageview();
    console.log("useLocation:", location);
  }, [location]);

  return <div>Metrics</div>;
};

export default Metrics;
