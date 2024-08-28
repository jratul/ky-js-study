"use client";

import { Prism } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function JSCode({ code }: { code: string }) {
  return (
    <div>
      <Prism
        language="javascript"
        style={vscDarkPlus}
        wrapLines
        showLineNumbers
        customStyle={{
          fontSize: "20px",
          borderRadius: "0.75rem",
        }}
        codeTagProps={{
          style: {
            fontSize: "inherit",
          },
        }}
      >
        {code}
      </Prism>
    </div>
  );
}
