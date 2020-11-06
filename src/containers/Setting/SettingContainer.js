import React from 'react'
import { View, SafeAreaView } from 'react-native'
import SettingScreen from '../../screens/Setting/SettingScreen';

function SettingContainer(props) {
    return (
        <View>
            <SafeAreaView style={{ flex: 1 }}>
                <SettingScreen {...props} />
            </SafeAreaView>
        </View>
    )
}

const mapDispatchToProps = dispatch => {
    return {
    };
};

const mapStateToProps = state => {
    return {
    };
};

// export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
export default SettingContainer;