import React from "react";
import ReactDOM from "react-dom";
import LinkCTA from "./index";
import wrapTheme from "../../utils/wrapTheme";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const ThemedLinkCTA = wrapTheme(<LinkCTA />);
  ReactDOM.render(<ThemedLinkCTA />, div);
  ReactDOM.unmountComponentAtNode(div);
});
