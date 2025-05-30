import React from "react";
import "./Gnocchi.css"; // Arquivo de estilos

// Dados dos Gnocchis
const gnocchiOptions = [
  { name: "Gnocchi de Batata", price: "R$ 32,00", image: "batata.jpg" },
  { name: "Gnocchi de Espinafre", price: "R$ 34,00", image: "espinafre.jpg" },
  { name: "Gnocchi de Cenoura", price: "R$ 36,00", image: "cenoura.jpg" },
  { name: "Gnocchi de Beterraba", price: "R$ 38,00", image: "beterraba.jpg" },
];

const Gnocchi: React.FC = () => {
  return (
    <div className="gnocchi-container">
      {gnocchiOptions.map((gnocchi, index) => (
        <div key={index} className="gnocchi-card">
          <img src={`/assets/${gnocchi.image}`} alt={gnocchi.name} />
          <h3>{gnocchi.name}</h3>
          <p>{gnocchi.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Gnocchi;