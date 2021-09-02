import React, { useEffect, useState } from "react";
import AOS from "aos";
import emailjs from "emailjs-com";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
export default function Contact() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fkitjro",
        "template_fzeu07f",
        e.target,
        "user_R8p8jtYLZqhSRRVh9gyFe"
      )
      .then(
        (result) => {
          if ((result.text = "OK")) {
            handleShow();
            e.target.reset();
          }
        },
        (error) => {}
      );
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Message sent successfully</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Awesome, I received your email. I will get back to you as soon as
          possible
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
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
                  <i class="fas fa-envelope"></i>{" "}
                  shukhratmamadaliev9797@gmail.com
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
              onSubmit={sendEmail}
            >
              <div className="contact__card_field-title">
                <h2>Send a Message</h2>
              </div>
              <div className="contact__card_field-inputRow">
                <div className="contact__card_field-inputBox">
                  <label htmlFor="first-name">First Name</label>
                  <input
                    id="first-name"
                    type="text"
                    name="first-name"
                    required
                    placeholder="Enter Your First Name..."
                  />
                </div>
                <div className="contact__card_field-inputBox">
                  <label htmlFor="last-name">Last Name</label>
                  <input
                    type="text"
                    name="last-name"
                    required
                    placeholder="Enter Your Last Name..."
                  />
                </div>
              </div>
              <div className="contact__card_field-inputRow">
                <div className="contact__card_field-inputBox">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="Enter Your First Name..."
                  />
                </div>
                <div className="contact__card_field-inputBox">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    required
                    placeholder="Enter You Subject..."
                  />
                </div>
              </div>
              <div className="contact__card_field-textArea">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  type="text"
                  name="message"
                  required
                  placeholder="Write a Message..."
                />
              </div>
              <div className="contact__card_field-buttonField">
                <button type="submit" value="Submit">
                  Send a Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
