import React, { useState } from "react";
import logo from "../assets/images/r5-logo.svg";

import "./style.css";
import Burger from "../Burger";

const MainHeader = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="main-header">
      <div className="container">
        <Burger open={open} setOpen={setOpen} />
        <img src={logo} alt="Rocket Five GO Scan" />

        <ul className={`menu ${open ? "open" : ""}`}>
          <li>
            <a href="/">Ínicio</a>
          </li>
          <li>
            <a href="/">Sobre</a>
          </li>
          <li>
            <a href="/">Funcionalidades</a>
          </li>
          <li>
            <a href="/">Parceiros</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default MainHeader;
