import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import ExerciseList from './ExerciseList';
import CategoryList from './CategoryList';
import AddExercise from './AddExercise';


const Tab = createBottomTabNavigator();

function TabNavigator() {
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
          return (<AntDesign name={iconName} size={50} color={color} />);
        }
      })}>
          <Tab.Screen name="Exercises" component={ExerciseList} />
          <Tab.Screen name="Add" component={AddExercise} />
          <Tab.Screen name="Category" component={CategoryList} />
    </Tab.Navigator>
    );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};