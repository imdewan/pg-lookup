import React, { Component } from 'react';
import NavBarHead from '../nav';
import useState from "react";
import { withScriptjs, InfoWindow, withGoogleMap, GoogleMap, Marker } from "react-google-maps";


const Home = () => {

return (
	<div>
    <NavBarHead />
    <ReportsPage />
	</div>
);
};

const handleActiveMarker = (marker) => {
    console.log(marker);
  };

const Map = withScriptjs(
    withGoogleMap(props => (
        <GoogleMap
            defaultZoom={12}
            defaultCenter={{ lat: 12.840994, lng: 77.516565 }}
            
        >
            {props.marks.map((mark, index) => (
                
                <Marker
                    key={index}
                    position={mark}
                    onClick={() => handleActiveMarker(mark)}    
                >
                
                    <InfoWindow >
                      <div>{props.names[index]}</div>
                    </InfoWindow>
                  
                  </Marker>
            ))}
        </GoogleMap>
    ))
);

class ReportsPage extends Component {
    state = {
        marks: [{ lat: 12.840994, lng: 77.516565 }
  , { lat: 12.849488, lng: 77.521457 }
  ],
  names:["ok1","bk2"]
  
    };

   

    render() {
        const { marks,names } = this.state;
        return (
            <div>
                
                <Map
                    googleMapURL="http://maps.googleapis.com/maps/api/js?key=AIzaSyBzwH4aiQxMFuHcUcBHEaYZ4SAxCPm7Xhg"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `90vh` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    onClick={handleActiveMarker(marks)}
                    marks={marks}
                    names={names}
                />;
            </div>
        );
    }
}


export default Home;