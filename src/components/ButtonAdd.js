import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Sizes } from '@dungdang/react-native-basic/index'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function ButtonAdd() {
    const add = () => {
        alert('Thêm plan')
    }
    return (
        <TouchableOpacity style={styles.container}
            onPress={add}
        >
            <MaterialIcons
                name='add'
                size={Sizes.s50}
                color='#fff'
                style={{ padding: Sizes.h20 }}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: Sizes.s20,
        right: Sizes.s40,
        backgroundColor: '#3E1B72',
        borderRadius: Sizes.s60
    }
})