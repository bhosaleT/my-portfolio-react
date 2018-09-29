import React, { Component } from "react";
import "../css/App.css";
import Header from "./Header";
import Selector from "./Selector";

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
    return (
      <div>
        <Header />
        <Selector
          onSelect={this.onSelect}
          selectedSection={this.state.selectedSection}
        />
        {this.state.selectedSection}
        <hr className="hr" />
      </div>
    );
  }
}

export default App;
