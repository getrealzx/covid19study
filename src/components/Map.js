import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import { connect } from 'react-redux';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2V0cmVhbHp4IiwiYSI6ImNrOTA5bzVvaTAxc2szdG53NG85MG8za2oifQ.TUNWb1DL-UEbpE0uCjERfQ';


class Map extends Component {



  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 2
    };
  }


  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
  }
  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
    <div>
    <div ref={el => this.mapContainer = el} className="mapContainer" />
    </div>
    )
    }
}


// function mapStateToProps(state) {
//   return {
//     data: state.data,
//     active: state.active
//   };
// }

// Map = connect(mapStateToProps)(Map);

export default Map;
