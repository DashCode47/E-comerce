import React, { useState, useContext } from "react";
import "./BoxItem.css";
import icon from "../../assets/icons/buy-blue.svg";
import icon2 from "../../assets/icons/buy-white.svg";
import coin from "../../assets/icons/coin.svg";
import { MyContext } from "../../Context/Context";
const BoxItem = ({ img }) => {
  const { points } = useContext(MyContext);
  const { setpoints } = useContext(MyContext);
  const [onMouse, setonMouse] = useState(false);
  const handleMouse = () => {
    setonMouse(true);
  };
  const handleMouseOut = () => {
    setonMouse(false);
  };
  const onRedem = () => {
    setpoints(points - img.points);
    alert("Thank you for purchasing");
  };
  return (
    <div
      className="boxCnt"
      onMouseOver={handleMouse}
      onMouseOut={handleMouseOut}
    >
      <img src={img.image} className="imgProd" />
      <div>{img.name}</div>
      {points > img.points && (
        <img src={!onMouse && icon} className={"buyicn"} />
      )}
      {points < img.points && (
        <div className="needPoints">
          You need {img.points - points} <img src={coin} />
        </div>
      )}
      {onMouse && (
        <div
          className="onhover"
          style={{
            backgroundColor:
              points > img.points
                ? "rgba(65, 173, 206, 0.7)"
                : "rgba(187, 41, 41, 0.7)",
          }}
        >
          {points > img.points && <img src={icon2} className={"buyicn"} />}

          <div className="points">
            {img.points}
            <img src={coin} className={"coinicn"} />
          </div>
          {points > img.points && (
            <div className="redembtn" onClick={() => onRedem()}>
              Redem Now
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BoxItem;
