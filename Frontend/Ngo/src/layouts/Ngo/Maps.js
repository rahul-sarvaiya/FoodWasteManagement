import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React from 'react';
import { Component } from 'react';
import { Grid } from '@mui/material/';
import MDBox from 'components/MDBox';
export class Maps extends Component {
  constructor(){
    super();
    this.state={
      rest:null,
      ngo:null,
      showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    }
  }
  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

onMapClicked = (props) => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    })
  }
};
  componentDidMount() {    
        fetch("http://127.0.0.1:8000/api/getrest").then((resp) => {
            resp.json().then((result) => {
                this.setState({rest:result})
            })
        })
        fetch("http://127.0.0.1:8000/api/getngo").then((result) => {
            result.json().then((resp) => {
                this.setState({ngo:resp})
            })
        })
  }
  render() {
    return (
    <>
    <Map
      initialCenter={{
        lat: 19.075983,
        lng:72.877655
      }}
      google={this.props.google}
      zoom={11}
      style={{ width: "93%",
      height: '500%'}}
    >
      {
        this.state.rest?
        this.state.rest.map((i) =>
          <Marker
            key="id"
            position={{
              lat: i.lat,
              lng: i.long
            }}
          
            
          />
        )
        :null
      }
        {
        this.state.ngo?
        this.state.ngo.map((i) =>
          <Marker
            key="id"
            position={{
              lat: i.lat,
              lng: i.long
            }}
          
            
          />
        )
        :null
      }
    </Map>
   </>

    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBbRta0QIq9h-mYKE_WwIwg-K6YM5rxAtE")
})(Maps)