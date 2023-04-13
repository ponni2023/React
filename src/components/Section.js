import React from "react";
import "./styles/Section.scss";
import PonniPro from "./assets/profilephoto.jpeg";

const Section = () => {
  return (
    <div className="section">
      <div className="section__container">
        <div className="section__img">
          <img src={PonniPro} alt="" />
        </div>

        <div className="section__content">
          <h1>Ponni Egambaram</h1>
          <p>Leaning Experience in frontend software development</p>
          <p>HTML5, CSS3 and JavaScript</p>
          <p>React JS</p>
          <p>Tailwind CSS and Bootstrap</p>
          <p>Python</p>
          <p>Professional UI and UX Designer</p>
        </div>
      </div>
    </div>
  );
};
export default Section;
