import { RichTextBlock } from "prismic-reactjs";
import {
  BooleanField,
  DateField,
  FilledLinkToDocumentField,
  FilledLinkToWebField,
  ImageField,
} from "./prismic-types";

export interface IWork {
  description: RichTextBlock[];
  details: BooleanField;
  image: ImageField;
  skills: RichTextBlock[];
  date: DateField;
  title: RichTextBlock[];
  detail_page: FilledLinkToDocumentField;
}

export interface IProject {
  meta: DefaultGroup[];
  hero: DefaultGroup[];
  about: DefaultGroup[];
  challenge: IChallenge[];
  demo: FilledLinkToWebField;
  github: FilledLinkToWebField;
}

export interface DefaultGroup {
  title: RichTextBlock[];
  description: RichTextBlock[];
  image: ImageField;
}

export interface IChallenge extends DefaultGroup {
  mask_image: BooleanField;
}
