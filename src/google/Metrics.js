import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { removeDataLayer } from "../utils/metrics";
import { init, sendPageview, handleDatalayer } from "../utils/metrics";

const Metrics = () => {
  const location = useLocation();

  useEffect(() => {
    init();
    handleDatalayer();
    sendPageview();
    console.log("useLocation:", location);

    return () => removeDataLayer();
  }, [location]);

  return <div>Metrics</div>;
};

export default Metrics;
