import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import TagManager from "react-gtm-module";
import { tagManagerArgs } from "../utils/metrics";

const Metrics = () => {
  const location = useLocation();

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, [location]);

  return <div>Metrics</div>;
};

export default Metrics;
