import React from "react";
import Menu from "./components/Menu";
import PresentationScreen from "./components/PresentationScreen";
import Gnocchi from "./components/Gnocchi";
import Molhos from "./components/Molhos";
import Cardapio from "./components/Cardapio";


const App: React.FC = () => {
  return (
    <div>
      <Menu />
      <PresentationScreen />
        <Gnocchi />
      <Molhos />
      <Cardapio />
 
      

    </div>
  );
};

export default App;