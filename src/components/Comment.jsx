import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Comment = () => {
  const navigation = useNavigate();

  return (
    <CommentContainer onClick={() => navigation("/list/3")}>
      <span>title : 안녕하세요</span>
      <span>nickName : charley</span>
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
