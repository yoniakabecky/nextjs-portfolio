import Link from "next/link";
import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  noName?: boolean;
  contact?: boolean;
}

interface RootProps {
  hasName: boolean;
}

interface NameProps {
  show: boolean;
}

export default function Navigation({
  noName = false,
  contact = false,
}: Props): ReactElement {
  return (
    <Root hasName={!noName}>
      <Name show={!noName}>
        <Link href="/">Yoni Aoki</Link>
      </Name>

      <RightTop>
        {contact ? (
          <Link href="/contact">Say Hello</Link>
        ) : (
          <Link href="/works">What I do</Link>
        )}
      </RightTop>
    </Root>
  );
}

const Root = styled.nav<RootProps>`
  display: flex;
  position: fixed;
  top: 0;
  justify-content: ${({ hasName }) => (hasName ? "space-between" : "flex-end")};
  align-items: center;
  z-index: 10;
  margin: 0 auto;
  padding: 0 7.6rem;
  width: 100vw;
  height: 12rem;

  @media (max-width: 1024px) {
    padding: 0 4rem;
  }
  @media (max-width: 767px) {
    height: 10rem;
  }
`;

const Name = styled.div<NameProps>`
  display: ${(props) => (props.show ? "block" : "none")};

  a {
    color: ${(props) => props.theme.colors.tomato};
    font-family: ${(props) => props.theme.fonts.accent};
    font-size: 3.6rem;

    @media (max-width: 767px) {
      font-size: 2.6rem;
    }
  }
`;

const RightTop = styled.div`
  justify-self: flex-end;

  a {
    font-size: 2rem;
    font-weight: 300;

    @media (max-width: 767px) {
      font-size: 1.6rem;
    }
  }
`;
