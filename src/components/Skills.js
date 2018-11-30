import React from "react";

const Skills = () => (
  <div className="skill-block">
    <div className="skill-block__tab">
      <h4 className="skill-block__heading">
        <img
          className="button-download"
          src={require("../images/svg/html-five.svg")}
          alt="download button"
        />
        Front End
      </h4>
      <ul className="skill-list">
        <li className="skill-item">HTML5</li>
        <li className="skill-item">CSS3 / Sass</li>
        <li className="skill-item">FlexBox / CSS-GRID</li>
        <li className="skill-item">JavaScript (ES6)</li>
        <li className="skill-item">jQuery</li>
        <li className="skill-item">React</li>
        <li className="skill-item">Redux</li>
      </ul>
    </div>
    <div className="skill-block__tab">
      <h4 className="skill-block__heading">
        <img
          className="button-download"
          src={require("../images/svg/archive.svg")}
          alt="download button"
        />
        Back End
      </h4>
      <ul className="skill-list">
        <li className="skill-item">Node.js</li>
        <li className="skill-item">Express</li>
        <li className="skill-item">Firebase</li>
        <li className="skill-item">MySQL and NoSQL</li>
      </ul>
    </div>
    <div className="skill-block__tab">
      <h4 className="skill-block__heading">
        <img
          className="button-download"
          src={require("../images/svg/git.svg")}
          alt="download button"
        />
        Other
      </h4>
      <ul className="skill-list">
        <li className="skill-item">Git / Github</li>
        <li className="skill-item">JSON</li>
        <li className="skill-item">Webpack</li>
        <li className="skill-item">Responsive Design</li>
        <li className="skill-item">Jasmine/Jest Testing</li>
      </ul>
    </div>
  </div>
);

export default Skills;
