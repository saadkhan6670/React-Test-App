import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
var key = "AIzaSyCQHtrnDIUAJw5uSJy6l1AjmuM7tgUymGU"

const style = {
    width: '100%',
    height: '100%'
}


export class MapContainer extends Component {
    state = {
        lat : 24.9281339,
        lng :67.112578
    }

    componentDidMount(){
        setTimeout(()=>{ 
            this.setState({
                lat: 24.928162, 
                lng: 67.112560
            })
            console.log(this.state)
            setTimeout(()=>{   this.setState({
                lat: 24.928064, 
                lng: 67.112266
            }) 
            console.log(this.state)
          }, 1000);
             }, 1000);
    }

   


    render() {
        // var points = [
        //     { lat: 24.928162, lng: 67.112560 },
        //     { lat: 24.928064, lng: 67.112266 },
        // ]
        // console.log(points[0])
        // var bounds = new this.props.google.maps.LatLngBounds();
        // for (var i = 0; i < points.length; i++) {
        //   bounds.extend(points[i]);
        // }
        return (
            <Map google={this.props.google}
                style={style}
                initialCenter={{
                    lat: this.state.lat,
                    lng: this.state.lng
                }}
                // bounds={bounds}
                zoom={18}
                onClick={this.onMapClicked}
            >

                <Marker  />
            </Map>
        );
    }
}

export default GoogleApiWrapper({ apiKey: (key) })(MapContainer)