import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Editor() {
  const [value, setValue] = useState("");

  return (
      <div className='w-100 max-w-[80%] shadow-md rounded-md p-8 bg-white min-h-[300px]'>
        <div>
            <h1 className="font-semibold text-center text-3xl text-violet-800 mb-4">React Quill</h1>
          <ReactQuill
            className='h-full flex flex-col'
            theme='snow'
            value={value}
            onChange={setValue}
            modules={{
              toolbar: [
                ["bold", "italic", "underline", "strike"],
                ["blockquote", "code-block"],
                [{ list: "ordered" }, { list: "bullet" }],
                [{ script: "sub" }, { script: "super" }],
                [{ indent: "-1" }, { indent: "+1" }],
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                [{ color: [] }, { background: [] }],
                ["link", "image", "video"],
                ["clean"],
              ],
            }}
          />
        </div>
      </div>
  );
}
