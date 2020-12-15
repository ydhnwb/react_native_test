import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export const Footer = () => {
    const datas = [
        "Dhaka to Dinajpur",
        "Dhaka to Nilphamari",
        "Dhaka to Rangpur",
        "Dhaka to Cox's Bazar",
        "Dhaka to Kurigram",
        "Dhaka to Thakurgaon",
        "Dhaka to Feni"
    ]

    const whyUs = [
        "Buy bus tickets anytime from anywhere",
        "Pay by credit card, mobile banking or cash",
        "Get tickets delivered to your doorstep",
        "Dependable customer service (8 AM to 11 PM)"
    ]
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.textTitle}>Popular Roads</Text>
                <FlatList
                    data={datas}
                    keyExtractor={(item) => item }
                    renderItem={({item}) => {
                        return (
                            <View style={{ flexDirection: 'row', margin: 4, alignItems:'center'}}>
                                <FontAwesome5Icon name="map-marker" color='coral' size={28}/>
                                <Text style={{ marginStart: 16 }}>{item}</Text>
                            </View>
                        )
                    }}
                />
            </View>

            <View style={styles.container}>
                <Text style={styles.textTitle}>Why buy tickets from us?</Text>
                <FlatList
                    data={whyUs}
                    keyExtractor={(item) => item }
                    renderItem={({item}) => {
                        return (
                            <View style={{ flexDirection: 'row', margin: 4, alignItems: 'center'}}>
                                <FontAwesome5Icon name="check" color='coral' size={28}/>
                                <Text style={{ marginStart: 16 }}>{item}</Text>
                            </View>
                        )
                    }}
                />
            </View>
            <View style={{ alignItems: 'center' }}>
                <Image style={{
                    width: '80%',
                    resizeMode: 'center',
                    height: 80
                }} source={require('./../../assets/payment_methode.png')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        alignItems: 'center',
        borderColor: "#e0e0e0",
        padding: 16,
        borderWidth: 1,
        margin: 16
    },
    textTitle: {
        marginBottom: 16,
        fontSize: 18,
        fontWeight: 'bold'
    }
})