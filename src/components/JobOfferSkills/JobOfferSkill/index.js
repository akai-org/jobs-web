import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import Box from "../../../styled-components/Box";

const BoxWithMargin = styled(Box)`
  ${({ theme }) => theme.media.tablet`
    margin-bottom: 20px;
  `}
`;

const Name = styled.span`
  color: ${({ theme }) => theme.color.text.primary};
  font-weight: 700;
`;

const Skill = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 10px 0 0;
  display: flex;
  justify-content: center;
`;

const Indicator = styled.li`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  margin: 0 3px;
  border: ${({ theme }) => theme.size.border.base} solid
    ${({ theme }) => theme.color.elements.indicator};

  ${({ theme, isActive }) =>
    isActive &&
    css`
      background: ${theme.color.elements.indicator};
    `}
`;

const Label = styled.div`
  background: ${({ theme }) => theme.color.background.dark};
  border-radius: ${({ theme }) => theme.size.borderRadius};
  color: ${({ theme }) => theme.color.text.lighter};
  font-size: ${({ theme }) => theme.font.size.label.tertiary};
  position: absolute;
  top: 100%;
  left: 50%;
  width: 100px;
  padding: 10px 20px;
  margin-top: 15px;
  transform: translate(-50%);
  opacity: 0;
  transition: opacity ${({ theme }) => theme.effects.transition.base};

  &::before {
    display: block;
    content: "";
    background: ${({ theme }) => theme.color.background.dark};
    width: 12px;
    height: 12px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    z-index: -1;
  }
`;

const SkillWrapper = styled.div`
  position: relative;

  &:hover {
    ${Label} {
      opacity: 1;
    }
  }
`;

const mapStarsToString = stars => {
  const levels = [
    "",
    "Podstawowa znajomość",
    "Dobra znajomość",
    "Bardzo dobra znajomość"
  ];

  if (stars >= levels.length) return "";
  return levels[stars];
};

const JobOfferSkill = ({ name, stars }) => (
  <BoxWithMargin>
    <Name>{name}</Name>
    <SkillWrapper>
      <Skill>
        {[0, 1, 2].map(i => (
          <Indicator key={i} isActive={i < stars} />
        ))}
      </Skill>
      <Label>{mapStarsToString(stars)}</Label>
    </SkillWrapper>
  </BoxWithMargin>
);

JobOfferSkill.propTypes = {
  name: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired
};

export default JobOfferSkill;
