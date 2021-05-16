import React, { ReactElement } from "react";
import styled from "styled-components";
import size from "../../styles/breakpoints";
import { TimelineDate } from "../../types";

interface Props {
  date: TimelineDate;
}

export default function Timeline({ date }: Props): ReactElement {
  return (
    <Root>
      <div>
        <DateDisplay>
          {date
            ? `${new Date(date).toLocaleString("default", {
                month: "short",
                year: "numeric",
              })}`
            : null}
        </DateDisplay>

        <Circle />
      </div>
    </Root>
  );
}

const Root = styled.div`
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

  @media ${size.md} {
    right: 3.5rem;
  }
  @media ${size.xs} {
    display: none;
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

const DateDisplay = styled.p`
  color: ${(props) => props.theme.colors.tomato};
  font-size: 1.4rem;

  @media ${size.xs} {
    width: 2.6rem;
  }
`;
