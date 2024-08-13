import articles from "./article-content";
import { Link } from "react-router-dom";

export const ArticleListPage = () => {
  return (
    <>
      <h1>Articles disponibles</h1>
      {articles.map((article) => (
        <Link key={article.name} to={`/blog/${article.name}`}>
          <h2>{article.title}</h2>
          <p>{article.content.join(" ")}</p>
        </Link>
      ))}
    </>
  );
};
