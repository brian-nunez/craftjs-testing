import React from "react";
import { useEditor } from "@craftjs/core";
import { TextComponent } from "@/components/text";

export const Toolbox = () => {
  const { connectors, query } = useEditor();

  return (
    // @ts-ignore
    <button ref={ref => connectors.create(ref, <TextComponent text="New Text" />)} variant="contained">Text</button>
  )
};
