import React, { useState } from "react";
import logo from "../assets/images/r5-logo.svg";

import "./style.css";
import Burger from "../Burger";

const MainHeader = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="main-header">
      <div className="container">
        <div className="top-area">
          <img src={logo} alt="Rocket Five GO Scan" />
          <Burger open={open} setOpen={setOpen} />
        </div>

        <ul className={`menu ${open ? "open" : ""}`}>
          <li>
            <a href="/#">Ínicio</a>
          </li>
          <li>
            <a href="#goscan">Go Scan</a>
          </li>
          <li>
            <a href="#gobot">Go Bot</a>
          </li>

          <li>
            <a href="#team">Time</a>
          </li>

          <li>
            <a href="#mission">Missão e Visão</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default MainHeader;
