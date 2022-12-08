import styled from "styled-components";
import Form from "../components/Form";
import Header from "../components/Header";
import List from "../components/List";

const Home = () => {
  return (
    <HomeMain>
      <Header />
      <Form />
      <List />
    </HomeMain>
  );
};

export default Home;

const HomeMain = styled.main`
  max-width: 600px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;
