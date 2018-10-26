import React from "react";

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
              "featureType": "administrative",
              "elementType": "all",
              "stylers": [
                  {
                      "saturation": "-100"
                  }
              ]
          },
          {
              "featureType": "administrative.province",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "all",
              "stylers": [
                  {
                      "saturation": -100
                  },
                  {
                      "lightness": 65
                  },
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "all",
              "stylers": [
                  {
                      "saturation": -100
                  },
                  {
                      "lightness": "50"
                  },
                  {
                      "visibility": "simplified"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "all",
              "stylers": [
                  {
                      "saturation": "-100"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "simplified"
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "all",
              "stylers": [
                  {
                      "lightness": "30"
                  }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "all",
              "stylers": [
                  {
                      "lightness": "40"
                  }
              ]
          },
          {
              "featureType": "transit",
              "elementType": "all",
              "stylers": [
                  {
                      "saturation": -100
                  },
                  {
                      "visibility": "simplified"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                  {
                      "hue": "#ffff00"
                  },
                  {
                      "lightness": -25
                  },
                  {
                      "saturation": -97
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "labels",
              "stylers": [
                  {
                      "lightness": -25
                  },
                  {
                      "saturation": -100
                  }
              ]
          }
      ]

    var map = new window.google.maps.Map(document.getElementById("map"), {
      center: {
        lat: 19.076,
        lng: 72.8777
      },
      zoom: 12,
      styles: styles,
      disableDefaultUI: true,
      gestureHandling: "greedy",
      mapTypeControl: false
    });

      var marker = new window.google.maps.Marker({
          position: {
              lat: 19.076,
              lng: 72.8777
          },
          map: map,
          title: 'Mumbai'
      });
  };



  render() {
    return (
      <div className="contact">
        <div id="map" />
        <div className="contact-options">
          <ul className="contact-list">
            <li className="contact-item">Mail</li>
            <li className="contact-item">Github</li>
            <li className="contact-item">Linkedin</li>
            <li className="contact-item">Instagram</li>
          </ul>
        </div>
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
