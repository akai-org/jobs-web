import { configure, addDecorator, setAddon } from "@storybook/react";
import JSXAddon from "storybook-addon-jsx";
import { withThemesProvider } from "storybook-addon-styled-component-theme";

import theme from "../src/styles/theme";

const themes = [theme];
const req = require.context("../src", true, /.stories.js$/);

addDecorator(withThemesProvider(themes));
setAddon(JSXAddon);

const loadStories = () => {
  req.keys().forEach(file => req(file));
};

configure(loadStories, module);
