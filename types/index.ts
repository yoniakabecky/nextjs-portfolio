import { RichTextBlock } from "prismic-reactjs";
import {
  AnyRegularField,
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
  next: FilledLinkToDocumentField;
  nextProject?: NextProject;
  body: SliceZone;
}

export interface DefaultGroup {
  title: RichTextBlock[];
  description: RichTextBlock[];
  image: ImageField;
}

export interface IChallenge extends DefaultGroup {
  mask_image: BooleanField;
}

export interface NextProject extends DefaultGroup {
  uid: string;
}

export enum ProjectSliceType {
  Style = "style",
  Font = "font",
  Color = "color",
  Stack = "tech_stacks",
}

export interface Slice<
  SliceType = ProjectSliceType,
  PrimaryFields extends { [key: string]: AnyRegularField } = {
    [key: string]: AnyRegularField;
  },
  ItemsFields extends { [key: string]: AnyRegularField } = {
    [key: string]: AnyRegularField;
  }
> {
  slice_type: SliceType;
  slice_label: string | null;
  primary: PrimaryFields;
  items: ItemsFields[];
}

export type SliceZone<Slices extends Slice = Slice> = Slices[];
