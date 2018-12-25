import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './Store/Reducers';
import LoginForm from './components/LoginForm';
import Router from './routers/route';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyB4wIgsZ9b3Lqazlx1c3LWPm_m4QCwLg3M",
      authDomain: "react-native-firestore-f2a6d.firebaseapp.com",
      databaseURL: "https://react-native-firestore-f2a6d.firebaseio.com",
      projectId: "react-native-firestore-f2a6d",
      storageBucket: "react-native-firestore-f2a6d.appspot.com",
      messagingSenderId: "741649450344"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
          <Router />
      </Provider>
    );
  }
}

