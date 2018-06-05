import React, { Component } from 'react';
import {Picker, SectionList, Alert, View, Text, Button, TextInput, FlatList, ActivityIndicator } from 'react-native';



export class AppData extends Component {
  
  
  
  render() {
	
    
      let articles = this.props.dataSource.map(function(item){
		return (
			<View>
			  <Text>
				{item.caseid}
			  </Text>
			</View>
		)  
	  })
	  
	   
      
    
  }
};

export default AppData;
