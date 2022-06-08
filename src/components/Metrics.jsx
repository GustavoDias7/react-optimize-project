import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { handleDatalayer, init } from "../utils/metrics";

const Metrics = () => {
  const location = useLocation();

  useEffect(() => {
    init();
    handleDatalayer();
  }, [location]);

  return <div>Metrics</div>;
};

export default Metrics;
