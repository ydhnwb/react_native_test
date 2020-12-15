import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export const BusItem = ({ bus }) => {
    return (
        <Card style={styles.root}>
            <View style={styles.body}>
                <Text style={styles.busName}>{bus.name}</Text>
                <Text>{`Departure: ${bus.time}`}</Text>
                <Text>Fare {bus.fare}</Text>
                <View style={{ alignSelf:'flex-end' }}>
                    <Text>{bus.coach_type}</Text>
                    <Text>{bus.seat} seats</Text>
                </View>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    root: {
        margin: 4
    },
    body: {
        padding: 16
    },
    busName : {
        fontWeight: 'bold',
        fontSize: 16
    }
})