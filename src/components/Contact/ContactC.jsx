import React from "react";
import "./Contact.css";

const ContactC = () => {
  return (
    <div className="main_pic">
      <div class="row">
        <div class="">
          <div class="card card_main">
            <div class="card-body body_contact">
              <h5 class="card-title contact_title">
                <em>We Are Here For You</em>
              </h5>
              <h2>What do you need, and how can we help?</h2>
              <p class="card-text">
                <em>Don't hesitate to give us a call via:</em>
              </p>
              <ul>
                <li>
                  <b>Landline:</b> +971 4565 3098
                </li>
                <li>
                  <b>Telephone:</b> +971 50 2705 671
                </li>
              </ul>
              <p class="card-text">
                <em>Or send us an email on:</em>
              </p>
              <ul>
                <li>
                  <b>Email:</b> ivar.lubricants@gmail.com
                </li>
              </ul>
              <p class="card-text">
                Open Monday till Saturday from 9am till 6pm. We close on Sunday
                and holidays.{" "}
              </p>
            </div>
          </div>
        </div>

        <div class="">
          <div class="card card_main">
            <div class="card-body body_form">
              <h2 id="title_contact_us">Send Us A Message</h2>
              <form>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
                <textarea
                  name="message"
                  rows="2"
                  placeholder="Your Message"
                  required
                ></textarea>
                <button
                  type="button"
                  class="btn btn-primary btn-rounded custom_btn"
                >
                  <b>Send</b>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactC;
