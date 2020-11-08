import React from 'react'
import { View, SafeAreaView } from 'react-native'
import Header from '../../components/Header';
import ButtonAdd from '../../components/ButtonAdd';
import ReportScreen from '../../screens/Report/ReportScreen';

function ReportContainer(props) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F2F7F8' }}>
            <Header />
            <ReportScreen {...props} />
            <ButtonAdd />
        </SafeAreaView>
    );
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