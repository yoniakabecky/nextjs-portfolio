import { SliceZone as SliceZoneType, ProjectSliceType } from "@@/types";
import { ReactElement } from "react";
import { FontStyle } from "./Styles";

interface Props {
  sliceZone: SliceZoneType;
}

export default function SliceZone({ sliceZone }: Props): ReactElement {
  return (
    <>
      {sliceZone.map((slice, i) => {
        switch (slice.slice_type) {
          case ProjectSliceType.Style:
            return <h2 key={i}>Visual Style</h2>;

          case ProjectSliceType.Font:
            return <FontStyle key={i} fonts={slice.items} />;

          case ProjectSliceType.Color:
            return <p key={i}>colors</p>;

          case ProjectSliceType.Stack:
            return <p key={i}>Tech Stack</p>;

          default:
            return null;
        }
      })}
    </>
  );
}
