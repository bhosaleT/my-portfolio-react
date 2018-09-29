import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <img
            className="profile-image"
            src="https://static.tvtropes.org/pmwiki/pub/images/eric-cartman_380.jpg"
            alt="Tejas-Bhosale"
          />
          <div>
            <h2 className="name">Tejas Bhosale</h2>
            <p className="title">
              Full Stack Developer <span> / </span> Game Developer
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
