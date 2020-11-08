import React from 'react'
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import { VictoryBar } from 'victory';
import { Sizes } from '@dungdang/react-native-basic';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function CompletionRate({ data }) {
    return (
        <View style={styles.container}>
            {/* HEADER */}
            <View style={styles.header}>
                <Text style={styles.title}>This week</Text>
                <TouchableOpacity style={styles.filter}>
                    <Text style={styles.txtFilter}>Weekly</Text>
                    <MaterialIcons
                        name='keyboard-arrow-down'
                        size={Sizes.h32}
                        color='#9F7EFF'
                    />
                </TouchableOpacity>
            </View>

            {/* CONTENT */}
            {/* <VictoryBar
                data={data}
                y='value'
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    filter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtFilter: {
        fontSize: Sizes.h24,
        color: '#9F7EFF',
        paddingRight: Sizes.h24
    },
    title: {
        fontSize: Sizes.h32,
        fontWeight: 'bold',
        paddingBottom: Sizes.h32,
        color: '#333'
    },
    contentContainer: {
        backgroundColor: '#fff',
        borderRadius: Sizes.h32
    },
    wrapItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    name: {
        fontSize: Sizes.h28,
        fontWeight: 'bold',
        paddingLeft: Sizes.h24,
        color: '#333'
    },
    ratio: {
        fontSize: Sizes.h22,
        fontWeight: '500',
        color: '#859EA4',
        paddingRight: Sizes.h32
    }
})