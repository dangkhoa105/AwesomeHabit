import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { connect } from 'react-redux'
import { getHabitsAction } from '../../redux/actions'
import HabitsScreen from '../../screens/Habit/HabitsScreen'

function HabitsContainer(props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F2F7F8' }}>
      <HabitsScreen {...props} />
    </SafeAreaView>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    getHabitsAction: () => {
      dispatch(getHabitsAction())
    },
  }
}

const mapStateToProps = (state) => {
  return {
    fetchingGetHabits: state.getHabitsReducer.fetching,
    dataGetHabits: state.getHabitsReducer.data,
    messageGetHabits: state.getHabitsReducer.message,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HabitsContainer)
