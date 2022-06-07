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

const TRACKING_ID = "UA-230277864-1";
const ReactGAArgs = {
  debug: true,
  titleCase: false,
  gaOptions: {
    userId: 123,
  },
};

export function init() {
  if (!window.GA_INITIALIZED) {
    ReactGA.initialize(TRACKING_ID, ReactGAArgs);
    TagManager.initialize(tagManagerArgs);
    window.GA_INITIALIZED = true;
  }
}

function getLocation() {
  return window.location.pathname + window.location.search;
}

export function sendPageview() {
  ReactGA.set({ page: getLocation() });
  ReactGA.pageview(getLocation());
}

export function setDatalayer(data = {}) {
  window.dataLayer.push(data);
  TagManager.dataLayer(tagManagerArgs);
}

export function sendEvent(payload) {
  ReactGA.event(payload);
}
