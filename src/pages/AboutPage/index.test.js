import React from "react";
import ReactDOM from "react-dom";
import AboutPage from "./index";
import wrapTheme from "../../utils/wrapTheme";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const ThemedAboutPage = wrapTheme(<AboutPage />);
  ReactDOM.render(<ThemedAboutPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
