import React from "react";
import "./Molhos.css"; // Arquivo de estilos

const molhosOptions = [
  "Alla Puttanesca",
  "Al Pesto di Basilico",
  "Cacio e Pepe",
  "Alla Matriciana",
];

const Molhos: React.FC = () => {
  return (
    <div className="molhos-container">
      <h2>Escolha seu molho:</h2>
      <ul>
        {molhosOptions.map((molho, index) => (
          <li key={index}>{molho}</li>
        ))}
      </ul>
    </div>
  );
};

export default Molhos;