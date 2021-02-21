import React from 'react'
import { View, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
import ForgetPasswordScreen from '../../screens/Authentication/ForgetPasswordScreen'

function ForgetPasswordContainer(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ForgetPasswordScreen {...props} />
    </SafeAreaView>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPasswordContainer)
