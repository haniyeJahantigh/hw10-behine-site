// import "./App.css";

import React from "react";
import Header from "./components/Header";
import Items from "./components/Items";
import Best from "./components/Best";

const App = () => {
  return (
    <div>
      <Header />
      <Items />
      <Best titrLable={"بهترین همراهان ما"} />
    </div>
  );
};

export default App;
