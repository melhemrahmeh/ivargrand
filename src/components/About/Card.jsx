import React from "react";
import "./Card.css";
import IMG from "../../assets/logoWhite.png";
import IMG2 from "../../assets/color_logo.png";
import DATA from "../data.json";

const Card = () => {
  return (
    // first
    <div id="grey">
      <div className="sect">
        <div className="left">
          <div className="empty-left-red"></div>
          <div className="left-items">
            <h2>Welcome to IVAR GRAND!</h2>
            <img src={IMG} alt="hahaha" />
          </div>
          <div className="empty-left-down"></div>
        </div>

        <div className="left">
          <div className="empty-left-red"></div>
          <div className="right-items">
            <p>{DATA[0].data}</p>
          </div>
          <div className="empty-left-down"></div>
        </div>
      </div>

    {/* second */}
      <div className="sect ">
        <div className="right grey">
          <div className="right-items">
            <p>{DATA[1].data}</p>
          </div>
        </div>

        <div className="">
          <div className="left-items grey">
            <img src={IMG} alt="hahaha" />
          </div>
        </div>
      </div>

    {/* third */}
      <div className="sect">
        <div className="">
          <div className="left-items grey">
            <h2 className="text-dark">Welcome to IVAR GRAND!</h2>
            <img src={IMG2} alt="hahaha" />
          </div>
        </div>

        <div className="">
          <div className="right-items ">
            <p className="text-dark">{DATA[2].data}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
