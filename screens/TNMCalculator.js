import React, { Component } from 'react';
import {Picker, SectionList, Alert, View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
//import TextField from 'material-ui/TextField';

export class TNMCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = { 
		username: 'Nhat',
		tumor: 'T1',
		node: 'N1',
		metastasis: 'M1',
		result: '-' ,
		dataSource: [],
		tumorData: [],
		testText:'',
		};
	
	
  }
  

  
  _onPressButton2(t,n,m) {
	//Dang sua de truyen bien vao
	var tumor = t
	var node = n
	var metastasis = m
	var result = "-"
	
	const tumorFromExcel = ["T1", "T1", "T2", "T2", "T3", "T4"];
    const nodeFromExcel = ["N1", "N1", "N2", "N2", "N3", "N4"];
    const metastasisFromExcel = ["M1", "M1", "M2", "M2", "M3", "M4"];
    const resultFromExcel = ["Stage1", "Stage1", "Stage2", "Stage2", "Stage3", "Stage4"];

	var i;
	result = "Stage4";
	for ( i=0; i < 4; i++) {
		if ((tumor == tumorFromExcel[i]) && (node == nodeFromExcel[i]) && (metastasis == metastasisFromExcel[i])) {
			result = resultFromExcel[i];
			result => this.setState({result}) ;
			
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
  
    componentDidMount(){
	  
      return fetch('https://api.myjson.com/bins/884q6')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          dataSource: responseJson.tnm,
          tumorData: responseJson.tnm.caseid,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
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
        
        <FormLabel>Tumor</FormLabel>
		<FormInput/>
		<FormLabel>Node</FormLabel>
		<FormInput/>
		<FormLabel>Matastasis</FormLabel>
		<FormInput/>
        
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
        <Picker
		  selectedValue={this.state.node}
		  style={{ height: 50, width: 300 }}
		  onValueChange={(itemValue, itemIndex) => this.setState({node: itemValue})}>
		  <Picker.Item label="N1-level 1" value="N1" />
		  <Picker.Item label="N2-level 2" value="N2" />
		</Picker>
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
		
        
        
        <Button
			style={styles.button}
            onPress={() => this._onPressButton2(this.state.tumor, this.state.node, this.state.metastasis)}
            title="Calculate"
        />
        <Text>{'user input: ' + this.state.username 
			+ ' - ' + this.state.tumor 
			+ ' - ' + this.state.node 
			+ ' - ' + this.state.metastasis
			+ ' - ' + this.state.result}</Text>
		<Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
			style={styles.button}
            onPress={this._onPressButton}
            title="Press for my name"
            color="#841584"
        />	
		<Button
          title="Go to TNM... again"
          onPress={() =>
            this.props.navigation.push('TNMScreen', {
              itemId: Math.floor(Math.random() * 100),
              tumorId: this.state.tumor,
            })}
        />
        <Button
			
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('HomeScreen')}
        />
	  </View>
    )
  }
};

export default TNMCalculator;

const styles = StyleSheet.create({
	container:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		
	},
	
	inputBox: {
		width: 300,
		backgroundColor:'rgba(255,255,255,0.3)',
		borderRadius: 25,
		paddingHorizontal:16,
		fontSize:16,
		color: 'gray',
		marginVertical:10,
	},
	
	button: {
		width:300,
		backgroundColor:'#1c313a',
		borderRadius: 25,
		marginVertical: 10,
		paddingVertical:12,
	},
	buttonText: {
		fontSize:16,
		fontWeight:'500',
		color:'#fff',
		textAlign:'center'
	},
	
});
