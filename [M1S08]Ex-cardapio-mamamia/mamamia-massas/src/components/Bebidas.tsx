import React from "react";
import "./Bebidas.css"; // Arquivo de estilos

// Dados das bebidas
const bebidasOptions = {
  Água: [{ name: "Água Mineral", price: "R$ 5,00" }],
  Refrigerantes: [
    { name: "Coca-Cola", price: "R$ 8,00" },
    { name: "Guaraná", price: "R$ 7,50" },
    { name: "Sprite", price: "R$ 7,00" },
  ],
  Sucos: [
    { name: "Morango", price: "R$ 10,00" },
    { name: "Laranja", price: "R$ 9,50" },
    { name: "Uva", price: "R$ 10,00" },
  ],
};

// Tipagem do componente
interface Bebida {
  name: string;
  price: string;
}

const Bebidas: React.FC = () => {
  return (
    <div className="bebidas-container">
      <h2>Nossas Bebidas</h2>
      {Object.entries(bebidasOptions).map(([categoria, bebidas], index) => (
        <div key={index} className="categoria-bebida">
          <h3>{categoria}</h3>
          <ul>
            {bebidas.map((bebida: Bebida, idx) => (
              <li key={idx}>
                {bebida.name} - <strong>{bebida.price}</strong>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Bebidas;