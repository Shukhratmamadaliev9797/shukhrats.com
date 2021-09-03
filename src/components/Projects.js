import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper/core";
import AOS from "aos";
import data from "../data.js";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import Modal from "react-bootstrap/Modal";
import ButtonLink from "./ButtonLink.js";

export default function Projects() {
  const [projects, setProjects] = useState(data.projects);
  const [project, setProject] = useState(projects[0]);

  const values = true;
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint, project) {
    setFullscreen(breakpoint);
    setShow(true);
    setProject(project);
  }
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  SwiperCore.use([Autoplay, EffectCoverflow, Pagination]);

  const renderProjects = () => {
    return projects.map((project, index) => {
      return (
        <SwiperSlide key={project._id}>
          <div className="swiper__image">
            <img src={project.imageLarge} alt={project.name} />
            <h3>{project.name}</h3>
            <ul>
              {project.technologies.map((tech) => {
                return <li>{tech}</li>;
              })}
            </ul>
            <button
              onClick={() => handleShow(values, project)}
              className="button-29"
              variant="outline-primary"
            >
              Learn more
            </button>
          </div>
        </SwiperSlide>
      );
    });
  };

  return (
    <>
      <Modal show={show} fullscreen={show} onHide={() => setShow(false)}>
        <Modal.Header className="modal__header" closeButton>
          <Modal.Title className="modal__title">{project.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal__body">
          <div className="modal__container">
            <div className="modal__container_left">
              <iframe src={project.projectURL} title={project.name}></iframe>
              <span>(This is real web page not picture. Scroll)</span>
            </div>
            <div className="modal__container_right">
              <div className="modal__container_right-category">
                <h4>Category: {project.category}</h4>
              </div>
              <div className="modal__container_right-technologies">
                <dl>
                  <dt>Technologies</dt>
                  {project.technologies.map((tech) => {
                    return <dd>{tech}</dd>;
                  })}
                </dl>
              </div>
              <div className="modal__container_right-features">
                <dl>
                  <dt>Features</dt>
                  {project.features.map((tech) => {
                    return <dd>{tech}</dd>;
                  })}
                </dl>
              </div>
              <div className="modal__container_right-deploy">
                <p>
                  <b>Deployed at</b> {project.deploy}
                </p>
              </div>
              <div className="modal__container_right-responsive">
                <p>
                  <b>Responsive: </b>
                  {project.isResponsive}
                </p>
              </div>
              <div className="modal__container_right-note">
                {project.note ? (
                  <p>
                    Note <i class="fas fa-info-circle"></i>: {project.note}{" "}
                  </p>
                ) : (
                  ""
                )}
              </div>

              <div className="modal__container_right-buttons">
                {" "}
                <ButtonLink className="btn1__green" to={project.projectURL}>
                  Demo
                </ButtonLink>
                <ButtonLink className="btn1__gray" to={project.githubURL}>
                  Github
                </ButtonLink>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <div className="projects" id="projects">
        <div className="projects__container">
          <div className="projects__title">
            <span>Projects</span>
            <h1 data-aos="fade-right">Discover my works</h1>
          </div>
          <div className="projects__container__left">
            <div>
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 20,
                  stretch: 0,
                  depth: 200,
                  modifier: 1,
                  slideShadows: true,
                }}
                loop={true}
                autoplay={{
                  delay: 10000,
                  disableOnInteraction: false,
                }}
                className="mySwiper"
              >
                {renderProjects()}
              </Swiper>
            </div>
          </div>
          <div className="projects__container__right"></div>
        </div>
      </div>
    </>
  );
}
