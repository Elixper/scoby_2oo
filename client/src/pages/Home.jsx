import React from "react";
import axios from "axios";
import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import apiHandler from "../api/apiHandler";
import "mapbox-gl/dist/mapbox-gl.css";


  const Map = ReactMapboxGl({
    accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
  });
  
  class Home extends React.Component {
state={
  items:[],
};

componentDidMount() {
axios
.get(process.env.REACT_APP_BACKEND_URL + "/api/items")
.then((response)=>{
  this.setState({
items:response.data
});
})
.catch((error)=>{
  console.log(error);
});
}
render() {
  console.log(this.state.items)
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
  {this.state.items.map((item)=> {
return (
<Marker
key={item._id}
coordinates={[
  item.location.coordinates[1],
  item.location.coordinates[0],
]}
anchor="bottom">
  <img style={{
    width:24,
    height:24,
  }}
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Carrot-fb.jpg/800px-Carrot-fb.jpg"
  alt="carrots"/>
</Marker>
  );
})}
</Map>;   
</div>
  );
};
}
export default Home;
