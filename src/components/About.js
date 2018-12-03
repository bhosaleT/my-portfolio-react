import React from "react";

const About = () => (
  <div className="about">
    <img
      className="profile-image"
      src={require("../images/me.png")}
      alt="Tejas-Bhosale"
    />
    <div className="about__text">
      <p className="about-text">
        <span className="highlight"> I'm</span> a newly graduated web developer offering enthusiasm
        and understanding of Front-end frameworks like React, Redux and advanced
        CSS techniques and back-end frameworks like Node.js and mongoDB. I will
        bring to the table the ability to design and develop beautiful and
        functional websites using the latest technologies and web guidelines.
      </p>

      <a className="button" href={require("../resume/resume.pdf")} download>
        <img
          className="button-download"
          src={require("../images/svg/install.svg")}
          alt="download button"
        />
        DOWNLOAD CV{" "}
      </a>
    </div>
  </div>
);

export default About;
