import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigation = useNavigate();
  return (
    <header>
      <h1 style={{ cursor: "pointer" }} onClick={() => navigation("/")}>
        항해 자유 게시판
      </h1>
    </header>
  );
};

export default Header;
