import React from 'react'
import { View, Text, Image, ImageBackground, StyleSheet, Alert } from 'react-native'
import { Button } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler'
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import Modal from 'react-native-modals';
import { Calendar } from 'react-native-calendars';
import * as utils from './../../util/utils'
import { Footer } from '../../component/footer';
import { IconButton } from 'react-native-paper';
import * as mapper from './../../util/mapper'



export default function MainPage({ navigation }) {
    const [from, setFrom] = useState("")
    const [destination, setDestination] = useState("")

    const [availableDestination, setAvailableDestionation] = useState([])

    const [isVisible, setIsVisible] = useState(false);
    const [date, setDate] = useState('mm/dd/yyyy');
    const [year, setYear] = useState('');
    const [day, setDay] = useState('');

    const changeDeparted = (f) => {
        setFrom(f)
        if (f == 'dhaka') {
            setAvailableDestionation(utils.fromDhaka)
            setDestination(utils.fromDhaka[0].value)
        } else if (f == 'chittagon') {
            setAvailableDestionation(utils.fromChittagon)
            setDestination(utils.fromChittagon[0].value)
        } else if (f == 'comilla') {
            setAvailableDestionation(utils.fromComilla)
            setDestination(utils.fromComilla[0].value)
        } else {
            setAvailableDestionation([])
            setDestination('')
        }
    }

    const showAlert = (msg, desc) =>
        Alert.alert(msg,desc,
            [
                { text: "OK", onPress: () => console.log("OK") }
            ],
            { cancelable: false }
        );


    const submit = () => {
        if(date == 'mm/dd/yyyy'){
            showAlert("Info", "Please choose date first!")
            return
        }
        const id = mapper.getIDJSON(from, destination)
        navigation.navigate("Result", {
            from: from,
            to: destination,
            on: date,
            idJson: id
        })
    }


    return (
        <ScrollView>
            <ImageBackground
                source={ require('./../../../assets/slider.jpg')}
                style={styles.imageBackground}>
                <Image
                    style={styles.image}
                    source={ require('./../../../assets/redbus_cover.png')}
                />

                <View
                    style={styles.card}>
                    <Text style={styles.titleHelper}>Leaving From</Text>
                    <Picker
                        selectedValue={from}
                        style={{ height: 40, width: 160, marginLeft: 18, fontSize: 10 }}
                        onValueChange={(itemValue, itemIndex) => {
                            changeDeparted(itemValue)
                        }}>
                        <Picker.Item key="dhaka" label="Dhaka" value="dhaka" />
                        <Picker.Item key="comilla" label="Comilla" value="comilla" />
                        <Picker.Item key="chittagon" label="Chittagon" value="chittagon" />
                    </Picker>
                    <Text style={styles.titleHelper}>Your destination</Text>
                    <Picker
                        selectedValue={destination}
                        style={{ height: 40, width: 160, marginLeft: 18, fontSize: 10 }}
                        onValueChange={(itemValue, itemIndex) => {
                            setDestination(itemValue)
                        }}>
                        {
                            availableDestination.map((d) => {
                                return <Picker.Item key={d.value} label={d.label} value={d.value} />
                            })
                        }
                    </Picker>

                    <View style={styles.datePickerStyle}>
                        <Text
                            style={{ flex: 1, marginLeft: 10 }}
                            onPress={() => setIsVisible(true)}>
                            {date}
                        </Text>
                        <IconButton
                            icon="calendar"
                            onPress={() => setIsVisible(true)}
                        />


                    </View>
                    <Button icon="magnify" color='coral' mode="contained" onPress={submit}>
                        Search
                        </Button>
                </View>
            </ImageBackground>

            <View>
                <Modal
                    visible={isVisible}
                    style={{ backgroundColor: 'rgba(0,0,0,0.5)', flex: 1, margin: -10 }}
                    onTouchOutside={() => setIsVisible(false)}>
                    <Calendar
                        onDayPress={(day) => {
                            setDate(day.month + '/' + day.day + '/' + day.year);
                            setYear(day.year);
                            setDay(day.day);
                            setIsVisible(false);
                        }}
                    />
                </Modal>
            </View>

            <Footer />

        </ScrollView>

    )
}

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        paddingBottom: 28,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    image: {
        height: 200,
        width: 400,
        alignSelf: 'center',
        margin: 20,
    },
    card: {
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        margin: 20,
        borderRadius: 8,
    },
    titleHelper: {
        fontSize: 18
    },
    datePickerStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#e0e0e0',
        height: 40,
        borderRadius: 5,
        margin: 10,
    },
    calendarImage: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
})