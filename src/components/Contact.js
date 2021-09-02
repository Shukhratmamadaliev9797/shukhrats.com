import React, { useEffect } from "react";
import AOS from "aos";
export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__title">
          <span data-aos="fade-right">contact</span>
          <h1 data-aos="fade-right">Let's have chat</h1>
        </div>
        <div className="contact__card">
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="contact__card_info"
          >
            <div className="contact__card_info-title">
              <h1>Get in touch </h1>
              <p>
                Send a message and I will get back to you as soon as possible
              </p>
            </div>
            <ul className="contact__card_info-info">
              <li>
                <i class="fas fa-phone-square-alt"></i> +447523230970
              </li>
              <li>
                <i class="fas fa-envelope"></i> shukhratmamadaliev9797@gmail.com
              </li>
              <li>
                <i class="fas fa-map-marker-alt"></i> Bethnal green, London UK
              </li>
            </ul>
            <ul className="contact__card_info-socialLinks">
              <li>
                <i class="fab fa-twitter"></i>
              </li>
              <li>
                <i class="fab fa-linkedin-in"></i>
              </li>
              <li>
                <i class="fab fa-github"></i>
              </li>
            </ul>
          </div>
          <form
            data-aos="fade-left"
            data-aos-delay="300"
            className="contact__card_field"
          >
            <div className="contact__card_field-title">
              <h2>Send a Message</h2>
            </div>
            <div className="contact__card_field-inputRow">
              <div className="contact__card_field-inputBox">
                <label>First Name</label>
                <input
                  type="text"
                  value=""
                  placeholder="Enter Your First Name..."
                />
              </div>
              <div className="contact__card_field-inputBox">
                <label>Last Name</label>
                <input
                  type="text"
                  value=""
                  placeholder="Enter Your Last Name..."
                />
              </div>
            </div>
            <div className="contact__card_field-inputRow">
              <div className="contact__card_field-inputBox">
                <label>Email</label>
                <input
                  type="text"
                  value=""
                  placeholder="Enter Your First Name..."
                />
              </div>
              <div className="contact__card_field-inputBox">
                <label>Company or Agency name</label>
                <input
                  type="text"
                  value=""
                  placeholder="Enter Your First Name..."
                />
              </div>
            </div>
            <div className="contact__card_field-textArea">
              <label>Message</label>
              <textarea placeholder="Write a Message..." />
            </div>
            <div className="contact__card_field-buttonField">
              <button type="button">Send a Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
