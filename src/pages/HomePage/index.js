import React from "react";
import Container from "../../components/Container";
import Hero from "../../containers/Hero";
import { pageView } from "../../services/AnalyticsService";

const HomePage = () =>
  pageView() || (
    <Container>
      <Hero />
    </Container>
  );

export default HomePage;
