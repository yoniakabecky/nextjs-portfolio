import { GetStaticProps } from "next";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Navigation from "@@/components/Navigation";
import ScrollIndicator from "@@/components/ScrollIndicator";
import Showcase from "@@/components/Showcase";
import { getAllWorksData } from "@@/lib/prismicio";
import size from "@@/styles/breakpoints";
import { IWork } from "@@/types";

interface Props {
  data: IWork[];
}

export default function Works({ data }: Props) {
  const [isLastPage, setIsLastPage] = useState<boolean>(false);

  useEffect(() => {
    const showcases = window?.document?.getElementById("showcases");

    if (showcases) {
      const handleScroll = () => {
        const hasPage =
          showcases.scrollHeight - showcases.scrollTop > window.innerHeight;

        if (!hasPage && !isLastPage) {
          setIsLastPage(true);
        } else if (hasPage && isLastPage) {
          setIsLastPage(false);
        }
      };

      showcases.addEventListener("scroll", handleScroll);

      return () => showcases.removeEventListener("scroll", handleScroll);
    }
  }, [isLastPage]);

  return (
    <>
      <Navigation contact />

      <ShowcaseWrapper id="showcases">
        <Heading>My Works</Heading>

        {data.map((work, i) => (
          <Showcase {...work} key={`work-${i}`} />
        ))}

        <TimeLine>
          <Axis />
        </TimeLine>

        {!isLastPage && <ScrollIndicator />}
      </ShowcaseWrapper>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAllWorksData();

  return {
    props: { data },
  };
};

const ShowcaseWrapper = styled.section`
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

const Heading = styled.h1`
  display: none;
`;

const TimeLine = styled.div`
  position: fixed;
  top: 50%;
  right: 7.6rem;
  align-items: center;
  transform: translateY(-50%);
  z-index: -1;
  height: 70vh;

  @media ${size.md} {
    right: 4rem;
  }
  @media ${size.xs} {
    display: none;
  }
`;

const Axis = styled.div`
  height: 100%;
  width: 2px;
  background-color: ${(props) => props.theme.colors.light};
`;
