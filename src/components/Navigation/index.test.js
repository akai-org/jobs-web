import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./index";
import wrapTheme from "../../utils/wrapTheme";
import wrapRouter from "../../utils/wrapRouter";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const ThemedNavigation = wrapTheme(<Navigation />);
  const RoutedNavigation = wrapRouter(<ThemedNavigation />);
  ReactDOM.render(<RoutedNavigation />, div);
  ReactDOM.unmountComponentAtNode(div);
});
