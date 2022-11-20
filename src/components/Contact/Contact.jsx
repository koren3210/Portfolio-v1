import React, { useEffect } from "react";
import useRippels from "../../hooks/useRippels";
import "./Contact.css";

const Contact = () => {
  useEffect(() => {
    useRippels(".contact-container");
  }, []);
  return (
    <section id="contact">
      <div className="contact-container"></div>
    </section>
  );
};

export default Contact;
