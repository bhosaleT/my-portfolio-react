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
          Front-End Web Developer Nanodegree Udacity
        </h4>
        <p className="education-block__paragraph">
          <q>
            Completed my Front-End Web Developer Nanodegree with glowing code
            and project reviews from the Udacity Code Reviewers. In this course
            I developed multiple projects using the javascript framework React16
            and API's like Google maps and foursquare. some of the valuable
            skills I learned from this course was accessible, responsive design
            and developing progressive web apps using serviceworkers.
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
            Finished my Computer Science Bachelor's degree from Datta Meghe college of Engineering.
            I played a part in multiple projects throughout this course such as
            a website and an Android app. For the final year BE project I
            created a 2D platformer game using Unity3D engine for Windows and
            Mac platform. This project can be found{" "}
            <a href="https://github.com/bhosaleT/KnightFall">here</a>.
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
        <h4 className="education-block__heading">School - Junior College</h4>
        <p className="education-block__paragraph">
          <q>
           Finished my schooling from "Shri Vani Vidya Shala High School" with a special interest in Computers and went on to finish my jr College from S.V. Joshi College with Computer Science as my selected subject. 
          </q>
        </p>
      </div>
    </div>
  </div>
);

export default Education;
