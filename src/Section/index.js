import React from 'react';

import './style.css';

const Section = ({ img, title, children, reverse, id }) => {
  return (
    <section className="section" id={id}>
      <div className={`container ${reverse ? "reverse" : ""}`}>
        <div className="image">
          <img src={img} alt="" />
        </div>
        
        <div className="text-content">
          <h3>{title}</h3>
          {children}
        </div>
      </div>
    </section>
  );
}

export default Section;
