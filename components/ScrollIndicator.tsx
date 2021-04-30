import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  hide?: boolean;
}

interface RootProps {
  hide: boolean;
}

export default function ScrollIndicator({ hide = false }: Props): ReactElement {
  return (
    <Root hide={hide}>
      <Text>scroll</Text>

      <Line />
    </Root>
  );
}

const Root = styled.div<RootProps>`
  display: ${({ hide }) => (hide ? "none" : "flex")};
  position: fixed;
  right: 7.6rem;
  bottom: 0;
  align-items: center;
  overflow: hidden;
  height: 6rem;
`;

const Text = styled.small`
  margin-right: 2.4rem;
  letter-spacing: 0.1rem;
`;

const Line = styled.span`
  display: inline-block;
  height: 100%;
  border-right: 0.1rem solid ${(props) => props.theme.colors.light};
  animation: scroll 1.6s infinite;

  @keyframes scroll {
    from {
      transform: translateY(-6rem);
    }
    to {
      transform: translateY(6rem);
    }
  }
`;