import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

export default function(tree) {
  return () => <ThemeProvider theme={theme}>{tree}</ThemeProvider>;
}
