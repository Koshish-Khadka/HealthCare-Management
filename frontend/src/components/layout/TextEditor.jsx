import React, { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const TextEditor = () => {
  const [value, setValue] = useState("");
  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ color: [] }, { background: [] }],
      ["clean"],
    ],
  };

  return (
    <div className="w-full max-w-3xl">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Description
      </label>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        className="h-64 mb-12"
      />
    </div>
  );
};

export default TextEditor;
