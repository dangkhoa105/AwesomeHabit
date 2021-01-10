import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { connect } from 'react-redux'
import {
  deleteHabitAction,
  getCategoriesAction,
  getHabitsAction,
  updateHabitAction,
} from '../../redux/actions'
import Header from '../../components/Header'
import ButtonAdd from '../../components/ButtonAdd'
import Calender from '../../screens/Home/Customs/Calender'
import HomeScreen from '../../screens/Home/HomeScreen'
import MovingButton from '../../components/MovingButton'

function HomeContainer(props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F2F7F8' }}>
      <Header />
      <Calender {...props} />
      <HomeScreen {...props} />
      <ButtonAdd onPress={() => props.navigation.navigate('CategoriesContainer')} />
      <MovingButton onPress={() => props.navigation.navigate('ChatBotContainer')} />
    </SafeAreaView>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategoriesAction: () => {
      dispatch(getCategoriesAction())
    },
    getHabitsAction: () => {
      dispatch(getHabitsAction())
    },
    updateHabitAction: (id, data) => {
      dispatch(updateHabitAction(id, data))
    },
    deleteHabitAction: (id) => {
      dispatch(deleteHabitAction(id))
    },
  }
}

const mapStateToProps = (state) => {
  console.log('state', state.deleteHabitReducer)
  return {
    fetchingGetCategories: state.getCategoriesReducer.fetching,
    dataGetCategories: state.getCategoriesReducer.data,
    messageGetCategories: state.getCategoriesReducer.message,
    fetchingGetHabits: state.getHabitsReducer.fetching,
    dataGetHabits: state.getHabitsReducer.data,
    messageGetHabits: state.getHabitsReducer.message,
    fetchingUpdateHabit: state.updateHabitReducer.fetching,
    dataUpdateHabit: state.updateHabitReducer.data,
    messageUpdateHabit: state.updateHabitReducer.message,
    fetchingDeleteHabit: state.deleteHabitReducer.fetching,
    dataDeleteHabit: state.deleteHabitReducer.data,
    messageDeleteHabit: state.deleteHabitReducer.message,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
