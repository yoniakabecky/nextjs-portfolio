import { RichText, RichTextBlock } from "prismic-reactjs";
import React, { ReactElement } from "react";
import { BooleanField, ImageField } from "@@/types/prismic-types";
import styled from "styled-components";

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

    <Divider darkBg={darker_bg} />

    <FontName darkBg={darker_bg}>{RichText.render(font_name)}</FontName>
  </FontRoot>
);

const Root = styled.div`
  display: flex;
  justify-content: space-around;
`;

const FontRoot = styled.div<FontRootProps>`
  position: relative;
  border-radius: 1rem;
  background-color: ${(props) => props.color};
  min-width: 40rem;
  height: 30rem;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Divider = styled.span<TextColor>`
  display: block;
  position: absolute;
  bottom: 5.6rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${(props) =>
    props.darkBg ? props.theme.colors.light : props.theme.colors.dark};
  width: 90%;
  height: 2px;
`;

const FontName = styled.div<TextColor>`
  position: absolute;
  right: 2rem;
  bottom: 3rem;
  color: ${(props) =>
    props.darkBg ? props.theme.colors.light : props.theme.colors.dark};
`;
