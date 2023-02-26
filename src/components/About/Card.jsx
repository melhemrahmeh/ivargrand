import React from "react";
import "./Card.css";
import IMG from "../../assets/logoWhite.png";
import DATA from "../data.json";

const Card = () => {
  return (
    <>
      <div className="sect">
        <div className="left">
          <div className="empty-left"></div>
          <div className="left-items">
            <h2>Welcome to IVAR GRAND!</h2>
            <img src={IMG} alt="hahaha" />
          </div>
          <div className="empty-left-down"></div>
        </div>

        <div className="left">
          <div className="empty-left"></div>
          <div className="right-items">
            <p>{DATA[0].data}</p>
          </div>
          <div className="empty-left-down"></div>
        </div>
      </div>

      <div className="sect">
        <div className="right">
          <div className="right-items">
            <p>{DATA[1].data}</p>
          </div>
          <div className="empty-left-2"></div>
        </div>

        <div className="right">
          <div className="left-items">
            <h2>Welcome to IVAR GRAND!</h2>
            <img src={IMG} alt="hahaha" />
          </div>
          <div className="empty-left-2"></div>
        </div>
      </div>

      <div className="sect">
        <div className="left">
          <div className="left-items">
            <h2>Welcome to IVAR GRAND!</h2>
            <img src={IMG} alt="hahaha" />
          </div>
          <div className="empty-left-down"></div>
        </div>

        <div className="left">
          <div className="right-items">
            <p>{DATA[2].data}</p>
          </div>
          <div className="empty-left-down"></div>
        </div>
      </div>
    </>
  );
};

export default Card;
