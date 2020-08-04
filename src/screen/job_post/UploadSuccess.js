import React, { Component } from 'react';
import { FlatList, Modal, Alert, TouchableOpacity, ActivityIndicator, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import {
    Container,
    Header,
    Content,
    Right,
    View,
    Fab,
    Card,
    H1,
    CardItem,
    Thumbnail,
    Text,
    Left,
    Body,
    Icon,
    Item,
    Label,
    Input,
    Separator,
    Button,
    DatePicker,
    Picker,
    Textarea
} from 'native-base';
import TimePicker from "react-native-24h-timepicker";



export default class StartTrip extends Component {
    constructor() {
        super();

        this.state = {
            hire: [],
            isLoading: true,
            show: true,
            username: null,
            jobname: null,
            jobposition: null,
            isVisible: false,
            userID: '',
            jobCreatorID: '',
            jobCreatorName: '',
            jobDescription: '',
            jobName: '',
            jobWorktype: '',
            job_seekerImage: '',
            job_seekerSalary: '',
            lat: '',
            lng: '',
            ref_experienece: '',
            ref_skills: '',
            ref_selfDescribe: '',
            startDate: '',
            workingLocation: '',
            period: '',
            task: '',
            time: '',
            worktime: '',
            //selectedHours: 0,
            //selectedMinutes: 0,
            chosenDate: new Date(),
            date_start: new Date().toString().substr(4, 12),
            date_end: new Date().toString().substr(4, 12)
        };
        this.selectWorkTime = this.selectWorkTime.bind(this);
        this.setDate_Start = this.setDate_Start.bind(this);
        this.setDate_End = this.setDate_End.bind(this);

    }

    onCancel() {
        this.TimePicker.close();
    }

    onConfirm(hour, minute) {
        this.setState({ time: `${hour}:${minute}` });
        this.TimePicker.close();
    }

    displayModal(show) {
        this.setState({ isVisible: show })
    }

    setPeriod = (value) => {
        this.setState({ ...this.state, period: value })
    }

    setTask = (value) => {
        this.setState({ ...this.state, task: value })
    }

    selectWorkTime = (value) => {
        this.setState({
            worktime: value
        })
    }

    setDate_Start(newDate) {
        this.setState({ date_start: newDate.toString().substr(4, 12) });
    }

    setDate_End(newDate) {
        this.setState({ date_end: newDate.toString().substr(4, 12) });
    }

    render() {
        return (
            <Container>
                <ImageBackground source={require('../../img/malaysia.jpg')} style={Style.image}>

                    <View>
                        <Text style={{ textAlign: "center", height: 40, fontWeight: "bold", fontSize: 30, marginBottom: 250 }}>Welcome to MyGerak!</Text>
                    </View>
                </ImageBackground>


                <Button style={Style.mainButton} onPress={() => this.props.navigation.navigate('InputItem')}/* onPress={() => { this.displayModal(true) }} */ >
                    <Text style={{ fontStyle: 'bold', fontSize: 20, fontWeight: 'bold' }}>Where To?</Text>
                </Button>


            </Container>

        );
    }
}
const Style = StyleSheet.create({
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