import { ImageField, RichTextBlock } from "./prismic-types";

export interface IWork {
  description: RichTextBlock[];
  details: RichTextBlock[];
  image: ImageField;
  skills: RichTextBlock[];
  date: string | null;
  title: RichTextBlock[];
  slugs: string[];
}
