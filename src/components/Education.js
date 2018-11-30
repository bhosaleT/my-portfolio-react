import React from "react";

const Education = () => (
  <div className="education-block">
    <div className="education-block__tab">
      <h3 className="education-block__date">
        <img
          className="button-download"
          src={require("../images/svg/calendar.svg")}
          alt="download button"
        />
        JUN 18 - NOV 18
      </h3>
      <div className="education-block__info">
        <h4 className="education-block__heading">
          Front-End Developer Nanodegree Udacity
        </h4>
        <p className="education-block__paragraph">
          <q>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          debitis quibusdam voluptatum, similique deleniti corporis maiores
          iusto vel sit quasi quia sequi eveniet consequuntur deserunt. Maiores
          optio mollitia ipsum quod.
          </q>
          
        </p>
      </div>
    </div>
    <div className="education-block__tab">
      <h3 className="education-block__date">
        <img
          className="button-download"
          src={require("../images/svg/calendar.svg")}
          alt="download button"
        />
        AUG 13 - JUN 18
      </h3>
      <div className="education-block__info">
        <h4 className="education-block__heading">
          Bachelor of Engineering in Computer Science
        </h4>
        <p className="education-block__paragraph">
          <q>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          debitis quibusdam voluptatum, similique deleniti corporis maiores
          iusto vel sit quasi quia sequi eveniet consequuntur deserunt. Maiores
          optio mollitia ipsum quod.
          </q>
        </p>
      </div>
    </div>
    <div className="education-block__tab">
      <h3 className="education-block__date">
        <img
          className="button-download"
          src={require("../images/svg/calendar.svg")}
          alt="download button"
        />
        JUN 11 - JUN 13
      </h3>
      <div className="education-block__info">
        <h4 className="education-block__heading">
         School - Junior College
        </h4>
        <p className="education-block__paragraph">
          <q>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          debitis quibusdam voluptatum, similique deleniti corporis maiores
          iusto vel sit quasi quia sequi eveniet consequuntur deserunt. Maiores
          optio mollitia ipsum quod.
          </q>
        </p>
      </div>
    </div>
  </div>
);

export default Education;
