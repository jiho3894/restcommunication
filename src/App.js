import Layout from "./components/Layout";
import Router from "./Router/router";
import { GlobalStyles } from "./styles/globalStyles";

function App() {
  return (
    <Layout>
      <GlobalStyles />
      <Router />
    </Layout>
  );
}

export default App;
