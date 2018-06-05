import React, { Component } from 'react';
import {Picker, SectionList, Alert, View, Text, Button, TextInput, StyleSheet, AsyncStorage, TouchableOpacity } from 'react-native';
import { ButtonGroup, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

export class HealthTrackerBloodPressure extends Component {
  constructor(props) {
    super(props);
    this.state = { 
		max: '9',
		min: '9',
		rate: '9',
		time: '9',
		selectedIndex: 2,
		};
	this.updateIndex = this.updateIndex.bind(this);
  }
  
  updateIndex (selectedIndex) {
  this.setState({selectedIndex})
}
  
  //Test hien thi thong tin da nhap
  _onPressButton() {
	var max = this.state.max
	var min = this.state.min
	var rate = this.state.rate
	var time = this.state.time
	
    Alert.alert('You tapped the button! c: ' + max + min + rate + time);
  }
  
  //Luu giu lieu vao bo nho tam AsyncStorage
  saveData(max,min,rate,time) {
			let obj = {
				max: max,
				min: min,
				rate: rate, 
				time: time,
			}
			AsyncStorage.setItem('user',JSON.stringify(obj));
	}
	
	//hien thi du lieu da luu trong bo nho tam AsyncStorage
	displayData = async () => {
		try {
			let user = await AsyncStorage.getItem('user');
			let parsed = JSON.parse(user);
			alert(parsed.max + " - " + parsed.min + " - " + parsed.rate + " - " + parsed.time);
		}	
		
		catch(error) {
			alert(error);
		}
	}
  
  render() {
	
	const buttons = ['Save', 'Overview', 'Share']
    const { selectedIndex } = this.state
    
    return (
      <View>
        <TouchableOpacity onPress={this.saveData(this.state.max, this.state.min, this.state.rate, this.state.time)}>
			<Text>Click me to save data</Text>
		</TouchableOpacity>
        
        <TouchableOpacity onPress={this.displayData}>
			<Text>Click me to display data</Text>
		</TouchableOpacity>
		
		<TouchableOpacity onPress={this.displayData}>
			<Text>Click me to push data to firebase</Text>
		</TouchableOpacity>
		
        <Text>This is the Blood Pressure Tracker screen</Text>
        <FormLabel>Max</FormLabel>
		<FormInput
			onChangeText={max => this.setState({ max })}
			value={this.state.max}
		/>
		<FormLabel>Min</FormLabel>
		<FormInput
			onChangeText={min => this.setState({ min })}
			value={this.state.min}
		/>
		<FormLabel>Heart Rate</FormLabel>
		<FormInput
			onChangeText={rate => this.setState({ rate })}
			value={this.state.rate}
		/>
		<FormLabel>Time</FormLabel>
		<FormInput
			onChangeText={time => this.setState({ time })}
			value={this.state.time}
		/>
		<Text>
        {this.state.max + ' - ' + this.state.min}
        </Text>
        <ButtonGroup
		  onPress={this.updateIndex}
		  selectedIndex={selectedIndex}
		  buttons={buttons}
		  containerStyle={{height: 100}}
		/>
        <Button
            onPress={this._onPressButton}
            title="Save"
            color="#841584"
        />
        <Button title="Overview" 
        
        />
        <Button title="Share" 
        
        />
        
	  </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})

export default HealthTrackerBloodPressure;
