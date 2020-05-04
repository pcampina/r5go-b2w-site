import React from 'react';

import CeliaImage from '../assets/images/celia.png';
import MaurilioImage from '../assets/images/maurilio.jpg';
import PabloImage from '../assets/images/pablo.png';
import ToshiukImage from '../assets/images/toshiuk.png';

import './style.css';

function Team({ id }) {
  return (
    <section className="section" id={id}>
      <div className="container team">
        <h3>Time</h3>
        
        <div className="images">
          <ul>
            <li><a href="https://www.linkedin.com/in/c%C3%A9lia-nunes-b7b56a71/"><img src={CeliaImage} alt="Célia"/></a></li>
            <li><a href="https://www.linkedin.com/in/1mauriliosouza/"><img src={MaurilioImage} alt="Maurilio"/></a></li>
            <li><a href="https://www.linkedin.com/in/flaviotoshiukhjr/"><img src={ToshiukImage} alt="Flávio"/></a></li>
            <li><a href="https://www.linkedin.com/in/pablocampina/"><img src={PabloImage} alt="Pablo"/></a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Team;
