import React, { Component } from 'react';
import {Picker, SectionList, Alert, View, Text, Button, TextInput, FlatList, ActivityIndicator } from 'react-native';
import AppData from './AppData';


export class Setting extends Component {
  
  
	  
  constructor(props){
    super(props);
    this.state ={ 
		isLoading: true,
		dataSource: [],
		tumorData: [],
		currentCaseid: 'no',
		currentT:'',
		currentN:'',
		currentM:'',
		currentStage:'',
		}
  }

  getData(){
	return fetch('https://api.myjson.com/bins/884q6')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.tnm,
          tumorData: responseJson.tnm.caseid,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });  
  }
  
  componentDidMount(){
	  
      this.getData();
  }
  
  render() {
	
	  //return(
		//<AppData dataSource = {this.state.dataSource}/>
	  
	  //);
		
      if(this.state.isLoading){
		return(
			<View style={{flex: 1, padding: 20}}>
			  <ActivityIndicator/>
			</View>
		  );
		}

		return(
		  <View style={{flex: 1, paddingTop:20}}>
			
			<Text>
			abc</Text>
			<Text>
			{this.state.currentItem}
			</Text>
			
			<FlatList
			  data={this.state.dataSource}
			  renderItem={({item}) => 
				  <Text>
				  {this.state.currentCaseid = item.caseid}, 
				  {this.state.currentT = item.T},
				  {this.state.currentN = item.N},
				  {this.state.currentM = item.M},
				  {this.state.currentStage = item.Stage}
				  </Text>
			  }
			  keyExtractor={(item, index) => index}
			  
			/>
			
			
			
		  </View>
		);
    
  }
};

export default Setting;
