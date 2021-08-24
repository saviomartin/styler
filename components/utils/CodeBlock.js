import React from "react";

// codemirror
import { UnControlled as CodeMirror } from "react-codemirror2";

// codemirror css
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material-ocean.css";
import "codemirror/addon/hint/show-hint.css";

// codemirror plugins
require("codemirror/mode/css/css");
require("codemirror/addon/hint/css-hint");
require("codemirror/addon/hint/show-hint");
require("codemirror/addon/edit/closebrackets");
require("codemirror/addon/lint/lint");
require("codemirror/addon/display/autorefresh");

const CodeBlock = ({ value, onChange }) => {
  return (
    <div className="code rounded-md overflow-hidden h-auto text-sm">
      <CodeMirror
        value={value}
        autoCursor={false}
        options={{
          mode: "css",
          theme: "material-ocean",
          lineWrapping: true,
          smartIndent: true,
          lineNumbers: true,
          foldGutter: true,
          autoCloseTags: true,
          matchBrackets: true,
          autoCloseBrackets: true,
          autoRefresh: true,
          extraKeys: { "Ctrl-Space": "autocomplete" },
        }}
        onChange={(editor, metadata, value) => {
          onChange(value);
        }}
      />
    </div>
  );
};

export default CodeBlock;
