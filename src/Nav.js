import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useNavigate();
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => history("/")}
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netflix-logo"
          className="nav__logo"
        />

        <img
          onClick={() => history("/profile")}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC-JxyPjUQmV5Un-5qqgxiJB2me3uPQQSAXys3PmhUAQ&s"
          alt="netflix-avatar"
          className="nav__avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
