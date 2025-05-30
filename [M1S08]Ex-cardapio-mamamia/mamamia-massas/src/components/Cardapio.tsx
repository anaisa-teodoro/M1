import React from "react";
import Menu from "./Menu";
import PresentationScreen from "./PresentationScreen";
import Gnocchi from "./Gnocchi";
import Pastas from "./Pastas";
import Bebidas from "./Bebidas";
import Rodape from "./Rodape";

const Cardapio: React.FC = () => {
  return (
    <div>
      <Menu />
      <PresentationScreen />
      <Gnocchi />
      <Pastas />
      <Bebidas />
      <Rodape />
    </div>
  );
};

export default Cardapio;