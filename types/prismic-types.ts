// ref: https://github.com/prismicio/prismic-types/blob/master/src/fields.ts

export interface ImageField {
  dimensions: { width: number; height: number } | null;
  alt: string | null;
  copyright: string | null;
  url: string | null;
  [key: string]: unknown;
}

export enum LinkType {
  Any = "Any",
  Document = "Document",
  Media = "Media",
  Web = "Web",
}

export interface FilledLinkToWebField {
  link_type: LinkType.Web;
  url: string;
  target?: string;
}

export interface FilledLinkToDocumentField<
  TypeEnum = string,
  LangEnum = string
> {
  link_type: "Document";
  id: string;
  uid?: string;
  type: TypeEnum;
  tags: string[];
  lang: LangEnum;
  url?: string;
  slug?: string;
  isBroken?: boolean;
}
