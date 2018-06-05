import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableHighlight, TouchableOpacity, ImageBackground, ScrollView,} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Stars from 'react-native-stars-rating';
import {SearchBar, ListItem, Avatar, Rating} from 'react-native-elements';
import {Svg, Rect, Defs, ClipPath, Circle, Path, G,} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

const styles = StyleSheet.create({
	container:{
		backgroundColor: '#FAF8F8',
		flex: 1,
		flexDirection: 'column',
	},
	header:{
		height: 250,
		flexDirection: 'column',
		top: 25,
		backgroundColor: '#fff',
		elevation: 3,
	},
	page: {
		flex: 1,
		marginVertical: 5,
		backgroundColor: '#fffa',
	},
	pageTitle:{
		width: '100%',
		fontSize: 23,
		textAlign: 'center',
		color: '#000',
		marginVertical: 10,
	},
	topIcon: {
		flex: 1,
		alignItems: 'center',
		paddingVertical: 12,
	},
	topBar: {
		flex: 1,
		flexDirection: 'row',
	},
	avtCover: {
		flex: 3,
		flexDirection: 'column',
	},
	infoSpace: {
		flex: 1,
	},
	info: {
		flexDirection: 'row',
	},
	nameInfo: {
		marginVertical: 15,
		flexDirection: 'column',
		paddingLeft: 130,
		paddingTop: 5,
		width: '100%',
		backgroundColor: '#000000b0',
		height: 80,
	},
	name: {
		fontSize: 25,
		color: '#fff',
		fontWeight: '600',
		marginBottom: 5,
	},
	job: {
		fontSize: 18,
		color: '#fff',
		fontStyle: 'italic',
	},
	avt: {
		height: 90,
		width: 90,
		borderRadius: 45,
		marginLeft: 20,
		marginVertical: 10,
		position: 'absolute',
	},
	settingBtn: {
		flex: 1,
		top: 12,
		alignItems:'center',
	},
	menu: {
		height: 50,
		flexDirection: 'row',
		borderTopWidth: 0.5,
		borderTopColor: '#3c3c3c',
		backgroundColor: '#fff',
	},
	subMenu: {
		flex: 1,
	},
	subMenuTitle: {
		fontSize: 18,
		textAlign: 'center',
		color: '#A0A0A0',
		lineHeight: 50,
	},
	subMenuTitleActive: {
		color: '#8AB7F5',
	},
	body: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
	},
	bodyBgr: {
		flex: 1,
		flexDirection: 'column',
		width: '100%',
		alignItems: 'center',
		marginTop: 30,
	},
	appBtn: {
		flex: 1,
		flexWrap: 'nowrap',
		width: 380,
	},
	subtitleView: {
		marginLeft: 10,
		marginTop: 5, 
	}

});
	
const appList = [
	{
		appId: 'app01',
		name: 'Kiểm tra chỉ số TNM',
		avatar_url: require('../icons/icon-app-1.png'),
		rate: 5,
		description: 'Nhập vào chỉ số T, N, M để kiểm tra tình trạng sức khỏe của bạn',
		appScreen: 'TNMScreen'
	},
	{
		appId: 'app02',
		name: 'Đo chỉ số Contact Lens',
		avatar_url: require('../icons/icon-app-2.png'),
		rate: 5,
		description: 'Nhập vào các chỉ số thị giác để tính kích thước Contact Lens phù hợp',
		appScreen: 'LensScreen'
	},
	{
		appId: 'app03',
		name: 'Theo dõi sức khỏe',
		avatar_url: require('../icons/icon-app-3.png'),
		rate: 4,
		description: 'Nhập vào chỉ số như huyết áp, đường huyết,... để theo dõi sức khỏe của bạn',
		appScreen: 'HealthTrackerScreen'
	},
	{
		appId: 'app04',
		name: 'Rèn luyện trí não',
		avatar_url: require('../icons/icon-app-4.png'),
		rate: 5,
		description: 'Các trò chơi giúp tăng cường trí não, giảm thiểu suy giảm trí nhớ',
		appScreen: 'LoginScreen'
	},
	{
		appId: 'app05',
		name: 'TNMReader',
		avatar_url: require('../icons/icon-app-4.png'),
		rate: 5,
		description: 'Các trò chơi giúp tăng cường trí não, giảm thiểu suy giảm trí nhớ',
		appScreen: 'TNMScreen'
	},
	{
		appId: 'app06',
		name: 'SignupScreen',
		avatar_url: require('../icons/icon-app-4.png'),
		rate: 5,
		description: 'Các trò chơi giúp tăng cường trí não, giảm thiểu suy giảm trí nhớ',
		appScreen: 'SignupScreen'
	},
	{
		appId: 'app07',
		name: 'Excel2jsonScreen',
		avatar_url: require('../icons/icon-app-4.png'),
		rate: 5,
		description: 'Các trò chơi giúp tăng cường trí não, giảm thiểu suy giảm trí nhớ',
		appScreen: 'Excel2jsonScreen'
	},
	{
		appId: 'app08',
		name: 'MBTITestScreen',
		avatar_url: require('../icons/icon-app-4.png'),
		rate: 5,
		description: 'Các trò chơi giúp tăng cường trí não, giảm thiểu suy giảm trí nhớ',
		appScreen: 'MBTITestScreen'
	},
	{
		appId: 'app09',
		name: 'LoadingScreen',
		avatar_url: require('../icons/icon-app-4.png'),
		rate: 5,
		description: 'Các trò chơi giúp tăng cường trí não, giảm thiểu suy giảm trí nhớ',
		appScreen: 'LoadingScreen'
	},
	{
		appId: 'app10',
		name: 'AlzheimerTestScreen',
		avatar_url: require('../icons/icon-app-4.png'),
		rate: 5,
		description: 'Các trò chơi giúp tăng cường trí não, giảm thiểu suy giảm trí nhớ',
		appScreen: 'AlzheimerTestScreen'
	},
	{
		appId: 'app11',
		name: 'WelcomeScreen',
		avatar_url: require('../icons/icon-app-4.png'),
		rate: 5,
		description: 'Các trò chơi giúp tăng cường trí não, giảm thiểu suy giảm trí nhớ',
		appScreen: 'WelcomeScreen'
	},
	
	
	
	
]

