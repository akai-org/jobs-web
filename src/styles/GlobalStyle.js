import { createGlobalStyle } from "styled-components";
import "normalize.css";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700&subset=latin-ext');

  body {
    font-family: "Lato", sans-serif;
    font-size: ${props => props.theme.font.size.base};
    color: ${props => props.theme.color.text.base};
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.color.text.primary};
  }

  h2 {
    font-size: ${props => props.theme.font.size.heading.secondary};
  }

  p {
    color: ${props => props.theme.color.text.base};
    line-height: ${props => props.theme.font.lineHeight.paragraph};
    margin: 1em 0 1.5em;
  }
  
  li {
    line-height: ${props => props.theme.font.lineHeight.paragraph};
  }
`;

export default GlobalStyle;
