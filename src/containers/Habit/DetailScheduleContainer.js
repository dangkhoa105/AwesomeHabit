import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { connect } from 'react-redux'
import { createHabitAction } from '../../redux/actions'
import DetailScheduleScreen from '../../screens/Habit/DetailScheduleScreen'

function DetailScheduleContainer(props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F2F7F8' }}>
      <DetailScheduleScreen {...props} />
    </SafeAreaView>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    createHabitAction: (data) => {
      dispatch(createHabitAction(data))
    },
  }
}

const mapStateToProps = (state) => {
  return {
    fetchingCreateHabit: state.createHabitReducer.fetching,
    dataCreateHabit: state.createHabitReducer.data,
    messageCreateHabit: state.createHabitReducer.message,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailScheduleContainer)
