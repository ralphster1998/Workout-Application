import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import ExerciseList from './ExerciseList';
import CategoryList from './CategoryList';
import AddExercise from './AddExercise';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: '#80cbc4',
        showLabel: false,
        showIcon: true,
        style: {
          backgroundColor: '#26a69a'
        }
      }} 
      screenOptions={ ({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          let iconName, iconColor;
          switch (route.name) {
            case 'Exercises':
              iconName = 'user';
              break;
            case 'Category':
              iconName = 'book';
              break;
            case 'Add':
              iconName = 'pluscircleo';
              break;
            default:
              break;
          }
          return (<AntDesign name={iconName} size={30} color={color} />);
        }
      })}>
      <Tab.Screen name="Add" component={AddExercise} />
      <Tab.Screen name="Category" component={CategoryList} />
      <Tab.Screen name="Exercises" component={ExerciseList} />
    </Tab.Navigator>
  );
}

// Get TAB NAVIGATOR FIXED (THERE'S SOMETHING WRONG WITH TRANSITIONING BETWEEN THEM FOR SOME REASON.)
export default function Navigation() {
  return (
      <NavigationContainer><MyTabs /></NavigationContainer>
  );
}
