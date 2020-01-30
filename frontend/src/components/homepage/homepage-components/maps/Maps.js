import React from 'react'
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';
import { Container, Row, Col } from 'react-bootstrap';


class GMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
        };
        this.onMarkerClick = this.onMarkerClick.bind(this)
        this.onMapClicked = this.onMapClicked.bind(this)
    }
    onMarkerClick = (props, marker, e) => {
        console.log(marker, props, e)


        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }
    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    componentDidMount() {
        fetch('/authentication/locations',
            {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
            .then(res => res.json())
            .then((res) => {
                // console.log(res.data)
                this.setState({
                    data: res.data
                })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <Container fluid>
                <Row noGutters>
                    <Col>
                        <div className='map'>
                            <Map google={this.props.google}
                                zoom={12}
                                className="gMap"

                                initialCenter={{
                                    lat: 44.434931,
                                    lng: 26.102866
                                }}
                            >
                                {this.state.data ? this.state.data.map((e, i) => {
                                    return <Marker
                                        title={e.location_id}
                                        key={i}
                                        adress={e.adress}
                                        telephone={e.telephone}
                                        name={e.name}
                                        position={{
                                            lat: e.latitude,
                                            lng: e.longitude
                                        }}
                                        onClick={this.onMarkerClick}
                                    />
                                }) : null}
                                <InfoWindow
                                    marker={this.state.activeMarker}
                                    visible={this.state.showingInfoWindow}>
                                    <div>
                                        <h1>{this.state.selectedPlace.name}</h1>
                                        <h3>{this.state.selectedPlace.adress}</h3>
                                        <h3>{this.state.selectedPlace.telephone}</h3>
                                    </div>
                                </InfoWindow>
                            </Map>
                        </div>
                    </Col>
                </Row>

            </Container>
        )
    }
}

export default GoogleApiWrapper({ apiKey: ('AIzaSyAI7nWxzjV64pxGJ1p8SmjTeV-1LW2XlTA') })(GMap)