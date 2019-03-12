import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

import Heading from "../../styled-components/Heading";
import Subheading from "../../styled-components/Heading";
import { PrimaryButton } from "../../styled-components/Buttons";
import { Column, ColumnContainer } from "../../styled-components/Columns";
import artwork from "../../assets/images/artwork.png";

const Image = styled.img`
  display: block;
  margin: 20px auto;
`;

const HeroColumnContainer = styled(ColumnContainer)`
  align-items: center;
  padding: 30px 0;
`;

export default () => (
  <HeroColumnContainer>
    <Column>
      <Heading>Rozpocznij karierę w IT.</Heading>
      <Subheading as="h2">Przeglądaj tysiące ofert i aplikuj.</Subheading>
      <p>
        Strona AKAI Jobs pomaga codziennie tysiącom osób w znalezieniu
        najlepszego punktu startowego na ścieżce kariery. Odkryj wymarzoną
        pierwszą pracę i zdobądź pierwsze doświadczenia w świecie IT.
      </p>
      <PrimaryButton large as={Link} to="/offers">
        Przeglądaj oferty
      </PrimaryButton>
    </Column>
    <Column>
      <Image src={artwork} />
    </Column>
  </HeroColumnContainer>
);
