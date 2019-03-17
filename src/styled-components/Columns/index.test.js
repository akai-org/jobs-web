import React from "react";
import ReactDOM from "react-dom";
import { Column, ColumnContainer } from "./index";
import wrapTheme from "../../utils/wrapTheme";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const Themed = wrapTheme(
    <ColumnContainer>
      <Column />
    </ColumnContainer>
  );
  ReactDOM.render(<Themed />, div);
  ReactDOM.unmountComponentAtNode(div);
});
