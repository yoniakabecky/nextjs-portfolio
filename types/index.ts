import { RichTextBlock } from "prismic-reactjs";
import { FilledLinkToWebField, ImageField } from "./prismic-types";

export interface IWork {
  description: RichTextBlock[];
  details: RichTextBlock[];
  image: ImageField;
  skills: RichTextBlock[];
  date: TimelineDate;
  title: RichTextBlock[];
  slugs: string[];
}

export type TimelineDate = string | null;

export interface IProject {
  hero: IHeroSection[];
  about: IAboutSection[];
  demo: FilledLinkToWebField;
  github: FilledLinkToWebField;
}

export interface IHeroSection {
  title: RichTextBlock[];
  skills: RichTextBlock[];
  image: ImageField;
}

export interface IAboutSection {
  title: RichTextBlock[];
  description: RichTextBlock[];
  logo: ImageField;
}
