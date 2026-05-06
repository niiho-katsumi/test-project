import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import PostDetail from "./components/pages/PostDetail";
import Layout from "./layouts/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/contact" Component={Contact} />
          <Route path="/posts/:id" Component={PostDetail} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
