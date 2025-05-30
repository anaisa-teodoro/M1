import React from "react";
import fachadaRestaurante from "../assets/fachada-de-restaurante-caseiro-cantina-ghiotto-01.webp";

const PresentationScreen: React.FC = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "20px" }}>
      <div style={{ flex: "1", minWidth: "250px" }}>
        <h2>Servindo massas há 70 anos</h2>
        <p>Qualidade passada por gerações!</p>
      </div>
      <div style={{ flex: "1", minWidth: "250px", textAlign: "center" }}>
        <img 
          src={fachadaRestaurante} 
          alt="Fachada do restaurante" 
          style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "12px" }}
        


        />
      </div>
    </div>
  );
};

export default PresentationScreen;