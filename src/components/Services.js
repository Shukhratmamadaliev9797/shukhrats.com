import React, { useEffect } from "react";
import data from "../data";
import AOS from "aos";

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="services" id="services">
      <div className="services__top">
        <div className="services__top_content">
          <div className="services__top_content-title">
            <span data-aos="fade-right">Services</span>
            <h1 data-aos="fade-right">Create Solutions</h1>
          </div>
          <div className="services__top_content-cardsContainer">
            {data.services.map((service, index) => {
              const delay = 500 * index;

              return (
                <div
                  data-aos="fade-up"
                  data-aos-delay={`${delay}`}
                  className="services__top_content-card "
                >
                  <div className="services__top_content-card-icon">
                    <img src={service.icon} alt={service.name} />
                  </div>
                  <h1>{service.name}</h1>
                  <p>{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="services__bottom">
        <div className="services__bottom_cardsContainer">
          {data.experiences.map((experience, index) => {
            const delay = 500 * index;
            return (
              <div
                data-aos="fade-down"
                data-aos-delay={`${delay}`}
                className="services__bottom_card"
              >
                <div
                  className={`services__bottom_card-left services__bottom_card-icon-${index}`}
                >
                  <i className={experience.icon}></i>
                </div>
                <div className="services__bottom_card-right">
                  <span>{experience.amount}</span>
                  <span>{experience.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
