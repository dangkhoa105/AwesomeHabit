import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { connect } from 'react-redux'
import { getCategoriesAction } from '../../redux/actions'
import CategoriesScreen from '../../screens/Habit/CategoriesScreen'

function CategoriesContainer(props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F2F7F8' }}>
      <CategoriesScreen {...props} />
    </SafeAreaView>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategoriesAction: () => {
      dispatch(getCategoriesAction())
    },
  }
}

const mapStateToProps = (state) => {
  return {
    fetchingGetCategories: state.getCategoriesReducer.fetching,
    dataGetCategories: state.getCategoriesReducer.data,
    messageGetCategories: state.getCategoriesReducer.message,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer)
