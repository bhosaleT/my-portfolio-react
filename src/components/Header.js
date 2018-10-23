import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="info">
            <h2 className="name">Tejas Bhosale</h2>
            <p className="title">
              Full Stack Developer <span className="divider"> || </span> Game
              Enthusiast
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
