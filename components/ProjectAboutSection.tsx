import { RichText } from "prismic-reactjs";
import React, { ReactElement } from "react";
import styled from "styled-components";
import { IAboutSection } from "../types";

interface Props extends IAboutSection {}

export default function ProjectAboutSection({
  title,
  description,
  logo,
}: Props): ReactElement {
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
  justify-content: center;
  /* padding-top: 20rem; */
  min-height: 100vh;
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
`;
