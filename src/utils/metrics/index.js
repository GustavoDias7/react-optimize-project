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
  debug: false,
  titleCase: false,
  gaOptions: {
    userId: 123,
  },
};

export function init() {
  ReactGA.initialize(TRACKING_ID, ReactGAArgs);
  TagManager.initialize(tagManagerArgs);
  // if (!window.GA_INITIALIZED) {
  //   window.GA_INITIALIZED = true;
  // }
}

function getLocation() {
  console.log(
    "window.location:",
    window.location.pathname + window.location.search
  );
  return window.location.pathname + window.location.search;
}

export function handleDatalayer() {
  // window.dataLayer.push({
  //   user_id: 123,
  //   event: "gtm.js",
  //   test: "testDataLayer"
  // });
  // window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "virtualPageview",
    pageUrl: getLocation(),
    pageTitle: "Page " + getLocation(),
  });
  TagManager.dataLayer(tagManagerArgs);
}

export function sendEvent(payload) {
  ReactGA.event(payload);
}

export function sendPageview() {
  ReactGA.set({ page: getLocation() });
  ReactGA.pageview(getLocation());
  sendEvent({
    category: "User",
    action: "Move to " + getLocation(),
  });
}
