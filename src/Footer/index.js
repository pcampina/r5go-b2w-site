import React from 'react';

import './style.css';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <p>Time Rocket Five <strong>❤</strong> <a href="mailto:rocketfive.go@gmail.com?Subject=Contato%20Rocket%20Five">rocketfive.go@gmail.com</a></p>

        <div className="github-links">
          <p><a class="github-button" href="https://github.com/Toshiuk/r5go-b2w-front" aria-label="Star Toshiuk/r5go-b2w-front on GitHub">Star PWA</a></p>
          <p><a class="github-button" href="https://github.com/pcampina/r5go-site" aria-label="Star pcampina/r5go-site on GitHub">Star Site</a></p>
          <p><a class="github-button" href="https://github.com/pcampina/r5go-b2w" aria-label="Star pcampina/r5go-b2w on GitHub">Star Back-end</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
