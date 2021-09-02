import React, { useEffect } from "react";
import Button from "./Button";
import AOS from "aos";
export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="about" id="about">
      <div className="about__container">
        <div className="about__container-left">
          <div className="about__container-left_imgContainer">
            <img
              data-aos="fade-down"
              src="./imgs/shukhrat_about1.jpeg"
              alt="shukhrat"
            />
          </div>
        </div>
        <div className="about__container-right">
          <div className="about__container-right-text">
            <span data-aos="fade-down">About me</span>
            <h1 data-aos="fade-down" data-aos-delay="100">
              I'm Shukhrat, <span>Front End Developer</span> and{" "}
              <span>Back End</span> Learner
            </h1>
            <p data-aos="fade-down" data-aos-delay="200">
              I'm a 24-year-old Uzbek Freelance Front-end developer. I have a
              desire to learn softwear development deeply and this great passion
              made me approach to the UK. Now I am studying at Ulster University
              in London. Basically, I create web applications using REACTJS. I
              also started to learn NODEJS, MONGODB for Back-end. <br />
              <br /> I'm a guy who likes making unusual things with web
              technologies. I like to resolve design problems, create smart user
              interface and imagine useful interaction, developing rich web
              experiences & web applications.
            </p>
            <Button href="./cv/CV.pdf" className="btn1__green" to="">
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
