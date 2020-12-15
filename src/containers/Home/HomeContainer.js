import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import ButtonAdd from '../../components/ButtonAdd'
import Calender from '../../screens/Home/Customs/Calender'
import HomeScreen from '../../screens/Home/HomeScreen'
import MovingButton from '../../components/MovingButton'

function HomeContainer(props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F2F7F8' }}>
      <Header />
      <Calender />
      <HomeScreen {...props} />
      <ButtonAdd onPress={() => props.navigation.navigate('CategoriesContainer')} />
      <MovingButton onPress={() => props.navigation.navigate('ChatBotContainer')} />
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
export default HomeContainer
