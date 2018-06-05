import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  AsyncStorage,
  ListView,
  TouchableOpacity,
  YellowBox 
} from 'react-native';
import {firebaseApp} from '../components/FirebaseConfig.js'

YellowBox.ignoreWarnings(['Setting a timer']);

export default class MBTITest extends Component {

  constructor(props) {
    super(props);
	this.itemRef = firebaseApp.database();
    this.state = {
			text:'',
			dataSource: new ListView.DataSource({rowHasChanged:(r1,r2) => r1 != r2}),
	}
    
  }
  
  nhapdulieu(){
		this.itemRef.ref('TrungtamKhoaPham').child('NgonNguLapTrinh').push({
			Laptrinh: this.state.text
		});
		this.setState({
				text: ''
		})
	}
	
	

  setDB(){
	this.itemRef.set({
			ReactNative:'khaigiang28/3',
			IOS: 'khaigiang15/2',
			Android:'khaigiang18/2'
	})
  }
  
  pushDB(){
	this.itemRef.ref('TrungTamDaoTaoLapTrinh').push({
			ReactNative:'khaigiang28/3',
			IOS: 'khaigiang15/2',
			Android:'khaigiang18/2'
	})
  }
  
  componentDidMount(){
	  this.listenForItems(this.itemRef);
	  
	}
	 
  listenForItems(itemRef){
		var item = [];
		this.itemRef.ref('TrungTamKhoaPham').child('NgonNguLapTrinh').on('child_added', (dataSnapshot)=>{
			items.push({
				name:dataSnapshot.val(),
				key: dataSnapshot.key
			});
			this.setState({
				dataSource: this.state.dataSource.cloneWithRows(items)
			});
		});
	}
  

  render() {
    return (
      <View style={styles.container}>
      
		<TouchableOpacity onPress = {()=>{this.setDB()}}>
			<Text>
				Set DB
			</Text>
		</TouchableOpacity>
        
		<TouchableOpacity onPress = {()=>{this.pushDB()}}>
			<Text>
				Push DB
			</Text>
		</TouchableOpacity>
		<TextInput
			onChangeText={(text) => this.setState({text})}
			value={this.state.text}
		/>
		<TouchableOpacity onPress = {()=>this.nhapdulieu()}>
			<Text>
				Nhap du lieu
			</Text>
		</TouchableOpacity>
        <Text>
			List view
        </Text>
		<ListView
			dataSource={this.state.dataSource}
			renderRow = {(rowData)=>
				<View>
					<Text>
						{rowData.name}
					</Text>
				</View>
				
			}
		/>
		
        


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  formInput: {
    paddingLeft: 5,
    height: 50,
    borderWidth: 1,
    borderColor: "#555555",
  },
  formButton: {
    borderWidth: 1,
    borderColor: "#555555",
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    marginTop: 5,
  },
});

AppRegistry.registerComponent('AsyncStorageExample', () => AsyncStorageExample);
