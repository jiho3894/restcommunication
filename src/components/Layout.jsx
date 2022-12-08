import styled from "styled-components";

const Layout = ({ children }) => {
  return <HomeMain>{children}</HomeMain>;
};

export default Layout;

const HomeMain = styled.main`
  max-width: 600px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;
