import React from 'react'
import { View, SafeAreaView } from 'react-native'
import SignupScreen from '../../screens/Authentication/SignupScreen'

function SignupContainer(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SignupScreen {...props} />
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
export default SignupContainer
