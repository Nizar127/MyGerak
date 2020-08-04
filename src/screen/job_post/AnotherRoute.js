import React, { Component } from 'react';
import { StyleSheet, Alert, FlatList, View, Image, ActivityIndicator, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Label, Card, CardItem, Content, Footer, FooterTab, Button, Text, Item, Input, Left, Right, Header, Body } from 'native-base';
import firestore from '@react-native-firebase/firestore';
import TimePicker from "react-native-24h-timepicker";


//let job = db.ref('/Job');

export default class AnotherRoute extends Component {
    constructor() {
        super();
        this.state = {
            textInput: [],
            inputData: [],
            time: '',
            worktime: '',
        }

    }

    onCancel() {
        this.TimePicker.close();
    }

    onConfirm(hour, minute) {
        this.setState({ time: `${hour}:${minute}` });
        this.TimePicker.close();
    }
    //function to add TextInput dynamically
    addTextInput = (index) => {
        let textInput = this.state.textInput;
        textInput.push(
            <View key={index} style={{ flexDirection: 'row', margin: 5 }}>
                <TextInput style={styles.startRouteBtn} onChangeText={(text) => this.addValues(text, index)} />
                <Icon android name="md-remove" size={30} style={{ marginTop: 30 }} onPress={() => this.removeTextInput()} />
            </View>

        );
        this.setState({ textInput });
    }

    //function to remove TextInput dynamically
    removeTextInput = () => {
        let textInput = this.state.textInput;
        let inputData = this.state.inputData;
        textInput.pop();
        inputData.pop();
        this.setState({ textInput, inputData });
    }

    //function to add text from TextInputs into single array
    addValues = (text, index) => {
        let dataArray = this.state.inputData;
        let checkBool = false;
        if (dataArray.length !== 0) {
            dataArray.forEach(element => {
                if (element.index === index) {
                    element.text = text;
                    checkBool = true;
                }
            });
        }
        if (checkBool) {
            this.setState({
                inputData: dataArray
            });
        }
        else {
            dataArray.push({ 'text': text, 'index': index });
            this.setState({
                inputData: dataArray
            });
        }
    }

    //function to console the output
    getValues = () => {
        console.log('Data', this.state.inputData);
    }



    render() {

        return (
            <ScrollView>
                <Container>
                    <Item fixedLabel last style={{ marginTop: 20, marginBottom: 10 }}>
                        <Label>Start Location:</Label>
                        <Input bordered style={styles.startRouteBtn} placeholder="Please State Your Initial Location" />
                    </Item>
                    <Item fixedLabel last style={styles.row}>
                        <Label>Destination:</Label>
                        <Input bordered style={styles.startRouteBtn} placeholder="Please State Your Destination" />
                        <Icon android name="md-add" size={30} onPress={() => this.addTextInput(this.state.textInput.length)} />
                    </Item>
                    {this.state.textInput.map((value) => {
                        return value
                    })}
                    <View>
                        <Text style={styles.text}>Please Determine Time To Travel</Text>
                        <TouchableOpacity
                            onPress={() => this.TimePicker.open()}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>Open TimePicker</Text>
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


                    <Button success style={styles.addButton} onPress={() => this.props.navigation.navigate('RouteDetails')} >
                        <Text>Submit</Text>
                    </Button>


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
    startRouteBtn: {
        backgroundColor: 'white',
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20
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
    startRouteBtn: {
        backgroundColor: 'white',
        height: 70,
        width: 300,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        borderWidth: 1,
        borderColor: 'black',
        shadowColor: 'black',
        margin: 20
    },
    buttonView: {
        flexDirection: 'row'
    },
    textInput: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        margin: 20
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center'
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
