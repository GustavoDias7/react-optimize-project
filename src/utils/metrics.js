import TagManager from "react-gtm-module";
import ReactGA from "react-ga";

const GTM_ID = "GTM-TH4SQLJ";
const tagManagerArgs = {
  gtmId: GTM_ID,
  dataLayer: {
    userId: 123,
    userProject: "react-metrics-project",
  },
};

export function initGTM() {
  TagManager.initialize(tagManagerArgs);
}

export function setGTMDatalayer(data = {}) {
  TagManager.dataLayer(tagManagerArgs);
}

const TRACKING_ID = "UA-230277864-1";
const ReactGAArgs = {
  debug: true,
  titleCase: false,
  gaOptions: {
    userId: 123,
  },
};

export function initGA() {
  ReactGA.initialize(TRACKING_ID, ReactGAArgs);
}

export function sendPageview() {
  console.log("window.location", window.location);
  ReactGA.pageview(window.location.pathname + window.location.search);
}

export function setGADatalayer(data = {}) {
  window.dataLayer.push(data);
}

export function sendEvent(payload) {
  ReactGA.event(payload);
}
