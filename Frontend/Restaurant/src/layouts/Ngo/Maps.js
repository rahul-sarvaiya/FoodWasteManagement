import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React from 'react';
import { Component } from 'react';
import { Grid } from '@mui/material/';
import MDBox from 'components/MDBox';
export class Maps extends Component {
  render() {
    return (
    
    <Map
      initialCenter={{
        lat: 19.218330,
        lng: 72.978088
      }}

      
      google={this.props.google}
      zoom={12}
      style={{ width: "93%",
      height: '500%'}}
    >
          <Marker
            key="id"
            position={{
              lat: 19.237188,
              lng: 72.844139
            }}
            
          />
    </Map>
   

    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBbRta0QIq9h-mYKE_WwIwg-K6YM5rxAtE")
})(Maps)