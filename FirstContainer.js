'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
    TouchableHighlight,
        Text,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

class FirstContainer extends Component {

  onPressButton(type){

    Actions.secondContainer({volume: this.props.volume});
  } 


  render() {
    return (
      <View style={styles.container}>
          <TouchableHighlight onPress={ _ => this.onPressButton('FirstContainer')} underlayColor='grey'>
            <Text style={styles.welcome}>
              FirstContainer The prop is: {this.props.volume}
            </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

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


export default FirstContainer;