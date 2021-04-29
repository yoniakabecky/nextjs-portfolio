import React, { ReactElement } from "react";
import styled from "styled-components";
import SocialIcons from "./SocialIcons";

export default function TopPageContent(): ReactElement {
  return (
    <Root>
      <Heading>
        Hi there, <br />
        I'm <Name>Yoni Aoki</Name>
      </Heading>

      <Text>
        A Front-end Developer based in Vancouver, Canada. <LineBreak />
        Available for full-time roles & freelance projects.
      </Text>

      <SocialIcons />
    </Root>
  );
}

const Root = styled.div`
  position: absolute;
  bottom: 7.5vh;
  left: 10vw;
`;

const Heading = styled.h1`
  font-family: ${(props) => props.theme.fonts.accent};
  font-size: 9.6rem;
  line-height: 105%;

  @media (min-width: 1500px) {
    font-size: 7vw;
  }
  @media (max-width: 767px) {
    font-size: 6.4rem;
  }
  @media (max-width: 424px) {
    font-size: 5rem;
  }
`;

const Name = styled.span`
  color: ${(props) => props.theme.colors.tomato};
`;

const Text = styled.p`
  width: 80vw;
  font-size: 2.4rem;
  line-height: 130%;

  @media (min-width: 1500px) {
    font-size: 1.75vw;
  }
  @media (max-width: 767px) {
    font-size: 1.6rem;
  }
`;

const LineBreak = styled.br`
  @media (max-width: 767px) {
    display: none;
  }
`;
