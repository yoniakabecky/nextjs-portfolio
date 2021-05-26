import { RichText } from "prismic-reactjs";
import React, { ReactElement } from "react";
import styled from "styled-components";
import displaySize from "@@/styles/breakpoints";
import { IChallenge } from "@@/types";

interface WrapperProps {
  mask: boolean;
}

export default function ProjectChallengeSection({
  title,
  description,
  image,
  mask_image,
}: IChallenge): ReactElement {
  return (
    <Root>
      <Text>
        <div>{RichText.render(title)}</div>
        <Paragraph>{RichText.render(description)}</Paragraph>
      </Text>

      <ImageWrapper mask={mask_image}>
        <Image src={image.url ?? undefined} alt={image.alt ?? undefined} />
      </ImageWrapper>
    </Root>
  );
}

const Root = styled.section`
  display: flex;
  flex-direction: column;
  height: auto;
`;

const Text = styled.div`
  position: relative;
  margin: 20rem 0 12rem;
  padding: 0 10vw;
  z-index: 1;

  h2 {
    text-align: right;
  }

  @media ${displaySize.xl} {
    margin: 10vw 0 10vw;
  }

  @media ${displaySize.sm} {
    margin: 10vh 0 10vh;
  }
`;

const Paragraph = styled.div`
  margin-top: 3.2rem;
  max-width: 60rem;
  z-index: 1;
  float: right;

  @media ${displaySize.xl} {
    max-width: 50vw;
  }
`;

const ImageWrapper = styled.div<WrapperProps>`
  margin-top: ${(props) => (props.mask ? "unset" : "-15rem")};
  width: 100%;
  height: ${(props) => (props.mask ? "45rem" : "auto")};

  @media ${displaySize.xl} {
    margin-top: ${(props) => (props.mask ? "unset" : "-10vw")};
    height: ${(props) => (props.mask ? "40vw" : "auto")};
  }

  @media ${displaySize.sm} {
    margin-top: -5vh;
    height: ${(props) => (props.mask ? "40vw" : "auto")};
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
