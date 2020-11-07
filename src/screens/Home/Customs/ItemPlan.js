import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Sizes } from '@dungdang/react-native-basic'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function ItemPlan({ data }) {
    const [isSelected, setIsSelected] = useState(data.isSelected)

    const handleSelected = () => {
        setIsSelected(!isSelected)
    }

    return (
        <TouchableOpacity style={styles.container}
            onPress={handleSelected}
        >
            <MaterialIcons
                name={isSelected ? 'check-circle' : 'radio-button-unchecked'}
                size={Sizes.s50}
                color='#9F7EFF'
            />
            <View style={{ paddingLeft: Sizes.h32 }}>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.content}>{data.content}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: Sizes.h24,
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        fontSize: Sizes.h24,
        fontWeight: 'bold',
        color: '#333',
    },
    content: {
        fontSize: Sizes.h24,
        fontWeight: '500',
        color: '#91A7AD',
    },
})