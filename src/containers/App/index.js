import React, { Component } from "react";
import Heading from "../../components/Heading/index";
import LinkCTA from "../../components/LinkCTA/index";
import SiteContainer from "../../components/SiteContainer/index";

class App extends Component {
  render() {
    return (
      <SiteContainer>
        <Heading>Akai Jobs Style Guide</Heading>
        <LinkCTA primary>Primary button</LinkCTA>
        <LinkCTA>Secondary button</LinkCTA>
      </SiteContainer>
    );
  }
}

export default App;
