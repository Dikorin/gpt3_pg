import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

import "./navbar.css";

const Menu = () => (
  <>
  <p><a href="#header">Home</a></p>
  <p><a href="#whatGPT3">Co to GPT?</a></p>
  <p><a href="#possibility">Open AI</a></p>
  <p><a href="#features">Praktyczne przykłady</a></p>
  <p><a href="#blog">Biblioteka</a></p>
  </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div>
      <div className="gpt3_navbar">
        <div className="gpt3_navbar-links">

          <div className="gpt3_navbar-links-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="gpt3_navbar-links_container">
           <Menu />
          </div>
        </div>
        <div className="gpt3_navbar-sign">
          <p>Zaloguj się</p>
          <button type="button">Zarejestruj się</button>
        </div>
        <div className="gpt3_navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={30}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={30}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="gpt3_navbar-menu_container scale-up-center">
              <div className="gpt3_navbar-menu_container-links">
                <Menu />
                <div className="gpt3_navbar-menu_container-links-sign">
                  <p>Zaloguj się</p>
                  <button type="button">Zarejestruj się</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
