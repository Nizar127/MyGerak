import React, { Component } from 'react';
import { FlatList, Modal, Alert, TouchableOpacity, ActivityIndicator, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import {
    Container,
    Header,
    Content,
    Right,
    View,
    Text,
    Left,
    Body,
    Icon,
    Item,
    Label,
    Input,
    Button,
} from 'native-base';
import TimePicker from "react-native-24h-timepicker";
import TimeTableView, { genTimeBlock } from 'react-native-timetable';
const events_data = [
    {
        title: "Math",
        startTime: genTimeBlock("MON", 9),
        endTime: genTimeBlock("MON", 10, 50),
        location: "Classroom 403",
        extra_descriptions: ["Kim", "Lee"],
    },
    {
        title: "Math",
        startTime: genTimeBlock("WED", 9),
        endTime: genTimeBlock("WED", 10, 50),
        location: "Classroom 403",
        extra_descriptions: ["Kim", "Lee"],
    },
    {
        title: "Physics",
        startTime: genTimeBlock("MON", 11),
        endTime: genTimeBlock("MON", 11, 50),
        location: "Lab 404",
        extra_descriptions: ["Einstein"],
    },
    {
        title: "Physics",
        startTime: genTimeBlock("WED", 11),
        endTime: genTimeBlock("WED", 11, 50),
        location: "Lab 404",
        extra_descriptions: ["Einstein"],
    },
    {
        title: "Mandarin",
        startTime: genTimeBlock("TUE", 9),
        endTime: genTimeBlock("TUE", 10, 50),
        location: "Language Center",
        extra_descriptions: ["Chen"],
    },
    {
        title: "Japanese",
        startTime: genTimeBlock("FRI", 9),
        endTime: genTimeBlock("FRI", 10, 50),
        location: "Language Center",
        extra_descriptions: ["Nakamura"],
    },
    {
        title: "Club Activity",
        startTime: genTimeBlock("THU", 9),
        endTime: genTimeBlock("THU", 10, 50),
        location: "Activity Center",
    },
    {
        title: "Club Activity",
        startTime: genTimeBlock("FRI", 13, 30),
        endTime: genTimeBlock("FRI", 14, 50),
        location: "Activity Center",
    },
];


export default class Schedule extends Component {
    constructor(props) {
        super(props);
        this.numOfDays = 5;
        this.pivotDate = genTimeBlock('mon');
    }

    scrollViewRef = (ref) => {
        this.timetableRef = ref;
    };

    onEventPress = (evt) => {
        Alert.alert("onEventPress", JSON.stringify(evt));
    };

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={Style.container}>
                    <TimeTableView
                        scrollViewRef={this.scrollViewRef}
                        events={events_data}
                        pivotTime={9}
                        pivotDate={this.pivotDate}
                        numberOfDays={this.numOfDays}
                        onEventPress={this.onEventPress}
                        headerStyle={styles.headerStyle}
                        formatDateHeader="dddd"
                        locale="ko"
                    />
                </View>
            </SafeAreaView>
        );
    }
}
const Style = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#81E1B8'
    },
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 100,
        backgroundColor: '#E91E63',
        width: 90,
        height: 90,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    mainButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 100,
        backgroundColor: '#00E704',
        width: 150,
        height: 150,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
        alignItems: 'center',
        marginBottom: 100,
        marginTop: 10,
        marginRight: 100,
        elevation: 20
    },
    closeText: {
        fontSize: 25,
        color: '#00479e',
        textAlign: 'center',
        marginTop: 10
    },
    text: {
        fontSize: 20,
        marginTop: 5
    },
    button: {
        backgroundColor: "#4EB151",
        paddingVertical: 11,
        paddingHorizontal: 17,
        borderRadius: 3,
        marginVertical: 50
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "300"
    }
})