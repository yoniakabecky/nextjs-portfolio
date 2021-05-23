import { RichTextBlock } from "prismic-reactjs";
import {
  FilledLinkToDocumentField,
  FilledLinkToWebField,
  ImageField,
} from "./prismic-types";

export interface IWork {
  description: RichTextBlock[];
  details: RichTextBlock[];
  image: ImageField;
  skills: RichTextBlock[];
  date: TimelineDate;
  title: RichTextBlock[];
  detail_page: FilledLinkToDocumentField;
}

export type TimelineDate = string | null;

export interface IProject {
  meta: DefaultGroup[];
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

export interface DefaultGroup {
  title: RichTextBlock[];
  description: RichTextBlock[];
  image: ImageField;
}

export interface IAboutSection {
  title: RichTextBlock[];
  description: RichTextBlock[];
  logo: ImageField;
}
