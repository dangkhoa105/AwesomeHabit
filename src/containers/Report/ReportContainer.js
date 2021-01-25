import React from 'react'
import { SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
import { getHabitsAction } from '../../redux/actions'
import Header from '../../components/Header'
import ButtonAdd from '../../components/ButtonAdd'
import ReportScreen from '../../screens/Report/ReportScreen'
import HeaderChildren from '../../screens/Report/Customs/HeaderChildren'

function ReportContainer(props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F2F7F8' }}>
      <Header>
        <HeaderChildren {...props} />
      </Header>
      <ReportScreen {...props} />
      {/* <ButtonAdd onPressCreate={() => props.navigation.navigate('CategoriesContainer')} /> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(ReportContainer)
