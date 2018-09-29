import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Selector from "./Selector";

class App extends Component {
  state = {
    selectedSection: "About"
  };
  render() {
    return (
      <div>
        <Header />
        <Selector selectedSection={this.state.selectedSection} />
        <hr className="hr" />
      </div>
    );
  }
}

export default App;
