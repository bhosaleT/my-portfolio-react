import React from "react";

class Header extends React.Component {
  render() {
    const profileImage = "../images/eric-cartman_380.jpg";
    return (
      <div className="header">
        <img
          className="profile-image"
          src="https://static.tvtropes.org/pmwiki/pub/images/eric-cartman_380.jpg"
          alt="Tejas-Bhosale"
        />
        <h2>Front End Developer</h2>
      </div>
    );
  }
}
export default Header;
