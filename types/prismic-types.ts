// ref: https://github.com/prismicio/prismic-types/blob/master/src/fields.ts

export interface RichTextSpan {
  start: number;
  end: number;
  type: string;
  text: string;
}

export interface RichTextBlock {
  type: string;
  text: string;
  spans: RichTextSpan[];
}

export interface ImageField {
  dimensions: { width: number; height: number } | null;
  alt: string | null;
  copyright: string | null;
  url: string | null;
  [key: string]: unknown;
}
