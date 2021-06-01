import { GetStaticPaths, GetStaticProps } from "next";
import { RichText } from "prismic-reactjs";
import React, { ReactElement } from "react";
import styled from "styled-components";
import BasicMeta from "@@/components/meta/BasicMeta";
import AboutSection from "@@/components/Project/AboutSection";
import ChallengeSection from "@@/components/Project/ChallengeSection";
import HeroSection from "@@/components/Project/HeroSection";
import LinkSection from "@@/components/Project/LinkSection";
import { getDocumentsByType, getProjectByUid } from "@@/lib/prismicio";
import { IProject } from "@@/types";

interface Props {
  data: IProject;
}

export default function Project({ data }: Props): ReactElement {
  const metaTitle = RichText.asText(data.meta[0].title);
  const metaDescription = RichText.asText(data.meta[0].description);

  console.log(data);
  return (
    <Root>
      <BasicMeta title={metaTitle} description={metaDescription} />

      <HeroSection {...data.hero[0]} />

      <AboutSection {...data.about[0]} />

      <ChallengeSection {...data.challenge[0]} />

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
