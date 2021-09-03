import React from "react";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__top-logo">
            <div className="footer__top-logoImg">
              <img src="./imgs/sh.png" alt="sh" />
            </div>
            <ul>
              <li>
                <i class="fab fa-twitter"></i>
              </li>
              <li>
                <i class="fab fa-linkedin-in"></i>
              </li>
              <li>
                <i class="fab fa-github"></i>
              </li>
              <li>
                <i class="fab fa-instagram"></i>
              </li>
            </ul>
          </div>
          <div className="footer__top-contact">
            <h3>| Contact Me</h3>
            <ul>
              <li>
                <i class="fas fa-phone-square-alt"></i> +447523230970
              </li>
              <li>
                <i class="fas fa-envelope"></i> shukhratmamadaliev9797@gmail.com
              </li>
              <li>
                <i class="fas fa-map-marker-alt"></i> Bethnal green, London UK
              </li>
              <li>
                <i class="far fa-calendar-alt"></i> Mon-Sun | 08 am-20 pm
              </li>
            </ul>
          </div>
          <div className="footer__top-service">
            <h3>| Services</h3>
            <ul>
              <li>
                <i class="fas fa-angle-double-right"></i> Web Development
              </li>
              <li>
                <i class="fas fa-angle-double-right"></i> Web Design
              </li>
              <li>
                <i class="fas fa-angle-double-right"></i> Responsive Design
              </li>
              <li>
                <i class="fas fa-angle-double-right"></i> Deployment
              </li>
            </ul>
          </div>
          <div className="footer__top-links">
            <h3>| Quick Links</h3>
            <ul>
              <li>
                <a href="#about">
                  <i class="fas fa-angle-double-right"></i> About me
                </a>
              </li>
              <li>
                <a href="#skills">
                  <i class="fas fa-angle-double-right"></i> Skills
                </a>
              </li>
              <li>
                <a href="#projects">
                  <i class="fas fa-angle-double-right"></i> Projects
                </a>
              </li>
              <li>
                <a href="#contact">
                  <i class="fas fa-angle-double-right"></i> Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p>
            Copyright &copy; 2021 All rights reserved | shukhrats.com is made by
            Shukhrat Mamadaliev
          </p>
        </div>
      </div>
    </div>
  );
}
