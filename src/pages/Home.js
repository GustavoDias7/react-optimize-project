import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { useLocation } from "react-router-dom";
import useGO from "../hooks/useGO";
import style from "./Home.module.css";

const Home = () => {
  // const variant = useGO();
  const location = useLocation();

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      ReactGA.initialize("UA-230277864-1");
      window.GA_INITIALIZED = true;
    }
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
    (function (a, s, y, n, c, h, i, d, e) {
      s.className += " " + y;
      h.start = 1 * new Date();
      h.end = i = function () {
        s.className = s.className.replace(RegExp(" ?" + y), "");
      };
      (a[n] = a[n] || []).hide = h;
      setTimeout(function () {
        i();
        h.end = null;
      }, c);
      h.timeout = c;
    })(window, document.documentElement, "async-hide", "dataLayer", 4000, {
      CONTAINER_ID: true,
    });
  }, [location]);

  return (
    <div className={style.wrapper}>
      <h2>A/B Test</h2>
    </div>
  );
};

export default Home;