export default class Home extends Component {
  render() {
	  
    return (
      <View style = {styles.container}>
		<View style = {styles.header}>
			<View style={styles.topBar}>
				<View style ={styles.topIcon}>
					<Icon name="home" size={35} color={'#60a1d7'}/>
				</View>
				<SearchBar
					searchIcon={{size: 50}}
					round={true}
					containerStyle={{
						flex:4, 
						backgroundColor: '#fff', 
						borderBottomWidth: 0, 
						borderTopWidth: 0,
						top: 4,
					 }}
					inputStyle={{
						backgroundColor: '#fff',
						borderWidth: 0.5,
						borderColor: '#eee',
					}}
					placeholder='Tìm kiếm...' />
				<TouchableOpacity style = {styles.settingBtn} onPress={() => this.props.navigation.push('SettingScreen')}>
					<Icon name="settings" size={35} color={'#3c3c3c'}/>
				</TouchableOpacity>
			</View>
			<ImageBackground style={styles.avtCover} source={require('../images/cover/user-1.jpg')}>

				<View style={styles.infoSpace}>
				</View>
				<View style={styles.info}>
					<View style={styles.nameInfo}>
						<Text style={styles.name}>Nguyễn An Ninh</Text>
						<Text style={styles.job}>Chủ phòng Gym</Text>
					</View>
					<Image style={styles.avt} source ={require('../images/avt/user-1.jpg')}>
					</Image>
				</View>
			</ImageBackground>
			
			
		</View>
		
		
		<View style = {styles.body}>
			<ImageBackground style={styles.bodyBgr} source={require('../images/background-img.png')} blurRadius={3}>
				<ScrollView showsVerticalScrollIndicator={false}>
					
					<View style ={styles.appBtn} >
						<View >
							{
								appList.map((l,i) => (
									<ListItem
										key={i}
										avatar={<Avatar rounded source={ l.avatar_url } size={80} height={80}/>}
										onPress={() => this.props.navigation.push(l.appScreen)}
										title={l.name}
										titleStyle={{fontSize: 20,}}
										subtitle={
											<View style={styles.subtitleView}>
												<Stars
													isActive={true}
													rateMax={5}
													isHalfStarEnabled={true}
													onStarPress={(rating) => console.log(rating)}
													rate={l.rate}
													size={15}
												/>
												<Text numberOfLines= {1} style={{color: '#848484', marginTop: 5, fontSize: 15,}}>{l.description}</Text>
											</View>
										}
										containerStyle={{height: 100,}}
										contentContainerStyle={{height: 100, paddingVertical: 5,}}
										chevronColor={'#3c3c3c'}
									/>
								))
							}
						</View>
						<View style={styles.chartBoard}>
					
						</View>
					</View>
				</ScrollView>
			</ImageBackground>
		</View>	
		<View style = {styles.menu}>
			<View style = {styles.subMenu}>
				<Text style = {styles.subMenuTitle} >Theo dõi</Text>
			</View>
			<View style = {styles.subMenu}>
				<Text style = {styles.subMenuTitle}>Test 2</Text>
			</View>
			<View style = {styles.subMenu}>
				<Text style = {styles.subMenuTitle}>Test 3</Text>
			</View>
			<View style = {styles.subMenu}>
				<Text style = {styles.subMenuTitle}>Test 4</Text>
			</View>
			<Button
          title="Go to Setting"
          onPress={() => this.props.navigation.push('SettingScreen')}
		/>
		<Button
          title="Go to TNMReader"
          onPress={() => this.props.navigation.push('TNMScreen')}
		/>
		<Button
          title="Go to Lens"
          onPress={() => this.props.navigation.push('LensScreen')}
		/>
		<Button
          title="Go to HealthTracker"
          onPress={() => this.props.navigation.push('HealthTrackerScreen')}
		/>
		<Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="Go to Login"
          onPress={() => this.props.navigation.push('LoginScreen')}
		/>
		<Button
          title="Go to Signup"
          onPress={() => this.props.navigation.push('SignupScreen')}
		/>
		<Button
          title="Go to Loading"
          onPress={() => this.props.navigation.push('LoadingScreen')}
		/>
		<Button
          title="Go to AlzheimerTestScreen"
          onPress={() => this.props.navigation.push('AlzheimerTestScreen')}
		/>
		<Button
          title="Go to WelcomeScreen"
          onPress={() => this.props.navigation.push('WelcomeScreen')}
		/>
		<Button
          title="Go to MBTITestScreen"
          onPress={() => this.props.navigation.push('MBTITestScreen')}
		/>
		
		<Button
          title="Go to Excel2jsonScreen"
          onPress={() => this.props.navigation.push('Excel2jsonScreen')}
		/>
		
		
		
		</View>
		

      </View>
      
    )
  }
}


