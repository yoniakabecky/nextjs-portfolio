import Link from "next/link";
import React, { ReactElement } from "react";
import styled from "styled-components";
import displaySize from "@@/styles/breakpoints";
import { FilledLinkToWebField } from "@@/types/prismic-types";
import ArrowForward from "../icons/ArrowForward";
import GitHubIcon from "../icons/GitHubIcon";
import GlobeIcon from "../icons/GlobeIcon";

interface Props {
  github: FilledLinkToWebField;
  demo: FilledLinkToWebField;
}

export default function LinkSection({ github, demo }: Props): ReactElement {
  return (
    <Root>
      <Heading>Links</Heading>

      <WebLinks>
        {demo.link_type === "Web" && (
          <LinkWrapper href={demo.url} target={demo.target}>
            <GlobeIcon />
            <span>Live demo</span>
          </LinkWrapper>
        )}

        {github.link_type === "Web" && (
          <LinkWrapper href={github.url} target={github.target}>
            <GitHubIcon />
            <span>Source code</span>
          </LinkWrapper>
        )}
      </WebLinks>

      <ContactPageLink>
        Liked my work?{" "}
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

  @media ${displaySize.xl} {
    padding: 10vw 0;
  }
`;

const Heading = styled.h2`
  display: none;
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
    font-size: 2.4rem;
  }

  @media ${displaySize.xl} {
    width: 15vw;

    svg {
      width: 3vw;
      height: 3vw;
    }
    span {
      font-size: 1.67vw;
    }
  }

  @media ${displaySize.sm} {
    margin-right: unset;

    svg {
      width: 3.3rem;
      height: 3.3rem;
    }
    span {
      font-size: 1.8rem;
    }
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

  @media ${displaySize.xl} {
    margin-top: 10vw;

    svg {
      margin-bottom: -0.4vw;
      width: 1.7vw;
      height: 1.7vw;
    }
  }
`;
