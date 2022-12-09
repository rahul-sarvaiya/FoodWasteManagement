import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React from 'react';
import { Component } from 'react';
export class Testimonials extends React.Component {
  render()
  {
  return (
    <div id='testimonials'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>LOCATIONS OF DONORS AND NGO'S </h2>
        </div>
        
          <Map
            initialCenter={{
              lat: 19.218330,
              lng: 72.978088
            }}
            google={this.props.google}
            zoom={12}
            style={{
              width: "100%",
              height: '100%'
            }}
          >
            <Marker
              key="id"
              position={{
                lat: 19.237188,
                lng: 72.844139
              }}
            />
          </Map>
        
      </div>
    </div>
  )
}
}
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBbRta0QIq9h-mYKE_WwIwg-K6YM5rxAtE")
})(Testimonials)
