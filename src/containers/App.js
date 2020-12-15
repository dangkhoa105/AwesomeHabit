/* eslint-disable react/display-name */
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { AppThemeProvider } from '../theme/themeProvider'
import { Icon } from 'react-native-eva-icons'
import HomeContainer from './Home/HomeContainer'
import ReportContainer from './Report/ReportContainer'
import SettingContainer from './Setting/SettingContainer'
import AboutContainer from './About/AboutContainer'
import WelcomeScreen from '../screens/Authentication/WelcomeScreen'
import LoginContainer from './Authentication/LoginContainer'
import SignupContainer from './Authentication/SignupContainer'
import CategoriesContainer from './Habit/CategoriesContainer'
import CategoryContainer from './Habit/CategoryContainer'
import CreateNewHabitContainer from './Habit/CreateNewHabitContainer'
import CreateNewCategoryContainer from './Habit/CreateNewCategoryContainer'
import DetailScheduleContainer from './Habit/DetailScheduleContainer'
import ChatBotContainer from './ChatBot/ChatBotContainer'
import ButtonAdd from '../components/ButtonAdd'

const Tab = createBottomTabNavigator()

function TAB() {
  return (
    <Tab.Navigator
      initialRouteName="HomeContainer"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = ''

          if (route.name === 'HomeContainer') iconName = 'calendar'
          else if (route.name === 'ReportContainer') iconName = 'bar-chart'
          else if (route.name === 'SettingContainer') iconName = 'settings'
          else if (route.name === 'AboutContainer') iconName = 'person'

          return <Icon name={iconName} width={24} height={24} fill={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: '#3E1B72',
        inactiveTintColor: '#B2C1C6',
        showLabel: false,
        style: {
          backgroundColor: '#fff',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        keyboardHidesTabBar: true,
      }}
    >
      <Tab.Screen name="HomeContainer" component={HomeContainer} />
      <Tab.Screen name="ReportContainer" component={ReportContainer} />
      <Tab.Screen name="SettingContainer" component={SettingContainer} />
      <Tab.Screen name="AboutContainer" component={AboutContainer} />
    </Tab.Navigator>
  )
}

const Stack = createStackNavigator()

export default function App() {
  return (
    <AppThemeProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName="WelcomeContainer">
          <Stack.Screen
            options={{ cardStyle: { backgroundColor: '#F8FBFB' } }}
            name="Tab"
            component={TAB}
          />
          <Stack.Screen name="WelcomeContainer" component={WelcomeScreen} />
          <Stack.Screen name="LoginContainer" component={LoginContainer} />
          <Stack.Screen name="SignupContainer" component={SignupContainer} />
          <Stack.Screen name="CategoriesContainer" component={CategoriesContainer} />
          <Stack.Screen name="CategoryContainer" component={CategoryContainer} />
          <Stack.Screen name="CreateNewHabitContainer" component={CreateNewHabitContainer} />
          <Stack.Screen name="CreateNewCategoryContainer" component={CreateNewCategoryContainer} />
          <Stack.Screen name="DetailScheduleContainer" component={DetailScheduleContainer} />
          <Stack.Screen name="ChatBotContainer" component={ChatBotContainer} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppThemeProvider>
  )
}
