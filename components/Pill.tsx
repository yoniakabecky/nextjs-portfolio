import React, { ReactElement } from "react";
import styled from "styled-components";
import displaySize from "@@/styles/breakpoints";

interface Props {
  text?: string;
  size?: "small" | "default";
}

interface RootProps {
  size: string;
}

export default function Pill({ text, size = "default" }: Props): ReactElement {
  return <Root size={size}>{text}</Root>;
}

const Root = styled.small<RootProps>`
  display: inline-block;
  border-radius: 3rem;
  margin: 0 0.4rem;
  background-color: ${(props) => props.theme.colors.dark};
  padding: ${({ size }) =>
    size === "small" ? "0.5rem 1.2rem 0.3rem" : "1rem 1.6rem 0.6rem"};
  color: ${(props) => props.theme.colors.light};
  font-weight: 300;
  font-size: ${({ size }) => (size === "small" ? "1.4rem" : "1.8rem")};

  :first-child {
    margin-left: 0;
  }

  @media ${displaySize.xl} {
    padding: ${({ size }) =>
      size === "small" ? "0.7rem 2rem 0.3rem" : "1.6rem 2.4rem 1rem"};
    font-size: ${({ size }) => (size === "small" ? "0.94vw" : "1.25vw")};
  }
  @media ${displaySize.md} {
    font-size: ${({ size }) => (size === "small" ? "1.2rem" : "1.35rem")};
  }
  @media ${displaySize.xs} {
    margin: 0.4rem;
  }
`;
