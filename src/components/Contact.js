import React from "react";
import markerImage from "../images/svg/location2.svg";

class Contact extends React.Component {
  componentWillMount() {
    this.loadMap();
  }

  loadMap = () => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCgByDyHejXcnEYiAohk2kMYN0npMXsJTc&callback=initMap"
    );
    window.initMap = this.initMap;
  };

  initMap = () => {
    var styles = [
      {
        featureType: "administrative",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#444444"
          }
        ]
      },
      {
        featureType: "landscape",
        elementType: "all",
        stylers: [
          {
            color: "#f2f2f2"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "all",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "labels.text",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "all",
        stylers: [
          {
            saturation: -100
          },
          {
            lightness: 45
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "all",
        stylers: [
          {
            visibility: "simplified"
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [
          {
            color: "#dbdbdb"
          },
          {
            visibility: "on"
          }
        ]
      }
    ];
    var contentString = `<div>
  <h3 class="map-heading">I am from here</h3>
  <p class="map-info"> Kalyan, Thane, Mumbai, Maharashtra 421301</p>
 </div>`;

    var infowindow = new window.google.maps.InfoWindow({
      content: contentString
    });

    var map = new window.google.maps.Map(document.getElementById("map"), {
      center: {
        lat: 19.2183,
        lng: 72.9781
      },
      zoom: 12,
      styles: styles,
      disableDefaultUI: true,
      //   gestureHandling: "greedy",
      mapTypeControl: false
    });

    var marker = new window.google.maps.Marker({
      position: {
        lat: 19.2219,
        lng: 72.9791
      },
      map: map,
      draggable: true,
      icon: markerImage,
      title: "Thane",
      animation: window.google.maps.Animation.DROP
    });

    marker.addListener("click", function() {
      infowindow.open(map, marker);
    });
  };

  render() {
    return <div className="contact">
        <div id="map" />

        <ul className="contact-list">
          <li className="contact-item">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bhosaletejas93@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src={require("../images/svg/mail.svg")} alt="Mail" />
            </a>
          </li>
          <li className="contact-item">
            <a href="https://github.com/bhosaleT" target="_blank" rel="noopener noreferrer">
              <img src={require("../images/svg/github.svg")} alt="Github" />
            </a>
          </li>
          <li className="contact-item">
          <a href="https://www.linkedin.com/in/tejas-bhosale/" target="_blank" rel="noopener noreferrer">
              <img src={require("../images/svg/linkedin.svg")} alt="Linkedin" />
            </a>
          </li>
          <li className="contact-item">
          <a href="https://www.instagram.com/wittystarlord/?hl=en" target="_blank" rel="noopener noreferrer">
              <img src={require("../images/svg/instagram.svg")} alt="Instagram" />
            </a>
          </li>
        </ul>
      </div>;
  }
}

export default Contact;

// function removeScript(){
//   var index = window.document.getElementsByTagName("script")[0];

// }

function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}
