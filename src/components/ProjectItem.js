import React from "react";

class ProjectItem extends React.Component {
  render() {
    return (
      <div className="project">
        <div className="img-container">
          <img className="project-img" src={this.props.project.image} alt="" />
        </div>

        <div>
          <h1 className="project-title">{this.props.project.name}</h1>
          <p className="project-shortDesc">
            <i>"{this.props.project.descShort}"</i>{" "}
          </p>
          <p className="project-desc">{this.props.project.desc}</p>
          <div className="project-bottom">
            <div className="tag">
              {this.props.project.tags.map(tag => (
                <p key={tag} className="tag-item">
                  {tag}
                </p>
              ))}
            </div>

            <ul className="buttons">
              <li className="link-item">
                <a
                  className="link"
                  href={this.props.project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={require("../images/svg/github.svg")} alt="Github" />
                </a>
              </li>
              <li className="link-item">
                <a
                  className="link"
                  href={this.props.project.web}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={require("../images/svg/chrome.svg")} alt="Github" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectItem;
