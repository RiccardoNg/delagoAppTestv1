import React, { Component } from 'react';
import {Picker, SectionList, Alert, View, Text, Button, TextInput } from 'react-native';

export class Settings extends Component {
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
  

  
  _onPressButton2() {
	
	var tumor = "T1"
	var node = "N1"
	var metastasis = "M1"
	var result = "-"
	
	const tumorFromExcel = ["T1", "T1", "T2", "T2", "T3", "T4"];
    const nodeFromExcel = ["N1", "N1", "N2", "N2", "N3", "N4"];
    const metastasisFromExcel = ["M1", "M1", "M2", "M2", "M3", "M4"];
    const resultFromExcel = ["Stage1", "Stage1", "Stage2", "Stage2", "Stage3", "Stage4"];

	var i;
	for ( i=0; i < 4; i++) {
		if ((tumor == tumorFromExcel[i]) && (node == nodeFromExcel[i]) && (metastasis == metastasisFromExcel[i])) {
			result = "Stage1";
			result => this.setState({result}) ;
		} else {
		result = "Stage4";
		}
	}	
		
	
	
    Alert.alert('result: ' + i + tumor + node + metastasis + result);
  }
  
  _onPressButton() {
	var a = 1
	var b = 2
	var c = a + b
    Alert.alert('You tapped the button! c: ' + c);
  }
  
  render() {
	const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const tumorId = navigation.getParam('tumorId', 'NO-TumorID');
    
    const otherParam = navigation.getParam('otherParam', 'some default value');
    
    
    

    return (
      <View>
        
        <Text>This is the Settings screen</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>tumorIdParam: {JSON.stringify(tumorId)}</Text>
        <TextInput
          style={{height: 40}}
          onChangeText={(username) => this.setState({username})}
		  value={this.state.username}
        />
        <Picker
		  selectedValue={this.state.tumor}
		  style={{ height: 50, width: 300 }}
		  onValueChange={(itemValue, itemIndex) => this.setState({tumor: itemValue})}>
		  <Picker.Item label="T1-level 1" value="T1" />
		  <Picker.Item label="T2-level 2" value="T2" />
		</Picker>
		<Text>
          {this.state.tumor}{'\n'}{'\n'}
        </Text>
        <TextInput
		  selectedValue={this.state.node}
		  style={{ height: 50, width: 300 }}
		  onValueChange={(itemValue, itemIndex) => this.setState({node: itemValue})}>
		  
		</TextInput>
		<Text>
          {this.state.node}{'\n'}{'\n'}
        </Text>
        <Picker
		  selectedValue={this.state.metastasis}
		  style={{ height: 50, width: 300 }}
		  onValueChange={(itemValue, itemIndex) => this.setState({metastasis: itemValue})}>
		  <Picker.Item label="M1-level 1" value="M1" />
		  <Picker.Item label="M2-level 2" value="M2" />
		</Picker>
		<Text>
          {this.state.metastasis}{'\n'}{'\n'}
        </Text>
        
        <Button
          title="Go to Setting... again"
          onPress={() =>
            this.props.navigation.push('SettingScreen', {
              itemId: Math.floor(Math.random() * 100),
              tumorId: this.state.tumor,
            })}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('HomeScreen')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
            onPress={this._onPressButton}
            title="Press for my name"
            color="#841584"
        />
        <Button
            onPress={this._onPressButton2}
            title="Calculate"
            color="#841584"
        />
        <Text>{'user input: ' + this.state.username 
			+ ' - ' + this.state.tumor 
			+ ' - ' + this.state.node 
			+ ' - ' + this.state.metastasis
			+ ' - ' + this.state.result}</Text>
	  </View>
    )
  }
};

export default Settings;
