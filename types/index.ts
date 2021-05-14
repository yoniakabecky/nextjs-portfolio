import { ImageField, RichTextBlock } from "./prismic-types";

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
