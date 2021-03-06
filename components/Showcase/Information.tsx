import Link from "next/link";
import React, { ReactElement } from "react";
import styled from "styled-components";
import size from "@@/styles/breakpoints";
import { IWork } from "@@/types";
import ArrowForward from "../icons/ArrowForward";
import Pill from "../Pill";

export default function Information({
  title,
  description,
  skills,
  details,
  detail_page,
}: IWork): ReactElement {
  const techStack = skills[0]?.text?.split(",") ?? [];

  return (
    <Root>
      <Background>
        <Title>{title[0].text}</Title>

        <Description>{description[0].text}</Description>

        <Stacks>
          {techStack.map((stack, i) => (
            <Pill text={stack} size="small" key={`stack-${i}`} />
          ))}
        </Stacks>

        {details && (
          <Link href={`/works/${detail_page.uid}`}>
            <CTA>
              <p>See details</p>
              <ArrowForward />
            </CTA>
          </Link>
        )}
      </Background>
    </Root>
  );
}

const Root = styled.div`
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

const Background = styled.div`
  border-radius: 0.8rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  padding: 1.6rem 2.4rem;

  @media ${size.xl} {
    padding: 3.2rem 4rem;
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
