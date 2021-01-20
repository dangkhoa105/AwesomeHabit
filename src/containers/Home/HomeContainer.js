import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { connect } from 'react-redux'
import { deleteHabitAction, getHabitsAction, updateCheckinsHabitAction } from '../../redux/actions'
import Header from '../../components/Header'
import ButtonAdd from '../../components/ButtonAdd'
import HomeScreen from '../../screens/Home/HomeScreen'
import HeaderChildren from '../../screens/Home/Customs/HeaderChildren'

function HomeContainer(props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F2F7F8' }}>
      <Header>
        <HeaderChildren />
      </Header>

      <HomeScreen {...props} />
      <ButtonAdd onPressCreate={() => props.navigation.navigate('CategoriesContainer')} />
    </SafeAreaView>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    getHabitsAction: () => {
      dispatch(getHabitsAction())
    },
    updateCheckinsHabitAction: (id, data) => {
      dispatch(updateCheckinsHabitAction(id, data))
    },
    deleteHabitAction: (id) => {
      dispatch(deleteHabitAction(id))
    },
  }
}

const mapStateToProps = (state) => {
  return {
    fetchingGetHabits: state.getHabitsReducer.fetching,
    dataGetHabits: state.getHabitsReducer.data,
    messageGetHabits: state.getHabitsReducer.message,

    fetchingUpdateCheckinsHabit: state.updateCheckinsHabitReducer.fetching,
    dataUpdateCheckinsHabit: state.updateCheckinsHabitReducer.data,
    messageUpdateCheckinsHabit: state.updateCheckinsHabitReducer.message,

    fetchingDeleteHabit: state.deleteHabitReducer.fetching,
    dataDeleteHabit: state.deleteHabitReducer.data,
    messageDeleteHabit: state.deleteHabitReducer.message,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
