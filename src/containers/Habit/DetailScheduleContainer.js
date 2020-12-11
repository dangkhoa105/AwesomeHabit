import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { connect } from 'react-redux'
import DetailScheduleScreen from '../../screens/Habit/DetailScheduleScreen'

function DetailScheduleContainer(props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F2F7F8' }}>
      <DetailScheduleScreen {...props} />
    </SafeAreaView>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const mapStateToProps = (state) => {
  return {}
}

// export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
export default DetailScheduleContainer
