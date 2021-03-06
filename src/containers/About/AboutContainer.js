import React from 'react'
import { View, SafeAreaView } from 'react-native'
import AboutScreen from '../../screens/About/AboutScreen'
import Header from '../../components/Header'
import HeaderChildren from '../../screens/About/Custom/HeaderChildren'

function AboutContainer(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header>
        <HeaderChildren />
      </Header>
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
