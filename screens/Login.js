import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Alert
} from 'react-native';
import {firebaseApp} from '../components/FirebaseConfig.js'



export default class Login extends Component<{}> {
	constructor(props){
			super(props);
			this.state = {
					email:'',
					password:'',
					errorMessage: null
			}
	}
	
	handleLogin() {
	  // TODO: Firebase stuff...
	  Alert.alert(this.state.email, this.state.password)
	  firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
	  .then(()=>{
			Alert.alert(
			  'Alert Title',
			  'Dang nhap thanh cong ' + this.state.email,
			  [
				
				{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
				{text: 'Go to Welcome', onPress:() => this.props.navigation.push('WelcomeScreen')},
			  ],
			  { cancelable: false }
			)  
			this.setState({
				email:'',
				password:''
			})
		})
	  .catch(function(error) {
		  Alert.alert(
			  'Alert Title',
			  'Dang nhap thatbai ' + this.state.email,
			  [
				{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
				{text: 'Dang nhap lai', onPress: () => console.log('Dang nhap lai')},
			  ],
			  { cancelable: false }
			) 
	  });
	  console.log('handleSignUp')
	}
	
	render() {
		return(
			<View style={styles.container}>
				<TextInput style={styles.inputBox} 
					underlineColorAndroid='rgba(0,0,0,0)'
					placeholder='Email'
					placeholderTextColor = 'gray'
					onChangeText={email => this.setState({ email })}
					value={this.state.email}
				/>
				<TextInput style={styles.inputBox} 
					underlineColorAndroid='rgba(0,0,0,0)'
					placeholder='Password'
					secureTextEntry={true}
					placeholderTextColor = 'gray'
					onChangeText={password => this.setState({ password })}
					value={this.state.password}
				/>
				<TouchableOpacity style={styles.button} onPress={()=>{this.handleLogin()}} >
					<Text style={styles.buttonText}>Login</Text>
					
				</TouchableOpacity>
				
				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>Sign Up</Text>
				</TouchableOpacity>


				
			</View>
			
		);
	}
}

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

