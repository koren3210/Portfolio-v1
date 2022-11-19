import React from "react";
import "./About.css";
import "./FadeAnimation.css";
import Memoji from "../../assets/img/momoji.webp";

const About = () => {
  return (
    <section id="about">
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
          <div className="circels">
            <div className="circle-one">
              <span>
                <a href="#about">
                  <span className="animated-circle"></span>
                </a>
              </span>
            </div>
            <div className="circle-two">
              <span>
                <a href="#timeline">
                  <span className="animated-circle"></span>
                </a>
              </span>
            </div>
            <div className="circle-three">
              <span>
                <a href="#portfolio">
                  <span className="animated-circle"></span>
                </a>
              </span>
            </div>
            <div className="circle-four">
              <span>
                <a href="#portfolio">
                  <span className="animated-circle"></span>
                </a>
              </span>
            </div>
            <div className="circle-five">
              <span>
                <a href="#portfolio">
                  <span className="animated-circle"></span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="side-footer w-100">
        <ul className="social-icons">
          <li>
            <a className="social-icon">
              <i className="lni lni-facebook-filled"></i>{" "}
            </a>{" "}
          </li>
          <li>
            <a className="social-icon">
              <i className="lni lni-instagram-original"></i>{" "}
            </a>{" "}
          </li>
          <li>
            <a className="social-icon">
              <i className="lni lni-twitter"></i>{" "}
            </a>{" "}
          </li>
          <li>
            <a className="social-icon">
              <i className="lni lni-linkedin"></i>{" "}
            </a>{" "}
          </li>
        </ul>
        <p>&copy; Animation Coding</p>
      </div>
    </section>
  );
};

export default About;
