import React from "react";
import styled from "styled-components";

import Box from "../../../styled-components/Box";

const JobOfferSkill = ({ name, stars }) => (
  <Box>
    {name} - {stars}
  </Box>
);

export default JobOfferSkill;
