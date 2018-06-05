import React, { Component } from 'react';
import {Picker, SectionList, Alert, View, Text, Button, TextInput } from 'react-native';

export class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = { 
		username: 'Nhat',
		tumor: 'T1',
		node: 'N1',
		metastasis: 'M1',
		result: '-' 
		};
  }
  render() {
	
    return (
      <View>
        
        <Text>Welcome</Text>
        
	  </View>
    )
  }
};

export default Welcome;
