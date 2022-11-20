import React, { useEffect } from "react";
import useRippels from "../../hooks/useRippels";
import "./Portfolio.css";

const Project = () => {
  useEffect(() => {
    useRippels(".portfolio-container");
  }, []);
  return (
    <section id="portfolio">
      <div className="portfolio-container"></div>
    </section>
  );
};

export default Project;
