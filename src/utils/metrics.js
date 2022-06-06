import TagManager from "react-gtm-module";
import ReactGA from "react-ga";

export function initGTM() {
  TagManager.initialize({
    gtmId: "GTM-TH4SQLJ",
  });
}

const TRACKING_ID = "UA-230277864-1";

export function initGA() {
  ReactGA.initialize(TRACKING_ID, {
    debug: true,
    titleCase: false,
    gaOptions: {
      userId: 123,
    },
  });
}

export function sendPageview() {
  console.log("window.location", window.location);
  ReactGA.pageview(window.location.pathname + window.location.search);
}

export function setDatalayer(data = {}) {
  window.dataLayer.push(data);
}

export function sendEvent(payload) {
  ReactGA.event(payload);
}
