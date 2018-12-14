import React, { Component } from "react";
import "../css/App.css";
import Header from "./Header";
import Selector from "./Selector";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";

class App extends Component {
  state = {
    selectedSection: "About"
  };
  onSelect = section => {
    this.setState({
      selectedSection: section
    });
  };

  render() {
    let selectedSection = this.state.selectedSection;

    function showSection() {
      console.log("StateChanged");
      switch (selectedSection) {
        case "About":
          return <About />;
        case "Education":
          return <Education />;
        case "Skills":
          return <Skills />;
        case "Projects":
          return <Projects />;
        case "Blog":
          return <Blog />;   
        case "Contact":
          return <Contact />;
        default:
          return <h3>Something went wrong</h3>;
      }
    }

    return (
      <div>
        <div className="content">
          <Header />
          <div className="content-inside">
            <Selector
              onSelect={this.onSelect}
              selectedSection={this.state.selectedSection}
            />
            {showSection()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
