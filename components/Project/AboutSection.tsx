import { RichText } from "prismic-reactjs";
import React, { ReactElement } from "react";
import styled from "styled-components";
import displaySize from "@@/styles/breakpoints";
import { DefaultGroup } from "@@/types";

export default function AboutSection({
  title,
  description,
  image: logo,
}: DefaultGroup): ReactElement {
  return (
    <Root>
      <Text>
        <div>{RichText.render(title)}</div>
        <Paragraph>{RichText.render(description)}</Paragraph>
      </Text>

      <Image src={logo.url ?? undefined} alt={logo.alt ?? undefined} />
    </Root>
  );
}

const Root = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 20rem auto 10rem;

  @media ${displaySize.xl} {
    margin: 20vw auto 10vw;
  }
`;

const Text = styled.div`
  position: relative;
  padding: 0 10vw;
  z-index: 1;
`;

const Paragraph = styled.div`
  margin-top: 3.2rem;
  max-width: 60rem;
  z-index: 1;

  @media ${displaySize.xl} {
    max-width: 50vw;
  }
`;

const Image = styled.img`
  align-self: flex-end;
  margin-top: -10rem;
  margin-right: 5vw;
  z-index: 0;
  width: 100%;
  max-width: 50vw;
  height: 100%;
  max-height: 50vh;

  @media ${displaySize.xl} {
    margin-top: -10vw;
  }

  @media ${displaySize.sm} {
    margin-right: unset;
    align-self: center;
    max-width: 80vw;
  }
`;
