import React from "react";

import styled from "styled-components";

import Heading from "../../styled-components/Heading";
import StyledCTA from "../../components/StyledCTA";

const Image = styled.img`
  display: block;
  margin: 20px auto;
`;

const SubHeading = styled.h2`
  font-weight: 300;
  margin: 0;
`;

const Paragraph = styled.p`
  color: #777;
  font-size: 0.9rem;
`;

export default () => (
  <div>
    <Heading>Rozpocznij karierę w IT.</Heading>
    <SubHeading>Przeglądaj tysiące ofert i aplikuj.</SubHeading>
    <Paragraph>
      Strona AKAI Jobs pomaga codziennie tysiącom osób w znalezieniu najlepszego
      punktu startowego na ścieżce kariery. Odkryj wymażoną pierwszą pracę i
      zdobądź pierwsze doświadczenia w świecie IT.
    </Paragraph>
    <Image src="https://via.placeholder.com/350/ddddFF/808080" />
    <StyledCTA to="/offers">Przeglądaj oferty</StyledCTA>
  </div>
);
