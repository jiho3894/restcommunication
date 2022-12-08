import { useState } from "react";

const Form = () => {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="게시글을 작성해 주세요"
      />
    </form>
  );
};

export default Form;
