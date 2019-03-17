import React from "react";

import Container from "../../components/Container";
import SignUpContainer from "../../containers/SignUpContainer";
import { pageView } from "../../services/AnalyticsService";

const SignUpPage = () =>
  pageView() || (
    <Container>
      <SignUpContainer />
    </Container>
  );

export default SignUpPage;
