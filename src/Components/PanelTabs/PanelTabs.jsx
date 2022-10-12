import React, { useState } from "react";
import "./PanelTabs.css";
import products from "../../assets/data";
import BoxItem from "../BoxItem/BoxItem";

const PanelTabs = ({ forward, fun }) => {
  const [page, setpage] = useState(15);

  const Tutu = ({ index }) => {
    if (index % 4 === 0 && index < products.length)
      return (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <BoxItem img={products[index]} />
          <BoxItem img={products[index + 1]} />
          <BoxItem img={products[index + 2]} />
          <BoxItem img={products[index + 3]} />
        </div>
      );
  };
  return (
    <div className="container">
      {fun === 1 &&
        products
          .sort((a, b) => a.key - b.key)
          .slice(0, forward + 16)
          .map((_, index) => {
            if (index < 16 && forward < 16) {
              return <Tutu index={index} />;
            }
            if (index > 16) {
              return <Tutu index={index} />;
            }
          })}

      {fun === 2 &&
        products
          .sort((a, b) => a.points - b.points)
          .slice(0, forward + 16)
          .map((_, index) => {
            if (index < 16 && forward < 16) {
              return <Tutu index={index} />;
            }
            if (index > 16) {
              return <Tutu index={index} />;
            }
          })}

      {fun === 3 &&
        products
          .sort((a, b) => a.points - b.points)
          .reverse()
          .slice(0, forward + 16)
          .map((_, index) => {
            if (index < 16 && forward < 16) {
              return <Tutu index={index} />;
            }
            if (index > 16) {
              return <Tutu index={index} />;
            }
          })}
    </div>
  );
};

export default PanelTabs;
