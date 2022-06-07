import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { init, sendPageview, setDatalayer } from "../utils/metrics";

const Metrics = () => {
  const location = useLocation();

  useEffect(() => {
    init();
    setDatalayer();
    sendPageview();
    console.log("useLocation:", location);
  }, [location]);

  return <div>Metrics</div>;
};

export default Metrics;
