import React, { useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import data from "../data";
import Button from "./Button";
import AOS from "aos";

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(data.skills[0]);

  useEffect(() => {
    AOS.init({
      duration: 500,
      offset: 50,
    });
  }, []);
  return (
    <div className="skills" id="skills">
      <div className="skills__container">
        <div className="skills__left">
          <div className="skills__left_title">
            <span>Skills</span>
            <h1 data-aos="fade-right">Technical Knowledge</h1>
          </div>
          <div className="skills__left_cardsContainers">
            {data.skills.map((skill, index) => {
              return (
                <div
                  key={skill._id}
                  className="skills__left_card"
                  onClick={() => setSelectedSkill(skill)}
                >
                  <img src={skill.picture} alt={skill.name} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="skills__right">
          <div key={selectedSkill._id} className="skills__right_cardContainer">
            <div className="skills__right_card-img">
              <img
                data-aos="zoom-in"
                src={selectedSkill.picture}
                alt={selectedSkill.name}
              />
            </div>
            <div className="skills__right_card-title">
              <h1 data-aos="zoom-in">{selectedSkill.name}</h1>
            </div>
            <div className="skills__right_card-description">
              <ul>
                {selectedSkill.description.map((des, index) => {
                  const delay = 500 * index;
                  return (
                    <li data-aos="zoom-in" data-aos-delay={`${delay}`}>
                      - {des}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="skills__right_card-progress"
            >
              <CircularProgressbar
                valueStart={0}
                value={selectedSkill.percent}
                text={`${selectedSkill.percent}%`}
                circleRatio={0.75}
                styles={buildStyles({
                  rotation: 1 / 2 + 1 / 8,

                  trailColor: "#eee",
                  pathColor: "#865cda",
                })}
              />
            </div>
            <div className="skills__right_card-certificate">
              {selectedSkill.hadCertificate && (
                <>
                  <div
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    className="skills__right_card-certificate-button"
                  >
                    <Button
                      href={selectedSkill.certificate}
                      className="btn1__red"
                    >
                      Certificate
                    </Button>
                  </div>

                  <div
                    data-aos="zoom-in"
                    data-aos-delay="400"
                    className="skills__right_card-certificate-img"
                  >
                    <img src="/imgs/skills/certified.png" alt="certified" />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
