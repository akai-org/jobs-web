import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "../styles/theme";

export default function(tree) {
  return () => <Router theme={theme}>{tree}</Router>;
}
