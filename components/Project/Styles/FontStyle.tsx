import { RichText, RichTextBlock } from "prismic-reactjs";
import React, { ReactElement } from "react";
import styled from "styled-components";
import displaySize from "@@/styles/breakpoints";
import { BooleanField, ImageField } from "@@/types/prismic-types";

interface FontSlice {
  font_bg: string;
  font_img: ImageField;
  font_name: RichTextBlock[];
  darker_bg: BooleanField;
}

interface Props {
  fonts: any[];
}

interface FontRootProps {
  color: string;
}

interface TextColor {
  darkBg: boolean;
}

export default function FontStyle({ fonts }: Props): ReactElement {
  return (
    <Root>
      {fonts.map((font, i) => (
        <Font {...(font as FontSlice)} key={i} />
      ))}
    </Root>
  );
}

const Font = ({ font_bg, font_img, font_name, darker_bg }: FontSlice) => (
  <FontRoot color={font_bg}>
    <ImageWrapper>
      <img src={font_img.url ?? undefined} alt={font_img.alt ?? undefined} />
    </ImageWrapper>

    <Line darkBg={darker_bg} />

    <FontName darkBg={darker_bg}>{RichText.render(font_name)}</FontName>
  </FontRoot>
);

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 5rem auto;
  padding: 0 10vw;

  @media ${displaySize.xs} {
    flex-direction: column;
  }
`;

const FontRoot = styled.div<FontRootProps>`
  position: relative;
  border-radius: 1rem;
  background-color: ${(props) => props.color};
  width: 35vw;
  min-width: 40rem;
  height: 30rem;

  @media ${displaySize.xl} {
    height: 15vw;
  }

  @media ${displaySize.sm} {
    min-width: unset;
  }

  @media ${displaySize.xs} {
    margin-bottom: 5rem;
    width: 80vw;
    height: 25rem;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  img {
    width: auto;
    max-width: 80%;
    max-height: 45%;
  }
`;

const Line = styled.span<TextColor>`
  display: block;
  position: absolute;
  bottom: 5.6rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${(props) =>
    props.darkBg ? props.theme.colors.light : props.theme.colors.dark};
  width: 90%;
  height: 2px;

  @media ${displaySize.xl} {
    bottom: 3vw;
  }
`;

const FontName = styled.div<TextColor>`
  position: absolute;
  right: 5%;
  bottom: 3rem;
  color: ${(props) =>
    props.darkBg ? props.theme.colors.light : props.theme.colors.dark};
`;
