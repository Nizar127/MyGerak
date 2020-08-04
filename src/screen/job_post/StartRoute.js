import React, { Component } from 'react';
import { StyleSheet, Alert, FlatList, View, Image, ActivityIndicator, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Card, CardItem, Content, Footer, FooterTab, Button, Text, Left, Right, Header, Body } from 'native-base';
import firestore from '@react-native-firebase/firestore';
import MapView,
{ PROVIDER_GOOGLE, Marker, Callout, Polygon, Circle }
    from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

//const origin = { latitude: 3.194600, longitude: 101.705078 };
//const destination = { latitude: 3.134000, longitude: 101.685160 };
const GOOGLE_MAPS_APIKEY = 'AIzaSyDLllM-_bxchMqm1dqUIhwE54Z99EgEdqw';

//let job = db.ref('/Job');
const coordinates = [
    {
        latitude: 3.194600,
        longitude: 101.705078
    },
    {
        latitude: 3.134000,
        longitude: 101.685160
    }
]
export default class StartRoute extends Component {
    constructor() {
        super();

    }



    render() {

        return (

            <Container>


                <MapView
                    provider={PROVIDER_GOOGLE}
                    ref={map => this._map = map}
                    initialRegion={{
                        latitude: 3.139003,
                        longitude: 101.686852,
                        latitudeDelta: 0.09,
                        longitudeDelta: 0.035
                    }}
                    // onRegionChange={this.onRegionChange.bind(this)}
                    // ref={map => this._map = map}
                    showsUserLocation={true}
                    liteMode={true}
                    style={styles.map}
                    followsUserLocation={true}
                    showsMyLocationButton={true}
                    zoomEnabled={true}
                    showsBuildings={true}

                >
                    {/* <MapView.Marker coordinates={{ latitude: 3.194600, longitude: 101.705078 }} />
                    <MapView.Marker coordinates={{ latitude: 3.134000, longitude: 101.685160 }} /> */}
                    <MapViewDirections
                        // origin={coordinates[0]}
                        //destination={coordinates[1]}
                        origin={{ latitude: 3.194600, longitude: 101.705078 }}
                        destination={{ latitude: 3.134000, longitude: 101.685160 }}
                        apikey={GOOGLE_MAPS_APIKEY}
                        strokeWidth={3}
                        strokeColor="blue"
                    />
                </MapView>



            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 22
    },
    map: {
        height: 300,
        width: Dimensions.get('window').width,
        //...StyleSheet.absoluteFillObject
    },
    preloader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center'
    },
    orBtn: {
        fontWeight: 'bold',
        color: 'white',
        marginTop: 50,
        marginBottom: 50
    },
    startRouteBtn: {
        backgroundColor: 'blue',
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginTop: 20,
        marginLeft: 100
    },
    startTripBtn: {
        backgroundColor: 'green',
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginTop: 20,
        marginLeft: 100
    },
    footerBtn: {
        alignContent: 'space-around'
    }
})
