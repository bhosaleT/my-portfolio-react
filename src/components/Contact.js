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
              "featureType": "all",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "saturation": 36
                  },
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 40
                  }
              ]
          },
          {
              "featureType": "all",
              "elementType": "labels.text.stroke",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 16
                  }
              ]
          },
          {
              "featureType": "all",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "administrative",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 20
                  }
              ]
          },
          {
              "featureType": "administrative",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 17
                  },
                  {
                      "weight": 1.2
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 20
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 21
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 17
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 29
                  },
                  {
                      "weight": 0.2
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 18
                  }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 16
                  }
              ]
          },
          {
              "featureType": "transit",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 19
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 17
                  }
              ]
          }
      ]

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
      zoom: 11,
      styles: styles,
      disableDefaultUI: true,
    //   gestureHandling: "greedy",
      mapTypeControl: false
    });

    var marker = new window.google.maps.Marker({
      position: {
        lat: 19.228,
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
    return (
      <div className="contact">
        <div id="map" />

        <ul className="contact-list">
          <li className="contact-item">
            <a href="">
              <img src={require("../images/svg/mail.svg")} alt="" />
            </a>
          </li>
          <li className="contact-item">
            <a href="">
              <img src={require("../images/svg/github.svg")} alt="" />
            </a>
          </li>
          <li className="contact-item">
            <a href="">
              <img src={require("../images/svg/linkedin.svg")} alt="" />
            </a>
          </li>
          <li className="contact-item">
            <a href="">
              <img src={require("../images/svg/instagram.svg")} alt="" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Contact;

function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}
