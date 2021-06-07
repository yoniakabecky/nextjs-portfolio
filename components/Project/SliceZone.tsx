import { SliceZone as SliceZoneType, ProjectSliceType } from "@@/types";
import { ReactElement } from "react";
import { ColorStyle, FontStyle, StyleDescription } from "./Styles";
import TechStackSection from "./TechStackSection";

interface Props {
  sliceZone: SliceZoneType;
}

export default function SliceZone({ sliceZone }: Props): ReactElement {
  return (
    <>
      {sliceZone.map((slice, i) => {
        switch (slice.slice_type) {
          case ProjectSliceType.Style:
            return <StyleDescription key={`slice-${i}`} data={slice.primary} />;

          case ProjectSliceType.Font:
            return <FontStyle key={`slice-${i}`} fonts={slice.items} />;

          case ProjectSliceType.Color:
            return <ColorStyle key={`slice-${i}`} colors={slice.items} />;

          case ProjectSliceType.Stack:
            return <TechStackSection key={`slice-${i}`} stacks={slice.items} />;

          default:
            return null;
        }
      })}
    </>
  );
}
