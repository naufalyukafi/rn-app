import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import AboutScreen from '../Pages/AboutScreen'
import AddScreen from '../Pages/AddScreen'
import HomeScreen from '../Pages/Home'
import LoginScreen from '../Pages/Login'
import ProjectScreen from '../Pages/ProjectSreen'
import Setting from '../Pages/Setting'
import SkillsProject from '../Pages/SkillsProject'

const Tab = createBottomTabNavigator()
// const Drawwer = createDrawerNavigator()
const Stack = createStackNavigator()

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="MainApp" component={MainApp} options={{title: 'Molidu'}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router

const MainApp = () => {
    return (
        <Tab.Navigator initialRouteName="HomeScreen">
            <Tab.Screen name="HomeScreen" options={{title: 'Home'}} component={HomeScreen} />
            <Tab.Screen name="Setting" component={Setting} />
            <Tab.Screen name="ProjectScreen" component={ProjectScreen} />
        </Tab.Navigator>
    )
}