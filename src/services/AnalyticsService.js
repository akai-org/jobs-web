import ReactGA from "react-ga";

export function pageView() {
  ReactGA.pageview(window.location.pathname + window.location.search);
}
