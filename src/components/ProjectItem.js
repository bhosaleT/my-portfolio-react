import React from "react";

class ProjectItem extends React.Component {
  render() {
    return (
      <div className="project">
        <h1 className="project-title">{this.props.project.name}</h1>
        <p className="project-desc">{this.props.project.descShort}</p>
        <div className="tag-div">
          <ul className="tags">
            {this.props.project.tags.map(tag => (
              <li key={tag} className="tag-item">#{tag}</li>
            ))}
          </ul>
        </div>
        <button className="button">View More</button>
      </div>
    );
  }
}

export default ProjectItem;
