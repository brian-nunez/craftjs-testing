import React from "react";
import { useEditor } from "@craftjs/core";

export const ControlPanel = () => {
  const { selected, active } = useEditor((state) => {
    // @ts-ignore
    const [currentNodeId] = state.events.selected;
    let selected;

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings: state.nodes[currentNodeId].related && state.nodes[currentNodeId].related.settings
      };
    }

    return {
      active: currentNodeId,
      selected
    }
  });

  return (
    <div className="w-80 border-l h-auto">
      <h3 className="py-2 px-4 border-b text-md font-semibold text-left">
        Control Panel
      </h3>
      {
        active && selected?.settings && React.createElement(selected.settings)
      }
    </div>
  );
};
