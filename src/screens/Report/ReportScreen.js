import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { Sizes } from '@dungdang/react-native-basic/index'
import ProcessingPlan from './Customs/ProcessingPlan'
import CompletionRate from './Customs/CompletionRate'

const DataProcessingPlan = [
    {
        name: 'Read Book',
        ratio: 30
    },
    {
        name: 'Learning Arabic',
        ratio: 50
    },
    {
        name: 'Morning Run',
        ratio: 70
    },
    {
        name: 'Read Book',
        ratio: 30
    },
    {
        name: 'Read Book',
        ratio: 30
    },
    {
        name: 'Read Book',
        ratio: 30
    },
    {
        name: 'Read Book',
        ratio: 30
    },
    {
        name: 'Read Book',
        ratio: 30
    },
]

const DataChart = [
    {
        name: 'Read Book', value: 30
    },
    {
        name: 'Learn Aerobic', value: 70
    },
    {
        name: 'Morning Run', value: 80
    },
    {
        name: 'Read Book', value: 30
    },
    {
        name: 'Read Book', value: 30
    },
]

export default function ReportScreen() {
    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
            <ProcessingPlan data={DataProcessingPlan} />
            <CompletionRate data={DataChart} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8FBFB',
        paddingHorizontal: Sizes.s50
    },
})
