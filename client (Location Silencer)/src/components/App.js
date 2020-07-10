/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

//  Google Maps API Key
// AIzaSyAQn3DUOfZTYfW0LbacvMU-PCHTTn3_q2w


import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducers } from '../reducers/ExerciseReducer';

const store = createStore(reducers);

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to CRM!</Text>
        </View>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;
