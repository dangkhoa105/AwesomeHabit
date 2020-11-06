import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function LoginScreen({ navigation }) {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Tab')}>
                <Text>LoginScreen</Text>
            </TouchableOpacity>
        </View>
    )
}
