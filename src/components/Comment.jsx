import { useState } from "react";
import styled from "styled-components";

const Comment = () => {
  const [text, setText] = useState("안녕하세요");
  const [isOpen, setIsOpen] = useState(true);
  const onDelete = () => {};
  const onUpdate = () => {};
  return (
    <CommentContainer>
      <p>id : 32</p>
      {isOpen ? (
        <label htmlFor="comment">내용 : 안녕하세요 </label>
      ) : (
        <input
          type="text"
          id="comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      )}
      <div>
        <button onClick={onDelete}>삭제하기</button>
        <button onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? "수정하기" : "수정취소"}
        </button>
        {!isOpen && <button onClick={onUpdate}>수정 완료</button>}
      </div>
    </CommentContainer>
  );
};

export default Comment;

const CommentContainer = styled.div`
  width: 350px;
  height: 10rem;
  border: 3px solid black;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
