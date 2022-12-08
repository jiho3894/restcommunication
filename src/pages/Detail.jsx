import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Detail = () => {
  const navigation = useNavigate();
  const [text, setText] = useState("안녕하세요");
  const [isOpen, setIsOpen] = useState(true);
  const onDelete = () => {};
  const onUpdate = () => {};
  return (
    <CommentContainer>
      <button onClick={() => navigation(-1)}>이전 페이지</button>
      <p>title : 안녕하세요</p>
      <p>nickName : Charley</p>
      {isOpen ? (
        <label htmlFor="comment">content : 반갑습니다 charley입니다</label>
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
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen((prev) => !prev);
          }}
        >
          {isOpen ? "수정하기" : "수정취소"}
        </button>
        {!isOpen && <button onClick={onUpdate}>수정 완료</button>}
      </div>
    </CommentContainer>
  );
};

export default Detail;

const CommentContainer = styled.div`
  width: 350px;
  height: 20rem;
  border: 3px solid black;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: auto;
`;
