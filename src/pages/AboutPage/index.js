import React from "react";
import Container from "../../components/Container";
import { pageView } from "../../services/AnalyticsService";

const AboutPage = () => pageView || <Container>This is about page.</Container>;

export default AboutPage;
