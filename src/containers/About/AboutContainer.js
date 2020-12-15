import React from 'react'
import { View, SafeAreaView } from 'react-native'
import AboutScreen from '../../screens/About/AboutScreen'

function AboutContainer(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AboutScreen {...props} />
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
export default AboutContainer
