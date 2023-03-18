import React from "react";
import "./Contact.css";
import { useRef } from "react";
import emailjs from "emailjs-com";

const ContactCompoment = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_5lbrexw",
      "template_9azw7hr",
      form.current,
      "SpHCRXL1ap7PX2DXj"
    );

    e.target.reset();
  };

  return (
    <div className="main_pic">
      <div class="row">
        <div class="zero_margin">
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

        <div class="zero_margin">
          <div class="card card_main">
            <div class="card-body body_form">
              <h2 id="title_contact_us">Send Us A Message</h2>
              <form ref={form} onSubmit={sendEmail}>
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
                  type="submit"
                  class="btn text-white custom_btn"
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

export default ContactCompoment;
