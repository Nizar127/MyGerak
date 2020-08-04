import React, { Component } from 'react';
import { StyleSheet, Alert, FlatList, View, Image, ActivityIndicator, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Card, CardItem, Content, Footer, FooterTab, Button, Text, List, ListItem, Left, Right, Header, Body } from 'native-base';
import firestore from '@react-native-firebase/firestore';

//let job = db.ref('/Job');

export default class DisplayRoute extends Component {
  constructor() {
    super();

  }



  render() {

    return (

      <Container>
        {/* <Header>
          <View style={{ marginTop: 25, marginEnd: 350 }}>
            <Icon style={{ color: 'white' }} name="md-menu" onPress={() => this.props.navigation.openDrawer()} />
          </View>
        </Header> */}

        <Content padder>

          <View>
            <Text style={{ textAlign: "center", height: 40, fontWeight: "bold", marginTop: 20 }}>Recommended Route</Text>
          </View>


          <Card style={{ marginBottom: 5, marginTop: 5, elevation: 10 }}>

            <CardItem bordered button onPress={() => this.props.navigation.navigate('RouteMap')}>
              <CardItem cardBody>
                <Left>
                  <Image source={require('../../img/train.png')} style={{ width: 100, height: 50 }} />
                </Left>
                <Body style={{ paddingLeft: 20, flex: 1 }}>
                  <Text style={{ paddingBottom: 7 }}>LRT Putra</Text>
                  <Text>Pick-Up: </Text><Text>Gombak, Kuala Lumpur</Text>
                  <Text>Destination: </Text><Text>KL Sentral, Kuala Lumpur</Text>
                </Body>

                <Right>

                  <Text style={{ fontStyle: 'italic' }}>10.30 AM</Text>
                </Right>
              </CardItem>


            </CardItem>
          </Card>



          <View>
            <Button style={styles.startTripBtn} onPress={() => this.props.navigation.navigate('StartRoute')}>
              <Text style={{ fontWeight: 'bold', color: 'white' }}>Start Trip</Text>
            </Button>
          </View>
          <View>
            <Text style={styles.orBtn}>OR</Text>
          </View>

          <View>
            <Button style={styles.startRouteBtn} onPress={() => this.props.navigation.navigate('AnotherRoute')}>
              <Text style={{ fontWeight: 'bold', color: 'white' }}>Create Your Own Route</Text>
            </Button>
          </View>

        </Content>



        <Footer>
          <FooterTab style={styles.footerBtn}>
            <Button vertical onPress={() => { this.props.navigation.navigate('MyOrderDetail') }}>
              <Text style={{ fontWeight: 'bold', color: 'white' }}>Map</Text>
            </Button>
            <Button vertical onPress={() => { this.props.navigation.navigate('Schedule') }}>
              <Text style={{ fontWeight: 'bold', color: 'white' }}>Schedule</Text>
            </Button>
          </FooterTab>
        </Footer>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 22
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
    marginTop: 50,
    marginLeft: 200,
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
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
    width: 200,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 30,
    marginLeft: 100
  },
  footerBtn: {
    alignContent: 'space-around'
  }
})
