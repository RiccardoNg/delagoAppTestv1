import React, { Component } from 'react';
import {Picker, SectionList, Alert, View, Text, TextInput } from 'react-native';
import { Avatar, ListItem, Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  ]
  
export class Lens extends Component {
  constructor(props) {
    super(props);
    this.state = { 
		username: 'Nhat',
		tumor: 'T1',
		node: 'N1',
		metastasis: 'M1',
		result: '-' 
		};
  };
  
  
  
  render() {
	
    return (
      <View>
        
        <Text>This is the Lens screen</Text>
         
         

<FormLabel>Name</FormLabel>
<FormInput/>
<FormValidationMessage>Error message</FormValidationMessage>

		  <Button
  large
  rounded
  iconRight={{name: 'code'}}
  title='LARGE WITH RIGHT ICON' />

<Button
  large
  rounded
  icon={{name: 'envira', type: 'font-awesome'}}
  title='LARGE WITH ICON TYPE' />
		<View>
		{
			list.map((l, i) => (
			  <ListItem
				key={i}
				avatar={<Avatar
				  rounded
				  source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' }}
				  title={l.name[ 0 ]} />
				}
				title={l.name}
				subtitle={l.subtitle}
			  />
			))
		  }
		  </View>
	  </View>
    )
  }
};

export default Lens;
