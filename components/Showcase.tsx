import React, { ReactElement } from "react";
import styled from "styled-components";
import ArrowForward from "./icons/ArrowForward";

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

  @media (min-width: 1500px) {
    height: 70vh;
  }
`;

const Relative = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Info = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 0;
  flex-direction: column;
  justify-content: center;
  transform: translateY(-50%);
  z-index: 1;
  border-radius: 0.8rem;
  margin-right: -10rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  padding: 1.6rem 2.4rem;

  @media (min-width: 1500px) {
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

  @media (min-width: 1500px) {
    top: 50%;
    transform: translateY(-50%);
    width: 50vw;
    height: 40vw;
    max-height: 60vh;
  }
`;

const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.accent};
  font-size: 9.6rem;
  line-height: 105%;
  text-shadow: 0 0 0.4rem rgba(0, 0, 0, 0.3);

  @media (min-width: 1500px) {
    font-size: 7vw;
  }
`;

const Description = styled.p`
  margin: 0.8rem 0;
  font-size: 2rem;
  line-height: 130%;
  text-shadow: 0 0 0.4rem rgba(0, 0, 0, 0.5);

  @media (min-width: 1500px) {
    margin: 1vw;
    font-size: 1.75vw;
  }
`;

const Stacks = styled.div`
  display: flex;
`;

const Stack = styled.span`
  display: inline-block;
  border-radius: 3rem;
  margin: 0 0.4rem;
  background-color: ${(props) => props.theme.colors.dark};
  padding: 0.5rem 1.2rem 0.3rem;
  font-weight: 300;
  font-size: 1.4rem;
  line-height: 130%;

  :first-child {
    margin-left: 0;
  }

  @media (min-width: 1500px) {
    padding: 0.7rem 2rem 0.3rem;
    font-size: 1.2vw;
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

  @media (min-width: 1500px) {
    margin-top: 3vw;
    p {
      margin-bottom: -0.3vw;
      font-size: 1.5vw;
    }
    svg {
      width: 1.75vw;
      height: 1.75vw;
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
`;
