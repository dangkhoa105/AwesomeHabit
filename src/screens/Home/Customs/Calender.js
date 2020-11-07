import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { Sizes } from '@dungdang/react-native-basic/index'
import moment from 'moment';

// get calendar
var calendar = []
for (let i = 1; i < 8; i++) {
    calendar = [...calendar, {
        date: moment().isoWeekday(i).format('DD'),
        day: moment().isoWeekday(i).format('ddd')
    }]
}

const curDate = moment().utc().format('DD')

export default function Calender() {
    return (
        <View>
            <FlatList
                data={calendar}
                keyExtractor={(item, index) => 'key' + index}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <View style={[styles.wrapItem, {
                            backgroundColor: curDate === item.date ? '#F1ECFF' : '#E8F1F4',
                            borderWidth: curDate === item.date ? 1 : 0
                        }]}>
                            <Text style={[styles.txtItem, {
                                paddingBottom: Sizes.s20,
                                fontSize: Sizes.s20,
                                fontWeight: curDate === item.date ? 'bold' : 'normal',
                                color: curDate === item.date ? '#9F7EFF' : '#698790'
                            }]}>
                                {item.day.toUpperCase()}
                            </Text>
                            <Text style={[styles.txtItem, {
                                color: curDate === item.date ? '#9F7EFF' : '#698790'
                            }]}>
                                {item.date}
                            </Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapItem: {
        padding: Sizes.h32,
        backgroundColor: '#E8F1F4',
        marginHorizontal: Sizes.h16,
        marginVertical: Sizes.h48,
        borderRadius: Sizes.s25,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#9F7EFF'
    }, txtItem: {
        fontSize: Sizes.h32,
        fontWeight: 'bold',
        color: '#698790'
    }
})
