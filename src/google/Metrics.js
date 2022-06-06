import React, { useEffect } from "react";
import { initGA, initGTM } from "../utils/metrics";

const Metrics = () => {
  useEffect(() => {
    initGA();
    initGTM();
  }, []);

  return <div>Metrics</div>;
};

export default Metrics;
