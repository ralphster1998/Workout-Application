/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 // Google Client ID: 645821795167-jqlq099kj4m4i1l0itcigsr63kh26qnq.apps.googleusercontent.com
import {registerRootComponent} from 'expo';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/ExerciseReducer';
import Navigation from './Navigation';
import LoginGoogle from './LoginGoogle';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <LoginGoogle />
          {/* <Navigation />  FOR NOW, SINCE WE WANT TO FIX THE GOOGLE AUTHENTICATION. */}
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
});

export default registerRootComponent(App);