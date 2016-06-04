/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighLight,
  View
} from 'react-native';

import {Scene, Reducer, Router, Switch, TabBar, Modal, Schema, Actions, DefaultRenderer} from 'react-native-router-flux';


import MainContainer from './MainContainer';
import FirstContainer from './FirstContainer';
import SecondContainer from './SecondContainer';


const reducerCreate = params=>{
    // params.initialState['volume'] = 1;
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        console.log("ACTION:", action);
        return defaultReducer(state, action);
    }
};



class SynchComponentState extends Component {
    render() {
        return <Router createReducer={reducerCreate} sceneStyle={{backgroundColor:'#F7F7F7'} }>
            <Scene key="main" >
              <Scene key="mainContainer" component={MainContainer} />
              <Scene key="firstContainer" component={FirstContainer} />
              <Scene key="secondContainer" component={SecondContainer} />
            </Scene>  
     
        </Router>;
    }
}



AppRegistry.registerComponent('SynchComponentState', () => SynchComponentState);
