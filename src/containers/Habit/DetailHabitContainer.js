import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { connect } from 'react-redux'
import { updateHabitAction } from '../../redux/actions'
import DetailHabitScreen from '../../screens/Habit/DetailHabitScreen'

function DetailHabitContainer(props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F2F7F8' }}>
      <DetailHabitScreen {...props} />
    </SafeAreaView>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateHabitAction: (id, data) => {
      dispatch(updateHabitAction(id, data))
    },
  }
}

const mapStateToProps = (state) => {
  return {
    fetchingUpdateHabit: state.updateHabitReducer.fetching,
    dataUpdateHabit: state.updateHabitReducer.data,
    messageUpdateHabit: state.updateHabitReducer.message,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailHabitContainer)
