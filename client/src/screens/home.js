import React, { Component } from 'react';
import NavBarHead from '../nav';
import axios from "axios";
import useState from "react";
import { withScriptjs, InfoWindow, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { useGeolocated } from "react-geolocated";

const Home = () => {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
        positionOptions: {
            enableHighAccuracy: false,
        },
        userDecisionTimeout: 5000,
    });

    const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get("http://localhost:9000/getpgs").then((response) => {
      setPost(response.data);
    });
  }, []);
  const [post1, setPost1] = React.useState(null);

  React.useEffect(() => {
    axios.get("http://localhost:9000/getpgname").then((response) => {
      setPost1(response.data);
    });
  }, []);
    
    //var l1 = coords.latitude;
    //var l2 = coords.longitude;
    var mrk=[];
    console.log(post);
    mrk=post

    var state = {
    marks: post,
    names:post1,
    center:{ lat: 0, lng: 0 }
    
    };
return (
	<div>
    <NavBarHead />
    <ReportsPage state={state}/>
	</div>
);
};



const handleActiveMarker = (marker) => {
    window.location.href = "/details?lat="+marker.lat+"&lng="+marker.lng;
    console.log(marker);
    
  };

const Map = withScriptjs(
    withGoogleMap(props => (
        <GoogleMap
            defaultZoom={12}
            defaultCenter={props.center}
            
        >
            {props.marks.map((mark, index) => (
                
                <Marker
                    key={index}
                    position={mark}
                    onClick={() => handleActiveMarker(mark)}    
                >
                
                    <InfoWindow onCloseClick={() => console.log("ok")}>
                      <div>{props.names[index].name}</div>
                    </InfoWindow>
                  
                  </Marker>
            ))}
        </GoogleMap>
    ))
);


class ReportsPage extends Component {
    
    
    render() {
        const { center,marks,names } = this.props.state;
        return (
            <div>
                
                <Map
                    googleMapURL="http://maps.googleapis.com/maps/api/js?key=AIzaSyBzwH4aiQxMFuHcUcBHEaYZ4SAxCPm7Xhg"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `90vh` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    //onClick={handleActiveMarker(marks)}
                    marks={marks}
                    names={names}
                    center={center}
                />;
            </div>
        );
    }
}



export default Home;