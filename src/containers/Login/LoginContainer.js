import React from 'react'
import { View, SafeAreaView } from 'react-native'
import LoginScreen from '../../screens/Login/LoginScreen'

function LoginContainer(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LoginScreen {...props} />
    </SafeAreaView>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const mapStateToProps = (state) => {
  return {}
}

// export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
export default LoginContainer
