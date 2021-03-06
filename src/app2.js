import _ from "lodash";
import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

var lat = 24.9281339 
var lng = 67.112578
var key = "AIzaSyDfk0HtkqU5CsvElsATtaiLlYRgENWXTRQ"

// 24.928162, 67.112560
// 24.928064, 67.112266


const MyMapComponent = compose(
  withProps({

    googleMapURL:
      `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `500px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={18} defaultCenter={{ lat: lat, lng: lng }}>
    <Marker position={{ lat: lat, lng: lng }} />
  </GoogleMap>
));

const enhance = _.identity;

const ReactGoogleMaps = () => [
 
  <MyMapComponent key="map" />
];

export default enhance(ReactGoogleMaps);