import React from "react";
import projectElements from "../projects";
import ProjectItem from './ProjectItem';

class Projects extends React.Component {
  render() {
    const projectArray = Object.values(projectElements);
    return (
      <div>
        <ul className="projects">
          {projectArray.map(project => (
            <li><ProjectItem project={project} /></li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Projects;
