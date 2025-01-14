import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import { ArticleListPage } from "./pages/ArticleListPage";
import { ArticlePage } from "./pages/ArticlePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <h1>Aprendiendo react</h1>
          <div id="page-body">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/blog" element={<ArticleListPage />} />
              <Route path="/blog/:articleId" element={<ArticlePage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
