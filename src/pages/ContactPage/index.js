import React from "react";
import Container from "../../components/Container";
import { pageView } from "../../services/AnalyticsService";

const ContactPage = () =>
  pageView() || <Container>This is contact page.</Container>;

export default ContactPage;
