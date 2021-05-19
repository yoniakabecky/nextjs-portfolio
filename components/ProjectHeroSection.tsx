import Link from "next/link";
import { RichText } from "prismic-reactjs";
import React, { ReactElement } from "react";
import styled from "styled-components";
import displaySize from "@@/styles/breakpoints";
import { IHeroSection } from "@@/types";
import ArrowForward from "./icons/ArrowForward";
import Pill from "./Pill";

interface Props extends IHeroSection {}

export default function HeroSection({
  title,
  image,
  skills,
}: Props): ReactElement {
  return (
    <Root>
      <Link href="/works">
        <BackBtn>
          <ArrowForward />
        </BackBtn>
      </Link>

      <Headline>
        <div>{RichText.render(title)}</div>

        <SkillsWrapper>
          {skills.map((skill, i) => (
            <Pill text={skill.text} key={i} />
          ))}
        </SkillsWrapper>
      </Headline>

      <Image src={image.url ?? undefined} alt={image.alt ?? undefined} />
    </Root>
  );
}

const Root = styled.section`
  flex-direction: column;
  position: relative;
  min-width: 100%;
  min-height: 100vh;
`;

const BackBtn = styled.div`
  position: absolute;
  top: 3.2rem;
  left: 2.4rem;
  cursor: pointer;

  svg {
    transform: rotate(180deg);
    width: 2.4rem;
    height: 2.4rem;
    fill: ${(props) => props.theme.colors.dark};
  }

  @media ${displaySize.xl} {
    top: 5vh;
    left: 3vw;

    svg {
      width: 1.67vw;
      height: 1.67vw;
    }
  }
`;

const Headline = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 60vh;
  padding: 0 10vw;
`;

const SkillsWrapper = styled.div`
  margin-top: 2rem;
`;

const Image = styled.img`
  width: 100%;
  height: 40rem;
  object-fit: cover;
  vertical-align: bottom;

  @media ${displaySize.xl} {
    height: 30vw;
  }
`;
