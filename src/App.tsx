import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Contact from "./components/pages/Contact/Contact";
import ArticleDetail from "./components/pages/ArticleDetail/ArticleDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/contact" Component={Contact} />
        <Route path="/posts/:id" Component={ArticleDetail} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
