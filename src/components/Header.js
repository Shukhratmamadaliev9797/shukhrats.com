import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import ButtonLink from "./ButtonLink";
import AOS from "aos";
export default function Header() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="header__container">
      <div className="header">
        <div className="header__left">
          <div className="header__effects">
            <div className="header__effects-1">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>

            <div className="header__effects-3"></div>
          </div>
          <div className="header__left-container">
            <h1 data-aos="fade-down">
              Hey, I'm a web{" "}
              <span className="header__left-span">developer</span> and{" "}
              <span className="header__left-span">designer</span>
            </h1>

            <p data-aos="fade-down" data-aos-delay="200">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradise.
            </p>
            <div
              data-aos="fade-down"
              data-aos-delay="300"
              className="header__left-btns"
            >
              <ButtonLink className="btn1__green" to="#contact">
                Hire me
              </ButtonLink>
              <Button
                href="#contact"
                className="btn_text"
                variant="outline-primary"
              >
                <i class="far fa-comments"></i> Let's chat
              </Button>
            </div>
          </div>
        </div>
        <div className="header__right">
          <div>
            <div className="header__right-imgContainer">
              <div className="header__right-linkContainer">
                <a
                  href="https://www.linkedin.com/in/shukhrat-mamadaliev-b5423019a/"
                  target="_blank"
                  rel="noreferrer"
                  className="header__right-link header__right-link-1"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <img src="./imgs/linkedin.png" alt="linkedin" />
                </a>
                <a
                  href="https://www.instagram.com/shukhrat3626/"
                  target="_blank"
                  rel="noreferrer"
                  className="header__right-link header__right-link-2"
                  data-aos="zoom-in"
                  data-aos-delay="500"
                >
                  <img src="./imgs/instagram.png" alt="instagram" />
                </a>
                <a
                  href="https://github.com/Shukhratmamadaliev9797"
                  target="_blank"
                  rel="noreferrer"
                  className="header__right-link header__right-link-3"
                  data-aos="zoom-in"
                  data-aos-delay="600"
                >
                  <img src="./imgs/github.png" alt="github" />
                </a>
                <a
                  href="https://twitter.com/Shukhrat0969"
                  target="_blank"
                  rel="noreferrer"
                  className="header__right-link header__right-link-4"
                  data-aos="zoom-in"
                  data-aos-delay="700"
                >
                  <img src="./imgs/twitter.png" alt="twitter" />
                </a>
              </div>

              <div className="header__right-imgBackground"></div>
              <img
                data-aos="fade-down"
                data-aos-delay="200"
                className="header__right-img"
                width="650px"
                src="./imgs/shukhrat_header1.png"
                alt="shukhrat"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
