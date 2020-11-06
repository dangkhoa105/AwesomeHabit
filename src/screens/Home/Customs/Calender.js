import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import moment from 'moment';

// get calendar
var calendar = []
for (let i = 1; i < 8; i++) {
    calendar = [...calendar, {
        date: moment().isoWeekday(i).format('DD'),
        day: moment().isoWeekday(i).format('ddd')
    }]
}

export default function Calender() {
    return (
        <View>
            <FlatList
                data={calendar}
                keyExtractor={(item, index) => 'key' + index}
                horizontal
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text>{item.date}</Text>
                            <Text>{item.day}</Text>
                        </View>
                    )
                }}
            />
            {/* <Text>{defaultWeekdays}</Text> */}
        </View>
    )
}
