import React, { Component } from 'react';
import { StyleSheet, Alert, FlatList, View, Image, ActivityIndicator, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Card, CardItem, Content, Footer, FooterTab, Button, Text, Left, Right, Header, Body } from 'native-base';
import firestore from '@react-native-firebase/firestore';

//let job = db.ref('/Job');

export default class RouteDetails extends Component {
    constructor() {
        super();

    }



    render() {

        return (
            <ScrollView>
                <Container>



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
                                {/* </CardItem>
                            <CardItem bordered button onPress={() => this.props.navigation.navigate('RouteMap')}>
                                <CardItem cardBody>
                                    <Left>
                                        <Image source={require('../../img/uber.png')} style={{ width: 100, height: 50 }} />
                                    </Left>
                                    <Body style={{ paddingLeft: 20, flex: 1 }}>
                                        <Text style={{ paddingBottom: 7 }}>Grab E-Hailing</Text>
                                    </Body>
                                    <Right>
                                        <Text style={{ fontStyle: 'italic' }}>10.15 AM</Text>
                                    </Right>
                                </CardItem>
                            </CardItem>
                            <CardItem bordered button onPress={() => this.props.navigation.navigate('RouteMap')}>
                                <CardItem cardBody>
                                    <Left>
                                        <Image source={require('../../img/taxi.png')} style={{ width: 100, height: 50 }} />
                                    </Left>
                                    <Body style={{ paddingLeft: 20, flex: 1 }}>
                                        <Text style={{ paddingBottom: 7 }}>Taxi</Text>
                                    </Body>
                                    <Right>
                                        <Text style={{ fontStyle: 'italic' }}>10.40 AM</Text>
                                    </Right>
                                </CardItem>
                            </CardItem>
                            <CardItem bordered button onPress={() => this.props.navigation.navigate('RouteMap')}>
                                <CardItem cardBody>
                                    <Left>
                                        <Image source={require('../../img/bike.png')} style={{ width: 100, height: 50 }} />
                                    </Left>
                                    <Body style={{ paddingLeft: 20, flex: 1 }}>
                                        <Text style={{ paddingBottom: 7 }}>Gojek </Text>
                                    </Body>
                                    <Right>
                                        <Text style={{ fontStyle: 'italic' }}>10.20 AM</Text>
                                    </Right>
                                </CardItem>
                            </CardItem>
                            <CardItem bordered button onPress={() => this.props.navigation.navigate('RouteMap')}>
                                <CardItem cardBody>
                                    <Left>
                                        <Image source={require('../../img/lrt.png')} style={{ width: 100, height: 50 }} />
                                    </Left>
                                    <Body style={{ paddingLeft: 20, flex: 1 }}>
                                        <Text style={{ paddingBottom: 7 }}>KTM Komuter</Text>
                                    </Body>

                                    <Right>

                                        <Text style={{ fontStyle: 'italic' }}>12.30 AM</Text>
                                    </Right>
                                </CardItem>
                            </CardItem>
                            <CardItem bordered button onPress={() => this.props.navigation.navigate('RouteMap')}>
                                <CardItem cardBody>
                                    <Left>
                                        <Image source={require('../../img/lrt.png')} style={{ width: 100, height: 50 }} />
                                    </Left>
                                    <Body style={{ paddingLeft: 20, flex: 1 }}>
                                        <Text style={{ paddingBottom: 7 }}>KTM Komuter</Text>
                                        <Text>Pick-Up: </Text><Text>Gombak, Kuala Lumpur</Text>
                                        <Text>Destination: </Text><Text>KL Sentral, Kuala Lumpur</Text>
                                    </Body>

                                    <Right>

                                        <Text style={{ fontStyle: 'italic' }}>12.30 AM</Text>
                                    </Right>
                                </CardItem> */}
                            </CardItem>
                        </Card>

                    </Content>



                </Container>
            </ScrollView>
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
