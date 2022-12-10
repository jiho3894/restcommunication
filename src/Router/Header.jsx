import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigation = useNavigate();
  return (
    <SHeader>
      <h1 style={{ cursor: "pointer" }} onClick={() => navigation("/")}>
        항해 자유 게시판
      </h1>
      <SButton onClick={() => navigation("/login")}>로그인</SButton>
    </SHeader>
  );
};

export default Header;

const SHeader = styled.header`
  width: 100%;
  height: 10rem;
  text-align: center;
`;

const SButton = styled.button`
  width: 100px;
  height: 30px;
  margin-top: 1rem;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: silver;
  }
`;
