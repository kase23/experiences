import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 40.73,
      lng: -73.93
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB3z-4ZcYZkXb31lBJZkf7nmJzdNLH26p0" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;