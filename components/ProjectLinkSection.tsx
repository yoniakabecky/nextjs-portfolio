import Link from "next/link";
import React, { ReactElement } from "react";
import styled from "styled-components";
import ArrowForward from "./icons/ArrowForward";
import GitHubIcon from "./icons/GitHubIcon";
import GlobeIcon from "./icons/GlobeIcon";

interface Props {
  github?: any;
  demo?: any;
}

export default function ProjectLinkSection({
  github,
  demo,
}: Props): ReactElement {
  return (
    <Root>
      <WebLinks>
        {demo && (
          <LinkWrapper href={demo.url} target={demo.target}>
            <GlobeIcon />
            <span>Live demo</span>
          </LinkWrapper>
        )}

        {github && (
          <LinkWrapper href={github.url} target={github.target}>
            <GitHubIcon />
            <span>Source code</span>
          </LinkWrapper>
        )}
      </WebLinks>

      <ContactPageLink>
        Liked my work?
        <span>
          <Link href="/contact">Get in touch</Link>
          <ArrowForward />
        </span>
      </ContactPageLink>
    </Root>
  );
}

const Root = styled.section`
  padding: 12rem 0;
`;

const WebLinks = styled.div`
  display: flex;
  justify-content: center;
`;

const LinkWrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 3.2rem;
  width: 15rem;

  :last-child {
    margin-right: 0;
  }

  svg {
    width: 4.8rem;
    height: 4.8rem;
    fill: ${(props) => props.theme.colors.dark};
  }

  span {
    margin-top: 0.8rem;
    font-weight: 600;
    font-size: 24px;
  }
`;

const ContactPageLink = styled.p`
  text-align: center;
  margin-top: 12rem;

  span {
    margin-left: 1rem;
    color: ${(props) => props.theme.colors.tomato};
  }
  svg {
    margin-bottom: -0.4rem;
    margin-left: 0.4rem;
    width: 2rem;
    height: 2rem;
    fill: ${(props) => props.theme.colors.tomato};
  }
`;
