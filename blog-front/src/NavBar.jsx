import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="menu">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="menu">
            About
          </Link>
        </li>
        <li>
          <Link to="/blog" className="menu">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};
