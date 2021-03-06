/** @jsx h */
import h from "@vericus/slate-kit-utils-hyperscript";

export default function(editor) {
  editor.toggleBold();
}

export const input = (
  <value>
    <document>
      <h1>
        wo
        <cursor marks={[{ type: "italic" }]} />
        rd
      </h1>
      <h1>another</h1>
    </document>
  </value>
);

export const output = (
  <value>
    <document>
      <h1>
        wo
        <cursor marks={[{ type: "italic" }, { type: "bold" }]} />
        rd
      </h1>
      <h1>another</h1>
    </document>
  </value>
);
