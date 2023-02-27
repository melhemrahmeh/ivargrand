import React from "react";
import "./Team.css";
import IMG from "../images/fggf.jpg";

const Team = () => {
  return (
    <div className="team">
      <h1 className="title text-dark"> Meet The Team</h1>
      <div className="meet-team">
        <article class="card member_card w-5">
          <div class="temporary_text">
            <img src={IMG} alt="" />
          </div>
          <div class="card_content">
            <span class="card_title">This is a Title</span>
            <span class="card_subtitle">
              Thsi is a subtitle of this page. Let us see how it looks on the
              Web.
            </span>
            <p class="card_description">
              Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut
              dolor tempora aperiam itaque possimus at, cupiditate earum, quae
              repudiandae aspernatur? Labore minus soluta consequatur placeat.
            </p>
          </div>
        </article>

        <article class="card member_card">
          <div class="temporary_text">
            <img src={IMG} alt="" />
          </div>
          <div class="card_content">
            <span class="card_title">This is a Title</span>
            <span class="card_subtitle">
              Thsi is a subtitle of this page. Let us see how it looks on the
              Web.
            </span>
            <p class="card_description">
              Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut
              dolor tempora aperiam itaque possimus at, cupiditate earum, quae
              repudiandae aspernatur? Labore minus soluta consequatur placeat.
            </p>
          </div>
        </article>

        <article class="card member_card">
          <div class="temporary_text">
            <img src={IMG} alt="" />
          </div>
          <div class="card_content">
            <span class="card_title">This is a Title</span>
            <span class="card_subtitle">
              Thsi is a subtitle of this page. Let us see how it looks on the
              Web.
            </span>
            <p class="card_description">
              Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut
              dolor tempora aperiam itaque possimus at, cupiditate earum, quae
              repudiandae aspernatur? Labore minus soluta consequatur placeat.
            </p>
          </div>
        </article>

        <article class="card member_card">
          <div class="temporary_text">
            <img src={IMG} alt="" />
          </div>
          <div class="card_content">
            <span class="card_title">This is a Title</span>
            <span class="card_subtitle">
              Thsi is a subtitle of this page. Let us see how it looks on the
              Web.
            </span>
            <p class="card_description">
              Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut
              dolor tempora aperiam itaque possimus at, cupiditate earum, quae
              repudiandae aspernatur? Labore minus soluta consequatur placeat.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Team;
