import React from "react";
import "./Rodape.css";

const Rodape: React.FC = () => {
  return (
    <footer className="rodape-container">
      <p>📍 Rua ,Cuca 123 - Joinville, SC</p>
      <div className="social-icons">
        <a href="#" className="icon">📷 Instagram</a>
        <a href="https://github.com/anaisa-teodoro/M1-mini-projeto-1.git" className="icon">🖇️ Github</a>
      </div>
    </footer>
  );
};

export default Rodape;