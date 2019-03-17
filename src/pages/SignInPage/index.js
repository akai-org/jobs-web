import React from "react";

import Container from "../../components/Container";
import SignInContainer from "../../containers/SignInContainer";
import { pageView } from "../../services/AnalyticsService";

const SignInPage = () =>
  pageView() || (
    <Container>
      <SignInContainer />
    </Container>
  );

export default SignInPage;
