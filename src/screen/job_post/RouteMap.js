import React, { Component } from 'react';
import { StyleSheet, Alert, FlatList, View, Image, ActivityIndicator, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Card, CardItem, Content, Footer, FooterTab, Button, Text, Left, Right, Header, Body } from 'native-base';
import firestore from '@react-native-firebase/firestore';
import Timeline from 'react-native-timeline-listview'


//let job = db.ref('/Job');

export default class RouteMap extends Component {
    constructor() {
        super();
        this.data = [
            { time: '09:00', title: 'Taman Melati Station' },
            { time: '10:45', title: 'Damai Station' },
            { time: '12:00', title: 'KLCC Station' },
            { time: '14:00', title: 'Masjid Jamek Station' },
            { time: '16:30', title: 'KL Sentral Station', description: 'Arrive at Destination' }
        ]

    }



    render() {

        return (

            <Container>
                <Timeline
                    style={styles.list}
                    data={this.data}
                />
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
    },
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 65,
        backgroundColor: 'white'
    },
    list: {
        flex: 1,
        marginTop: 20,
    },
})
