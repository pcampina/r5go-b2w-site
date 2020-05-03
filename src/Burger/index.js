import React from "react";

import "./style.css";

const Burger = ({ open, setOpen }) => {
  return (
    <div
      className={`burger ${open ? "open" : ""}`}
      onClick={() => setOpen(!open)}
    >
      <span className="line" />
      <span className="line" />
      <span className="line" />
      <span className="line" />
    </div>
  );
};

export default Burger;
