import { useEffect, useState } from "react";
const experimentId = "3Ikx7bjQRqSWumukrMEqAA";

const useGO = () => {
  const [variant, setVariant] = useState();
  useEffect(() => {
    (async () => {
      if (window.dataLayer) {
        await window.dataLayer.push({ event: "optimize.activate" });
      }
      const intervalId = setInterval(() => {
        if (window.google_optimize !== undefined) {
          // Set the variant to the state.
          setVariant(window.google_optimize.get(experimentId));
          clearInterval(intervalId);
        }
      }, 100);
    })();
  });
  console.log({ variant });
  return variant;
};

export default useGO;
