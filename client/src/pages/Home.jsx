import React from "react";
import axios from "axios";
import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import apiHandler from "../api/apiHandler";


  const Map = ReactMapboxGl({
    accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
  });
  
  const Home = (props) => {

  return (
    <div>
      <h1> MAPBOX HERE</h1>
      <Map
  center={[2.3522,48.8566]}
  zoom={[14]}
  style="mapbox://styles/mapbox/streets-v9"
  containerStyle={{
    height: '100vh',
    width: '100vw'
  }}
>

</Map>;   
</div>
  );
};

export default Home;
