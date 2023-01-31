import { Link, Routes, Route } from "react-router-dom";
import { Home } from "../../pages/Home";
import { About } from "../../pages/About";
import { TestPage } from "../../pages/TestPage";
import { Series } from "../../pages/Series";
import { Pages } from "../../pages/Pages";
import { SerieDetail } from "../../pages/SerieDetail";

import "../../styles/navbar.css";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "blue",
};

export const Navbar = () => {
  return (
    <>
      <nav className="navigation">
        <div className="brand-name">XigniteX</div>
        <div className="navigation-menu">
          <Link to="/" style={linkStyle}>
            Home
          </Link>
          <Link to="/series" style={linkStyle}>
            Series
          </Link>
          <Link to="/pages" style={linkStyle}>
            Pages
          </Link>
          <Link to="/testing" style={linkStyle}>
            TestPage
          </Link>
          <Link to="/about" style={linkStyle}>
            About
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/series" element={<Series />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/testing" element={<TestPage />} />
        <Route path="/about" element={<About />} />
        <Route path="series/:id" element={<SerieDetail />} />
      </Routes>
    </>
  );
};
