import React, { ReactElement } from "react";
import styled from "styled-components";
import ArrowForward from "./icons/ArrowForward";
import size from "../styles/breakpoints";

// TODO: create work interface
interface Props {
  date: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  details: string;
}

export default function Showcase({
  date,
  title,
  description,
  techStack,
  image,
  details,
}: Props): ReactElement {
  return (
    <Root>
      <Centered>
        <Relative>
          <InfoRoot>
            <Info>
              <Title>{title}</Title>

              <Description>{description}</Description>

              <Stacks>
                {techStack.map((stack, i) => (
                  <Stack key={`stack-${i}`}>{stack}</Stack>
                ))}
              </Stacks>

              {details && (
                <CTA>
                  <p>See details</p>
                  <ArrowForward />
                </CTA>
              )}
            </Info>
          </InfoRoot>

          <ImageWrapper>
            <img src={image} alt={`${title}`} />
          </ImageWrapper>
        </Relative>
      </Centered>

      <Timeline>
        <div>
          <Date>{date}</Date>

          <Circle />
        </div>
      </Timeline>
    </Root>
  );
}

const Root = styled.article`
  position: relative;
  margin: 0 auto;
  min-height: 100vh;
  scroll-snap-align: start;
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

const InfoRoot = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 0;
  flex-direction: column;
  justify-content: flex-end;
  transform: translateY(-50%);
  z-index: 1;

  @media ${size.md} {
    bottom: 0;
    transform: translateY(0);
  }
  @media ${size.sm} {
    justify-content: center;
    width: 90%;
  }
  @media ${size.xs} {
    top: 40%;
    justify-content: flex-start;
  }
`;

const Info = styled.div`
  border-radius: 0.8rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  padding: 1.6rem 2.4rem;

  @media ${size.xl} {
    padding: 3.2rem 4rem;
  }
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
    height: auto;
    object-fit: fill;
    object-position: center;
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

const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.accent};
  font-size: 9.6rem;
  line-height: 100%;
  text-shadow: 0 0 0.4rem rgba(0, 0, 0, 0.3);

  @media ${size.xl} {
    font-size: 6vw;
  }
  @media ${size.md} {
    font-size: 6.4rem;
  }
  @media ${size.xs} {
    font-size: 4rem;
  }
`;

const Description = styled.p`
  margin: 0.8rem 0;
  font-size: 2rem;
  line-height: 130%;
  text-shadow: 0 0 0.4rem rgba(0, 0, 0, 0.5);

  @media ${size.xl} {
    margin: 1vw 0;
    font-size: 1.25vw;
  }
  @media ${size.md} {
    font-size: 1.6rem;
  }
  @media ${size.xs} {
    font-size: 1.4rem;
  }
`;

const Stacks = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Stack = styled.small`
  display: inline-block;
  border-radius: 3rem;
  margin: 0 0.4rem;
  background-color: ${(props) => props.theme.colors.dark};
  padding: 0.5rem 1.2rem 0.3rem;
  font-weight: 300;
  line-height: 130%;

  :first-child {
    margin-left: 0;
  }

  @media ${size.xl} {
    padding: 0.7rem 2rem 0.3rem;
    font-size: 0.9vw;
  }
  @media ${size.xs} {
    margin: 0.4rem;
    font-size: 1.2rem;
  }
`;

const CTA = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3.6rem;
  cursor: pointer;

  p {
    margin-bottom: -0.3rem;
    font-size: 2rem;
    text-transform: uppercase;
  }

  svg {
    margin-left: 0.4rem;
    fill: ${(props) => props.theme.colors.light};
  }

  @media ${size.xl} {
    margin-top: 3vw;
    p {
      margin-bottom: -0.3vw;
      font-size: 1.25vw;
    }
    svg {
      width: 1.75vw;
      height: 1.75vw;
    }
  }
  @media ${size.md} {
    p {
      font-size: 1.6rem;
    }
    svg {
      width: 1.8rem;
      height: 1.8rem;
    }
  }
  @media ${size.xs} {
    p {
      font-size: 1.4rem;
    }
    svg {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
`;

const Timeline = styled.div`
  position: absolute;
  top: 50%;
  right: 7.1rem;
  transform: translateY(-50%);
  height: 70vh;
  overflow-y: hidden;

  > div {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  @media ${size.md} {
    right: 3.5rem;
  }
  @media ${size.xs} {
    display: none;
  }
`;

const Circle = styled.span`
  display: inline-block;
  border-radius: 50%;
  margin: 0 0.2rem 0 0.8rem;
  background-color: ${(props) => props.theme.colors.tomato};
  width: 0.8rem;
  height: 0.8rem;
`;

const Date = styled.p`
  color: ${(props) => props.theme.colors.tomato};
  font-size: 1.4rem;

  @media ${size.xs} {
    width: 2.6rem;
  }
`;
