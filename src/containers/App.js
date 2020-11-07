import * as React from 'react';
import { Sizes } from '@dungdang/react-native-basic/index';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeContainer from './Home/HomeContainer';
import ReportContainer from './Report/ReportContainer';
import SettingContainer from './Setting/SettingContainer';
import LoginContainer from './Login/LoginContainer';


const Tab = createBottomTabNavigator();

function TAB() {
    return (
        <Tab.Navigator
            initialRouteName="HomeContainer"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'HomeContainer') iconName = 'dashboard'
                    else if (route.name === 'ReportContainer') iconName = 'insert-chart';
                    else if (route.name === 'SettingContainer') iconName = 'settings';

                    return <MaterialIcons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#3E1B72',
                inactiveTintColor: '#B2C1C6',
                showLabel: false,
                style: {
                    backgroundColor: '#fff',
                    borderTopLeftRadius: Sizes.h40,
                    borderTopRightRadius: Sizes.h40
                },
                keyboardHidesTabBar: true
            }}>
            <Tab.Screen name="HomeContainer" component={HomeContainer} />
            <Tab.Screen name="ReportContainer" component={ReportContainer} />
            <Tab.Screen name="SettingContainer" component={SettingContainer} />
        </Tab.Navigator>
    )
}

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                headerMode='none'
                initialRouteName='LoginContainer'
            >
                <Stack.Screen name="LoginContainer" component={LoginContainer} />
                <Stack.Screen
                    options={{ cardStyle: { backgroundColor: '#F8FBFB' } }}
                    name="Tab" component={TAB} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}