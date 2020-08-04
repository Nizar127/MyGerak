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



export default class InputItem extends Component {
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
                <Item fixedLabel last style={{ marginTop: 20 }}>
                    <Label>Start Location:</Label>
                    <Input bordered style={Style.startRouteBtn} placeholder="Please State Your Initial Location" />
                </Item>
                <Item fixedLabel last style={{ marginTop: 10 }}>
                    <Label>Destination:</Label>
                    <Input bordered style={Style.startRouteBtn} placeholder="Please State Your Destination" />
                </Item>

                <View>
                    <Text style={Style.text}>Please Determine Time To Travel</Text>
                    <TouchableOpacity
                        onPress={() => this.TimePicker.open()}
                        style={Style.button}
                    >
                        <Text style={Style.buttonText}>Open TimePicker</Text>
                    </TouchableOpacity>
                    <Text>{this.state.time}</Text>
                    <TimePicker
                        ref={ref => {
                            this.TimePicker = ref;
                        }}
                        onCancel={() => this.onCancel()}
                        onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
                    />
                </View>


                <Button success style={Style.addButton} onPress={() => this.props.navigation.navigate('DisplayRoute')} >
                    <Text>Submit</Text>
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
    startRouteBtn: {
        backgroundColor: 'white',
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        borderWidth: 1,
        borderColor: 'black',
        shadowColor: 'black'
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