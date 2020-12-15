import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native'

export const AppBar = () => {
    return (
        <View style={{ backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Image
                    style={{ width: 65, height: 65, marginLeft: 20 }}
                    source={ require('./../../assets/redbus_icon.png') }
                />
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={styles.touchable}>
                        <Text
                            style={{
                                alignSelf: 'center',
                                color: '#fff',
                                fontSize: 15,
                                padding: 5,
                            }}>
                            Login
              </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.touchable}>
                        <Text
                            style={{
                                alignSelf: 'center',
                                color: '#fff',
                                fontSize: 15,
                                padding: 5,
                            }}>
                            Register
              </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity
                style={{

                    flexDirection: 'row',
                    backgroundColor: 'coral',
                    borderColor: 'coral',
                }}>
                <Text
                    style={{
                        alignSelf: 'center',
                        color: '#fff',
                        fontSize: 18,
                        padding: 2,
                        marginLeft: 20,
                    }}>
                    Home
          </Text>
            </TouchableOpacity>

        </View>


    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    touchable: {
        borderRadius: 8,
        flexDirection: 'row',
        backgroundColor: 'coral',
        borderColor: 'coral',
        marginTop: 14,
        marginBottom: 14,
        marginRight: 10,
    }
})