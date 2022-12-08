import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import List from "../components/List";

const Home = () => {
  const navigation = useNavigate();
  return (
    <>
      <button onClick={() => navigation("/login")}>로그인</button>
      <Form />
      <List />
    </>
  );
};

export default Home;
