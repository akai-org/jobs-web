import React from "react";

import styled from "styled-components";

import Heading from "../../styled-components/Heading";
import StyledCTA from "../../components/StyledCTA";
import { Column, ColumnContainer } from "../../styled-components/Columns";
import artwork from "../../assets/images/artwork.png";

const Image = styled.img`
  display: block;
  margin: 20px auto;
`;

const HeroHeading = styled(Heading)`
  margin-bottom: 0;
`;

const SubHeading = styled(Heading)`
  margin-top: 0;
  font-weight: 300;
`;

const HeroColumnContainer = styled(ColumnContainer)`
  align-items: center;
  padding: 30px 0;
`;

export default () => (
  <HeroColumnContainer>
    <Column>
      <HeroHeading>Rozpocznij karierę w IT.</HeroHeading>
      <SubHeading as="h2">Przeglądaj tysiące ofert i aplikuj.</SubHeading>
      <p>
        Strona AKAI Jobs pomaga codziennie tysiącom osób w znalezieniu
        najlepszego punktu startowego na ścieżce kariery. Odkryj wymarzoną
        pierwszą pracę i zdobądź pierwsze doświadczenia w świecie IT.
      </p>
      <StyledCTA primary to="/offers">
        Przeglądaj oferty
      </StyledCTA>
    </Column>
    <Column>
      <Image src={artwork} />
    </Column>
  </HeroColumnContainer>
);
