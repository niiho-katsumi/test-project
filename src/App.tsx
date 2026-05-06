import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import PostDetail from "./components/pages/PostDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/contact" Component={Contact} />
        <Route path="/posts/:id" Component={PostDetail} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
