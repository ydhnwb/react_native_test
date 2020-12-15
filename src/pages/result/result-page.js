import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import * as BusService from './../../webservice/schedule-service'
import { useState } from 'react';
import { useEffect } from 'react';
import { BusItem } from '../../component/bus-item';

export default function ResultPage({ navigation, route }) {
    const title = `${route.params.from.toUpperCase()} - ${route.params.to.toUpperCase()} on ${route.params.on}`
    const [buses, setBuses] = useState([])


    const fetchBuses = async () => {
        const res = await BusService.fetchBusSchedule(route.params.idJson)
        if (res.status === 200) {
            if (res.data != null) {
                restructure(res.data)

            }
        }
    }

    const restructure = (arr) => {
        const temp = []
        for (let i = 0; i < Object.keys(arr).length; i++) {
            const name = Object.keys(arr)[i]
            temp.push(arr[name])
        }
        setBuses(temp)
    }

    useEffect(() => {
        fetchBuses()
    }, [])


    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.titleText}>{title}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <Text>Filter by</Text>
                <Picker
                    style={{ height: 40, width: 120, marginLeft: 18, fontSize: 10 }}
                >
                    <Picker.Item key="by bus" label="By Bus" value="by bus" />
                </Picker>
                <Picker
                    style={{ height: 40, width: 120, marginLeft: 18, fontSize: 10 }}
                >
                    <Picker.Item key="by bus" label="By Bus" value="by bus" />
                </Picker>
            </View>

            <FlatList
                data={buses}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return item.name == undefined ? null :
                        <BusItem bus={item} />
                }}
            >

            </FlatList>


        </View>
    )
}

const styles = StyleSheet.create({
    titleText: {
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold'
    }
})