import React from "react";

const About = () => (
  <div>
    <div className="about">
      <img
        className="profile-image"
        src="https://static.tvtropes.org/pmwiki/pub/images/eric-cartman_380.jpg"
        alt="Tejas-Bhosale"
      />
      <p className="about-text">
        I'm a <span className="highlight">Full Stack Developer</span> from
        Mumbai, India. I recently graduated from Datta Meghe College of
        Engineering in the field of{" "}
        <span className="highlight">Computer Engineering</span> . I'm
        comfortable with the full stack which includes front-end frameworks like{" "}
        <span className="highlight">React.js</span> and back-end frameworks like{" "}
        <span className="highlight">Node.js</span> . Creativity and Always
        Learning are my major plus points and I'm passionate about building
        excellent websites and discovering new ways to get the job done!
      </p>
    </div>
    <div className="button-holder">
      <button className="button">DOWNLOAD CV</button>
    </div>
  </div>
);

export default About;
