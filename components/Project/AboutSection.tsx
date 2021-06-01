import { motion } from "framer-motion";
import { RichText } from "prismic-reactjs";
import React, { ReactElement } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import displaySize from "@@/styles/breakpoints";
import { DefaultGroup } from "@@/types";

export default function AboutSection({
  title,
  description,
  image: logo,
}: DefaultGroup): ReactElement {
  const [ref, inView] = useInView();

  return (
    <Root
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
    >
      <Text
        initial={{ x: -400 }}
        animate={inView ? { x: 0 } : { x: -400 }}
        transition={{ duration: 0.5 }}
      >
        <div>{RichText.render(title)}</div>
        <Paragraph>{RichText.render(description)}</Paragraph>
      </Text>

      <Image
        src={logo.url ?? undefined}
        alt={logo.alt ?? undefined}
        initial={{ x: 400, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: 400, opacity: 0 }}
        transition={{
          duration: 0.3,
          delay: 0.2,
          type: "spring",
          mass: 0.6,
        }}
      />
    </Root>
  );
}

const Root = styled(motion.section)`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 20rem auto 10rem;

  @media ${displaySize.xl} {
    margin: 20vw auto 10vw;
  }
`;

const Text = styled(motion.div)`
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

const Image = styled(motion.img)`
  align-self: flex-end;
  margin-top: -20vh;
  margin-right: 5vw;
  z-index: 0;
  width: auto;
  max-width: 50vw;
  height: auto;
  max-height: 60vh;

  @media ${displaySize.xl} {
    margin-top: -10vw;
  }

  @media ${displaySize.sm} {
    margin-right: unset;
    align-self: center;
    max-width: 80vw;
  }
`;
