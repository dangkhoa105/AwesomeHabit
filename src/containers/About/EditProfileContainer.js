import React from 'react'
import { View, SafeAreaView } from 'react-native'
import EditProfileScreen from '../../screens/About/EditProfileScreen'

function EditProfileContainer(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <EditProfileScreen {...props} />
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
export default EditProfileContainer
