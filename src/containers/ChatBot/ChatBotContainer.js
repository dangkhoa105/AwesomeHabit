import React from 'react'
import { View, SafeAreaView } from 'react-native'
import ChatBotScreen from '../../screens/ChatBot/ChatBotScreen'

function ChatBotContainer(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ChatBotScreen {...props} />
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
export default ChatBotContainer
