import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { __getTodoDetail, __updateTodoDetail } from "../redux/modules/detail";
import { __deleteTodoDetail } from "../redux/modules/todo";

const Detail = () => {
  const [content, setContent] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const { id } = useParams();
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.detail);

  const onDelete = () => {
    dispatch(__deleteTodoDetail(id));
    navigation(-1);
  };

  const onUpdate = () => {
    dispatch(
      __updateTodoDetail({
        id,
        title: todos?.title,
        content,
      })
    );
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    dispatch(__getTodoDetail(id));
  }, [id]);

  return (
    <CommentContainer>
      <button onClick={() => navigation(-1)}>이전 페이지</button>
      <p>title : {todos?.title}</p>
      <p>nickName : {todos?.nickname}</p>
      {isOpen ? (
        <label htmlFor="comment">content : {todos?.content}</label>
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
