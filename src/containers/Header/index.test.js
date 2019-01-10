import React from "react";
import ReactDOM from "react-dom";
import Header from "./index";
import wrapTheme from "../../utils/wrapTheme";

it("renders without crashing", () => {
  const div = document.createElement("div");
  wrapTheme(<Header />);
  ReactDOM.unmountComponentAtNode(div);
});
