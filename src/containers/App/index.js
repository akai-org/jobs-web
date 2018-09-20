import React, { Component } from "react";
import Heading from "../../components/Heading/index";
import LinkCTA from "../../components/LinkCTA/index";
import Container from "../../components/Container/index";

class App extends Component {
  render() {
    return (
      <Container>
        <Heading>Akai Jobs Style Guide</Heading>
        <LinkCTA primary>Primary button</LinkCTA>
        <LinkCTA>Secondary button</LinkCTA>
      </Container>
    );
  }
}

export default App;
