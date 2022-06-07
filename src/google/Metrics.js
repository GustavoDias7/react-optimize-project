import React, { useEffect } from "react";
import {
  initGA,
  initGTM,
  setGADatalayer,
  setGTMDatalayer,
} from "../utils/metrics";

const Metrics = () => {
  useEffect(() => {
    initGA();
    initGTM();
    setGTMDatalayer();
    setGADatalayer();
  }, []);

  return <div>Metrics</div>;
};

export default Metrics;
