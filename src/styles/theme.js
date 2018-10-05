import { css } from "styled-components";

const theme = {
  name: "DEFAULT",
  color: {
    accent: {
      primary: "#226ce7",
      secondary: "#f42e4f"
    },
    background: {
      base: "#fff",
      light: "#f5f5f5"
    },
    text: {
      primary: "#222",
      base: "#666",
      light: "#aaa",
      lighter: "#fff",
      money: "#3ccb3c"
    },
    elements: {
      icon: "#ddd",
      border: "#ddd",
      line: "#eee",
      menu: "#666",
      dropdown: "#222",
      tickmark: "#3ccb3c",
    },
  },
  font: {
    family: {
      base: "\"Lato\", sans-serif"
    },
    size: {
      base: "16px",
      heading: {
        primary: "2rem",
        secondary: "1.5rem",
        tertiary: "1.25rem",
        base: "1rem"
      },
      label: {
        primary: "1.25rem",
        secondary: "0.875rem",
        tertiary: "0.75rem",
        base: "1rem"
      }
    },
    letterSpacing: {
      wide: "0.1rem"
    },
    lineHeight: {
      heading: "1.3",
      label: "1.2",
      paragraph: "1.8"
    }
  },
  size: {
    border: {
      base: "2px",
      thin: "1px"
    }
  },
  effects: {
    shadow: {
      box: "0px 3px 15px 0 rgba(0,0,0,.06)",
      header: "0px 3px 15px 0 rgba(0,0,0,.06)",
    },
    transition: {
      quick: "0.2s ease-out",
      slow: "0.4s ease-out",
      slower: "1s ease-out",
    },
    hover: {
      opacity: "0.8"
    }
  }
};

export default theme;