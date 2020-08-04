import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
  Platform,
  Dimensions
} from 'react-native';
import MapView,
{ PROVIDER_GOOGLE, Marker, Callout, Polygon, Circle }
  from 'react-native-maps';
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import Carousel from 'react-native-snap-carousel';

export default class MyOrderDetail extends Component {

  static navigationOptions = {
    title: 'Ongoing Trip',
  };

  state = {
    markers: [],
    coordinates: [
      { name: 'KTM', payment: 'RM 20/hour', time_taken: '1 1/2 hours', latitude: 3.214670, longitude: 101.690520, image: require('../../img/train.png') },
      { name: 'LRT Putra', payment: 'RM 500', time_taken: '40 minutes', latitude: 3.194600, longitude: 101.705080, image: require('../../img/lrt.png') },
      { name: 'Grab E-Hailing', payment: 'RM 1200/month', time_taken: '20 minutes', latitude: 3.154430, longitude: 101.715100, image: require('../../img/uber.png') },
      { name: 'Taxi', payment: 'RM 100/hour', time_taken: '25 minutes', latitude: 3.202990, longitude: 101.732269, image: require('../../img/taxi.png') },
      { name: 'Bus', payment: 'RM 40/hour', time_taken: '1 3/4 hours', latitude: 3.224350, longitude: 101.725052, image: require('../../img/bus.png') },
      { name: 'Bike', payment: 'RM 2500', time_taken: '45 minutes', latitude: 3.154430, longitude: 3.154430, image: require('../../img/bike.png') },

    ]
  }

  componentDidMount() {
    this.requestLocationPermission();
  }

  showWelcomeMessage = () =>
    Alert.alert(
      'Get to Know Nearby Job',
      'Amazing Work, Amazing Payment',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Ok'
        }
      ]
    )

  requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      console.log('iPhone: ' + response);

      if (response === 'granted') {
        this.locateCurrentPosition();
      }
    } else {
      var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      console.log('Android: ' + response);

      if (response === 'granted') {
        this.locateCurrentPosition();
      }
    }
  }

  locateCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log(JSON.stringify(position));

        let initialPosition = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.035
        }

        this.setState({ initialPosition });
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 1000 }
    )
  }

  onCarouselItemChange = (index) => {
    let location = this.state.coordinates[index];

    this._map.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.09,
      longitudeDelta: 0.035
    })

    this.state.markers[index].showCallout()
  }

  onMarkerPressed = (location, index) => {
    this._map.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.09,
      longitudeDelta: 0.035
    });

    this._carousel.snapToItem(index);
  }

  renderCarouselItem = ({ item }) =>
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Image style={styles.cardImage} source={item.image} />
      <Text style={styles.cardType}>{item.time_taken}</Text>
      <Text style={styles.cardPayment}>{item.payment}</Text>

    </View>

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          ref={map => this._map = map}
          showsUserLocation={true}
          liteMode={true}
          style={styles.map}
          initialRegion={this.state.initialPosition}>

          <Polygon
            coordinates={this.state.coordinates}
            fillColor={'rgba(100, 100, 200, 0.3)'}
          />
          <Circle
            center={{ latitude: 3.098790, longitude: 101.644920 }}
            radius={1000}
            fillColor={'rgba(200, 300, 200, 0.5)'}
          />
          <Marker
            draggable
            coordinate={{ latitude: 3.098790, longitude: 101.644920 }}
          >

            <Callout onPress={this.showWelcomeMessage}>
              <Text>An Interesting Job</Text>
            </Callout>

          </Marker>
          {
            this.state.coordinates.map((marker, index) => (
              <Marker
                key={marker.name}
                ref={ref => this.state.markers[index] = ref}
                onPress={() => this.onMarkerPressed(marker, index)}
                coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
              >
                <Callout>
                  <Text>{marker.name}</Text>
                </Callout>

              </Marker>
            ))
          }


        </MapView>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={this.state.coordinates}
          containerCustomStyle={styles.carousel}
          renderItem={this.renderCarouselItem}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={300}
          removeClippedSubviews={false}
          onSnapToItem={(index) => this.onCarouselItemChange(index)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject
  },
  map: {
    height: 300,
    width: Dimensions.get('window').width,
    //...StyleSheet.absoluteFillObject
  },
  carousel: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 25
  },
  cardContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    height: 200,
    width: 220,
    padding: 24,
    borderRadius: 24
  },
  cardImage: {
    height: 120,
    width: 220,
    bottom: 0,
    position: 'absolute',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  cardTitle: {
    color: 'white',
    fontSize: 22,
    alignSelf: 'center'
  },
  cardPayment: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  cardType: {
    color: 'white',
    fontSize: 15,
    alignSelf: 'center'
  }
});