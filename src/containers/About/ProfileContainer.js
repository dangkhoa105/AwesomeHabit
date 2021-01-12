import React from 'react'
import { View, SafeAreaView } from 'react-native'
import ProfileScreen from '../../screens/About/ProfileScreen'

function ProfileContainer(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProfileScreen {...props} />
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
export default ProfileContainer
