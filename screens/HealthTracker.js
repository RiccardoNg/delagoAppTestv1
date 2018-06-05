import React, { Component } from 'react';
import {Picker, SectionList, Alert, View, Text, Button, TextInput } from 'react-native';



export class HealthTracker extends Component {
  
  render() {
	
    return (
      <View>
        
        <Text>This is the HealthTracker screen</Text>
        <Button
          title="Go to Blood Pressure Tracker"
          onPress={() => this.props.navigation.push('HealthTrackerBloodPressureScreen')}
		/>
		<Button
          title="Go to Graph Screen"
          onPress={() => this.props.navigation.push('HealthTrackerGraphScreen')}
		/>
        
	  </View>
    )
  }
};

export default HealthTracker;
