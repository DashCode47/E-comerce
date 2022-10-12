import "./App.css";
import TopTabs from "./Components/Tabs/Tabs";
import HeadImg from "./assets/header.png";
import React, { useContext } from "react";
import { MyContext } from "./Context/Context";
import coin from "./assets/icons/coin.svg";
function App() {
  const { points } = useContext(MyContext);
  return (
    <div className="App">
      <div className="user">
        David Lozada
        <div className="coin">
          <img src={coin} />
          {points}
        </div>
      </div>
      <div className="containerHeader">
        <img src={HeadImg} className="headerImg" />
        <h1>Electronics</h1>
      </div>
      <TopTabs />
    </div>
  );
}

export default App;
