import React from "react";
import "./Card.css";
import IMG from "../../assets/logoWhite.png";
import IMG2 from "../../assets/color_logo.png";
import IMG3 from "../../assets/black_logo.png";
import DATA from "../data.json";

const Card = () => {
  return (
    // first

    <>
      <div className="sect">
        <div className="">
          <div className="left-items ">
            <h2>Welcome to IVAR GRAND!</h2>
            <img src={IMG} alt="hahaha" />
          </div>
        </div>

        <div className="left">
          <div className="right-items">
            <p>{DATA[0].data}</p>
          </div>
        </div>
      </div>

      
      <div id="grey">
        {/* second */}
        <div className="sect sect_reverse">
          <div className="right">
            <div className="right-items">
              <p className="">{DATA[1].data}</p>
            </div>
          </div>

          <div className="">
            <div className="left-items ">
              <img src={IMG2} alt="hahaha" />
            </div>
          </div>
        </div>

        {/* third */}
        <div className="sect">
          <div className="">
            <div className="left-items ">
              <img src={IMG} alt="hahaha" />
            </div>
          </div>

          <div className="">
            <div className="right-items ">
              <p className="">{DATA[2].data}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
