import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { connect } from 'react-redux'
import { createCategoryAction } from '../../redux/actions'
import CreateNewCategoryScreen from '../../screens/Habit/CreateNewCategoryScreen'

function CreateNewCategoryContainer(props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F2F7F8' }}>
      <CreateNewCategoryScreen {...props} />
    </SafeAreaView>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    createCategoryAction: (data) => {
      dispatch(createCategoryAction(data))
    },
  }
}

const mapStateToProps = (state) => {
  return {
    fetchingCreateCategory: state.createCategoryReducer.fetching,
    dataCreateCategory: state.createCategoryReducer.data,
    messageCreateCategory: state.createCategoryReducer.message,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewCategoryContainer)
