import { useState } from "react";
import { useDispatch } from "react-redux";
import { __postTodos } from "../redux/modules/todo";

const Form = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(__postTodos({ postList: { title, content } }));
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
      <input
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
