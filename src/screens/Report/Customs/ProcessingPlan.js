import { Sizes } from '@dungdang/react-native-basic';
import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import ProgressCircle from 'react-native-progress-circle'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function ProcessingPlan({ data }) {
    return (
        <View style={styles.container}>
            {/* HEADER */}
            <Text style={styles.title}>This week</Text>

            {/* CONTENT */}
            <FlatList
                data={data}
                contentContainerStyle={styles.contentContainer}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({ item, index }) => {
                    return (
                        <View style={[styles.wrapItem, {
                            borderBottomWidth: index === data.length - 1 ? 0 : 0.5,
                            paddingVertical: Sizes.s50,
                            marginHorizontal: Sizes.s50,
                            borderBottomColor: '#91A7AD'
                        }]}>
                            <View style={[styles.wrapItem, { margin: 0 }]}>
                                {/* CIRCLE BAR */}
                                <ProgressCircle
                                    percent={parseInt(item.ratio)}
                                    radius={10}
                                    borderWidth={Sizes.s5}
                                    color="#FF79C9"
                                    shadowColor="#E8F1F4"
                                    bgColor="#F8FBFB"
                                />

                                {/* NAME */}
                                <Text style={styles.name}>{item.name}</Text>
                            </View>

                            <View style={[styles.wrapItem, { margin: 0 }]}>
                                {/* RATIO */}
                                <Text style={styles.ratio}>{item.ratio}%</Text>

                                {/* ARROW */}
                                <MaterialIcons
                                    name='keyboard-arrow-right'
                                    size={Sizes.h32}
                                    color='#859EA4'
                                />
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: Sizes.s50
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