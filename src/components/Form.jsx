import { useState } from "react";
import { postTodo } from "../core/api/list/queries";
import { useSweet } from "../core/utils/useSweet";

const Form = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    postTodo({
      title,
      content,
    })
      .then(() => useSweet(1000, "success", "게시글 작성 완료"))
      .catch((error) => useSweet(1000, "error", error.response.data.msg));
    setTitle("");
    setContent("");
  };
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="title">제목 : </label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목을 입력해주세요"
        id="title"
      />
      <label htmlFor="content">내용 : </label>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="내용을 입력해주세요"
        id="content"
      />
      <button>등록</button>
    </form>
  );
};

export default Form;
