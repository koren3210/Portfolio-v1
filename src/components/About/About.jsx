import React from "react";
import "./About.css";
import "./FadeAnimation.css";
import "./tooltips.css";
import Memoji from "../../assets/img/momoji.webp";

const About = () => {
  return (
    <section>
      <div className="about-container">
        <div className="about-wrappr">
          <div className="slider-content">
            <img src={Memoji} alt="main-memoji" />
            <div className="slider-info">
              <h1 className="slider-text main-font">
                <span className="animate fadeInUp one"> Hello, I am </span>

                <span className="animate fadeInUp two"> web developer.</span>
              </h1>
              <p className="slider-desc alt-font animate fadeInUp three">
                My name is koren, Im looking for my first job as a frontend
                devoloper, passionate on building wev apps using the MERN stack.
              </p>
              <button className="primary-btn alt-font animate fadeInRight four">
                Dowload CV
              </button>
            </div>
          </div>
        </div>
        <div className="side-footer">
          <ul className="social-icons animate fadeInUp five">
            <li>
              <a className="social-icon" href="">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a className="social-icon" href="">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a className="social-icon" href="">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a className="social-icon" href="">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="circels">
          <div className="circle-one">
            <span>
              <a
                href="#info"
                target="left"
                data-tooltip="Info"
                data-position="left"
              >
                <span className="animated-circle"></span>
              </a>
            </span>
          </div>
          <div className="circle-two">
            <span>
              <a
                href="#skills"
                target="top"
                data-tooltip="skills"
                data-position="top"
              >
                <span className="animated-circle"></span>
              </a>
            </span>
          </div>
          <div className="circle-three">
            <span>
              <a
                href="#portfolio"
                target="top"
                data-tooltip="Projects"
                data-position="top"
              >
                <span className="animated-circle"></span>
              </a>
            </span>
          </div>
          <div className="circle-four">
            <span>
              <a
                href="#contact"
                target="left"
                data-tooltip="contact"
                data-position="left"
              >
                <span className="animated-circle"></span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
