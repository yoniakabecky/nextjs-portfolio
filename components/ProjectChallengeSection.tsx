import { RichText } from "prismic-reactjs";
import React, { ReactElement } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import displaySize from "@@/styles/breakpoints";
import { IChallenge } from "@@/types";
import { motion } from "framer-motion";

interface WrapperProps {
  maskImage: boolean;
}

export default function ProjectChallengeSection({
  title,
  description,
  image,
  mask_image,
}: IChallenge): ReactElement {
  const [ref, inView] = useInView();

  return (
    <Root
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
    >
      <Text
        initial={{ x: 400 }}
        animate={inView ? { x: 0 } : { x: 400 }}
        transition={{ duration: 0.5 }}
      >
        <div>{RichText.render(title)}</div>
        <Paragraph>{RichText.render(description)}</Paragraph>
      </Text>

      <ImageWrapper
        maskImage={mask_image}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <Image src={image.url ?? undefined} alt={image.alt ?? undefined} />
      </ImageWrapper>
    </Root>
  );
}

const Root = styled(motion.section)`
  display: flex;
  flex-direction: column;
  height: auto;
`;

const Text = styled(motion.div)`
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

const ImageWrapper = styled(motion.div)<WrapperProps>`
  margin-top: ${(props) => (props.maskImage ? "unset" : "-15rem")};
  width: 100%;
  height: ${(props) => (props.maskImage ? "45rem" : "auto")};

  @media ${displaySize.xl} {
    margin-top: ${(props) => (props.maskImage ? "unset" : "-10vw")};
    height: ${(props) => (props.maskImage ? "40vw" : "auto")};
  }

  @media ${displaySize.sm} {
    margin-top: -5vh;
    height: ${(props) => (props.maskImage ? "40vw" : "auto")};
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
