import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function RichTextEditor() {
  const [content, setContent] = useState<string>("");

  function handleChange(value: string) {
    setContent(value);
  }

  return <ReactQuill value={content} onChange={handleChange} />;
}

export default RichTextEditor;
