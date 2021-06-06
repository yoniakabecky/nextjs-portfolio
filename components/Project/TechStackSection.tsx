import Image from "next/image";
import React, { ReactElement } from "react";
import styled from "styled-components";
import displaySize from "@@/styles/breakpoints";

interface Props {
  stacks: any[];
}

interface StackProps {
  stack: string;
}

export default function TechStackSection({ stacks }: Props): ReactElement {
  return (
    <Root>
      <h2>Tech Stack</h2>

      <Wrapper>
        {stacks.map(({ stack }, i) => (
          <Stack key={i} stack={stack as string} />
        ))}
      </Wrapper>
    </Root>
  );
}

const Stack = ({ stack }: StackProps) => {
  return (
    <StackRoot>
      <Image
        src={`/stack/${stack}.png`}
        alt={`${stack} logo`}
        width={80}
        height={80}
        layout="responsive"
      />
    </StackRoot>
  );
};

const Root = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 20rem auto 10rem;
  padding: 0 10vw;
  text-align: center;

  @media ${displaySize.xl} {
    margin: 20vw auto 10vw;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 6rem auto;
  width: 100%;
`;

const StackRoot = styled.div`
  width: 8rem;
  height: 8rem;
  margin-bottom: 2rem;

  img {
    object-fit: contain;
  }
`;
