/** @jsx h */
import h from "@vericus/slate-kit-utils-hyperscript";

export default function(editor) {
  return editor.canBeOutdented();
}

export const input = (
  <value>
    <document>
      <paragraph indentation={0}>
        <anchor />
        <b>word</b>
      </paragraph>
      <paragraph indentation={0}>
        <b>word</b>
        <focus />
      </paragraph>
    </document>
  </value>
);

export const output = false;
