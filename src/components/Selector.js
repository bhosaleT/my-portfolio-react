import React from "react";

class Selector extends React.Component {
  render() {
    let selectors = [
      { name: "About" },
      { name: "Education" },
      { name: "Skills" },
      { name: "Projects" },
      { name: "Contact" },
      { name: "Blog" }
    ];
    return (
      <div className="container">
        <ul className="selector-list">
          {selectors.map(index => (
            <li
              key={index.name}
              style={
                index.name === this.props.selectedSection
                  ? {
                      background: "#272727",
                      color: "#ffffff",
                      textTransform: "uppercase",
                      padding: 10
                    }
                  : null
              }
              onClick={this.props.onSelect.bind(null, index.name)}
            >
              {index.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Selector;
