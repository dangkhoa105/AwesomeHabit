import React from 'react'
import { View, SafeAreaView } from 'react-native'
import WelcomeScreen from '../../screens/Authentication/WelcomeScreen'

function WelcomeContainer(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WelcomeScreen {...props} />
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
export default WelcomeContainer
