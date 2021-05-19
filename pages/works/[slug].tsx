import { GetStaticPaths, GetStaticProps } from "next";
import React, { ReactElement } from "react";
import styled from "styled-components";
import AboutSection from "../../components/ProjectAboutSection";
import HeroSection from "../../components/ProjectHeroSection";
import LinkSection from "../../components/ProjectLinkSection";
import { getDocumentsByType, getProjectByUid } from "../../lib/prismicio";
import { IProject } from "../../types";

interface Props {
  data: IProject;
}

export default function Project({ data }: Props): ReactElement {
  return (
    <Root>
      <HeroSection {...data.hero[0]} />

      <AboutSection {...data.about[0]} />

      <LinkSection demo={data.demo} github={data.github} />
    </Root>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await getDocumentsByType("projects");

  return {
    paths: res.map((doc) => `/works/${doc.uid}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params?.slug) {
    const data = await getProjectByUid(params.slug as string);

    return {
      props: { data },
    };
  }

  return {
    props: {},
  };
};

const Root = styled.main`
  min-width: 100vw;
  min-height: 100vh;
  background-color: white;
  color: ${(props) => props.theme.colors.dark};
`;
