import React, { ReactElement } from "react";
import styled from "styled-components";
import displaySize from "@@/styles/breakpoints";

interface Props {
  colors: any[];
}

interface ColorProps {
  color: string;
}

export default function ColorStyle({ colors }: Props): ReactElement {
  return (
    <Root>
      {colors.map(({ color }, i: number) => (
        <div key={`color-pallet-${i}`}>
          <ColorSquare color={color} />

          <ColorText>{color}</ColorText>
        </div>
      ))}
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 10rem auto;
  padding: 0 10vw;
`;

const ColorSquare = styled.div<ColorProps>`
  margin: 1rem;
  border: ${(props) =>
    props.color === "#ffffff"
      ? `solid 1px ${props.theme.colors.dark}`
      : "unset"};
  border-radius: 1rem;
  background-color: ${(props) => props.color};
  width: 12rem;
  height: 10rem;

  @media ${displaySize.xl} {
    width: 8.4vw;
    height: 7vw;
  }

  @media ${displaySize.xs} {
    margin: unset;
  }
`;

const ColorText = styled.p`
  margin: 0.8rem auto;
  text-align: center;
  text-transform: uppercase;

  @media ${displaySize.xl} {
    margin: 1vw auto;
  }
`;
