'use client'
import { useRouter } from "next/navigation.js";
import React, { useState } from "react";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

    const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetch("http://127.0.0.1:8090/api/collections/notes/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });
    setTitle("");
    setContent("");
    router.refresh();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className=" grid my-2 w-1/2">
          <label htmlFor="title">Title</label>
          <input
            className=" rounded py-1 text-black px-2"
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className=" grid my-2 w-1/2">
          <label htmlFor="content">Content</label>
          <textarea
            className=" rounded py-1 text-black px-2"
            name="content"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          <button
            type="submit"
            className=" bg-blue-400 px-5 py-2 font-semibold rounded w-1/2"
          >
            Add note
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNote;
