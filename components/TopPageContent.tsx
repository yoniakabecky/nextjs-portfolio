import React, { ReactElement } from "react";
import styled from "styled-components";
import size from "../styles/breakpoints";
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

export const Root = styled.section`
  position: absolute;
  bottom: 7.5vh;
  left: 10vw;
`;

export const Heading = styled.h1`
  font-family: ${(props) => props.theme.fonts.accent};
  font-size: 9.6rem;
  line-height: 100%;

  @media ${size.xl} {
    font-size: 6.5vw;
  }
  @media ${size.sm} {
    font-size: 6.4rem;
  }
  @media ${size.xs} {
    font-size: 5rem;
  }
`;

const Name = styled.span`
  color: ${(props) => props.theme.colors.tomato};
`;

export const Text = styled.p`
  width: 80vw;
  font-size: 2.4rem;
  line-height: 130%;

  @media ${size.xl} {
    font-size: 1.6vw;
  }
  @media ${size.sm} {
    font-size: 1.6rem;
  }
`;

export const LineBreak = styled.br`
  @media ${size.sm} {
    display: none;
  }
`;
