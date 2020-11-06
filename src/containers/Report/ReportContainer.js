import React from 'react'
import { View, SafeAreaView } from 'react-native'
import ReportScreen from '../../screens/Report/ReportScreen';

function ReportContainer(props) {
    return (
        <View>
            <SafeAreaView style={{ flex: 1 }}>
                <ReportScreen {...props} />
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
export default ReportContainer;