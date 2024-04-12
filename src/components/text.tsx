import React from "react";
import { useNode } from "@craftjs/core";
import ContentEditable from 'react-contenteditable'

export const TextComponent = ({ text, fontSize, textAlign }: any) => {
  const { connectors: { connect, drag }, actions: { setProp } } = useNode();

  return (
    <div
      ref={(ref) => connect(drag(ref as any))}
    >
      <ContentEditable
        html={text}
        onChange={e =>
          setProp((props: any) =>
            props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, "")
          )
        }
        tagName="p"
        style={{ fontSize: `${fontSize}px`, textAlign }}
      />
    </div>
  );
}

export const TextComponentSettings = () => {
  const { actions: { setProp }, text } = useNode((node) => ({
    fontSize: node.data.props.fontSize,
    text: node.data.props.text,
  }));

  return (
    <fieldset>
      <label>Text</label>
      <input
        name="text"
        value={text}
        onChange={(event) => {
          setProp((props: any) => props.text = event.target.value);
        }}
      />
    </fieldset>
  );
};

TextComponent.craft = {
  rules: {
    canDrag: (node: any) => node.data.props.text != "Drag"
  },
  related: {
    settings: TextComponentSettings,
  }
}
