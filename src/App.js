import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const { pathname } = useLocation();

  const closeMenu = () => {
    if (window.innerWidth < 630) {
      setShowMenu(false);
      document.body.classList.toggle("lock-scroll");
    }
  };

  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
    document.body.classList.toggle("lock-scroll");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Helmet>
        <title>
          Frontend Mentor |{" "}
          {pathname === "/"
            ? "Minimalist Portfolio"
            : pathname === "/portfolio"
            ? "My Projects"
            : pathname === "/contact"
            ? "Contact Me"
            : "Insert Page Title"}
        </title>
      </Helmet>
      <Header
        showMenu={showMenu}
        closeMenu={closeMenu}
        toggleMenu={toggleMenu}
        scrollToTop={scrollToTop}
      />
      <Outlet context={scrollToTop} />
      <Footer scrollToTop={scrollToTop} />
    </>
  );
}

export default App;
