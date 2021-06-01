import React, { ReactElement } from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";
import displaySize from "@@/styles/breakpoints";
import { DefaultGroup } from "@@/types";

export default function NextSection({
  title,
  image,
}: DefaultGroup): ReactElement {
  return (
    <Root>
      <div>
        <h3>Next Project</h3>
        <NextProjectTitle>{RichText.asText(title)}</NextProjectTitle>
      </div>

      <Image src={image.url ?? undefined} alt={image.alt ?? undefined} />
    </Root>
  );
}

const Root = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 40rem;
  background-color: #f2f2f2;

  @media ${displaySize.xl} {
    height: 30vw;
  }
  @media ${displaySize.md} {
    height: 40vw;
  }
  @media ${displaySize.xs} {
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    height: 50vh;
  }
`;

const NextProjectTitle = styled.p`
  margin-top: 1rem;
  font-size: 2rem;

  @media ${displaySize.xl} {
    font-size: 1.67vw;
  }
  @media ${displaySize.md} {
    font-size: 1.6rem;
  }
  @media ${displaySize.xs} {
    font-size: 1.4rem;
  }
`;

const Image = styled.img`
  width: 50rem;
  height: 30rem;
  object-fit: cover;
  object-position: center;
  vertical-align: bottom;

  @media ${displaySize.xl} {
    width: 40vw;
    height: 24vw;
  }

  @media ${displaySize.md} {
    width: 50vw;
    height: 30vw;
  }
  @media ${displaySize.xs} {
    width: 80vw;
    height: auto;
    max-height: 30vh;
  }
`;
