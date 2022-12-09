import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import {
  deleteTodo,
  getDetailTodo,
  updateTodo,
} from "../core/api/list/queries";
import { useSweet } from "../core/utils/useSweet";

const Detail = () => {
  const navigation = useNavigate();
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [detail, setDetail] = useState();
  const onDelete = () => {
    deleteTodo(id)
      .then(() => useSweet(1000, "success", "게시글 삭제 완료"))
      .catch((error) => useSweet(1000, "error", error.response.data.msg));
  };
  const onUpdate = () => {
    updateTodo(id, {
      title: detail?.title,
      content: content,
    })
      .then(() => useSweet(1000, "success", "게시글 수정 완료"))
      .catch((error) => useSweet(1000, "error", error.response.data.msg));
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    getDetailTodo(id).then((res) => setDetail(res));
  }, [id, isOpen]);
  return (
    <CommentContainer>
      <button onClick={() => navigation(-1)}>이전 페이지</button>
      <p>title : {detail?.title}</p>
      <p>nickName : {detail?.nickname}</p>
      {isOpen ? (
        <label htmlFor="comment">content : {detail?.content}</label>
      ) : (
        <input
          type="text"
          id="comment"
          value={content}
          onChange={(e) => setContent(e.target.value)}
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
