import { motion, Variants } from "framer-motion";
import React, { ReactElement } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import size from "@@/styles/breakpoints";
import { IWork } from "@@/types";
import Information from "./Information";
import Timeline from "./Timeline";

const imgVariants: Variants = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, x: "-100%" },
};

export default function Showcase(data: IWork): ReactElement {
  const [ref, inView] = useInView({
    threshold: 0.5,
    rootMargin: "-15% 0px",
  });

  return (
    <Root ref={ref} style={{ opacity: inView ? 1 : 0 }}>
      <Centered>
        <Relative>
          <Information {...data} />

          <ImageWrapper>
            <motion.img
              src={data.image.url ?? undefined}
              alt={data.image.alt ?? undefined}
              animate={inView ? "visible" : "hidden"}
              exit={{ opacity: 0, x: "100%" }}
              variants={imgVariants}
            />
          </ImageWrapper>
        </Relative>
      </Centered>

      <Timeline date={data.date} />
    </Root>
  );
}

const Root = styled(motion.article)`
  position: relative;
  margin: 0 auto;
  min-height: 100vh;
  scroll-snap-align: center;
  transition: opacity 0.3s ease-in-out;
`;

const Centered = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 12rem;
  right: 20rem;
  justify-content: center;
  align-items: center;
  transform: translateY(-50%);
  height: 40rem;

  @media ${size.xl} {
    left: 10vw;
    right: 13vw;
    height: 70vh;
  }
  @media ${size.md} {
    top: 50%;
    left: 30%;
    transform: translate(-30%, -50%);
    width: 70vw;
    height: 50vh;
  }
  @media ${size.xs} {
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90vw;
  }
`;

const Relative = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ImageWrapper = styled.div`
  position: absolute;
  right: 0;
  overflow: hidden;
  border-radius: 8px;
  width: 60rem;
  height: 40rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    filter: brightness(0.9);
  }

  @media ${size.xl} {
    top: 50%;
    transform: translateY(-50%);
    width: 50vw;
    height: 40vw;
    max-height: 60vh;
  }
  @media ${size.md} {
    width: 45rem;
    height: 30rem;
  }
  @media ${size.xs} {
    width: 90%;
  }
`;
