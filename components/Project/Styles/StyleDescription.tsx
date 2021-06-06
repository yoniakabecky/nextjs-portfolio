import { RichText, RichTextBlock } from "prismic-reactjs";
import React, { ReactElement } from "react";
import styled from "styled-components";
import displaySize from "@@/styles/breakpoints";

interface Props {
  data: any;
}

interface PrimaryFields {
  title: RichTextBlock[];
  description: RichTextBlock[];
}

export default function StyleDescription({ data }: Props): ReactElement {
  const { title, description } = data as PrimaryFields;

  return (
    <Root>
      <div>{RichText.render(title)}</div>

      <Paragraph>{RichText.render(description)}</Paragraph>
    </Root>
  );
}

const Root = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 20rem auto 10rem;
  padding: 0 10vw;

  @media ${displaySize.xl} {
    margin: 20vw auto 10vw;
  }
`;

const Paragraph = styled.div`
  margin-top: 3.2rem;
  max-width: 60rem;
  z-index: 1;

  @media ${displaySize.xl} {
    max-width: 50vw;
  }
`;
