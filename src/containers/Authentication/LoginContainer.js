import React from 'react'
import { View, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
import LoginScreen from '../../screens/Authentication/LoginScreen'
import { loginAction } from '../../redux/actions/Authentication/LoginAction'

function LoginContainer(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LoginScreen {...props} />
    </SafeAreaView>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginAction: (email, password) => {
      dispatch(loginAction(email, password))
    },
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    fetching: state.loginReducer.fetching,
    data: state.loginReducer.data,
    message: state.loginReducer.message,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
// export default LoginContainer
