import React, { Component } from 'react';
import {StyleSheet, Picker, SectionList, Alert, View, Text, Button, TextInput, Image, TouchableOpacity, ImageBackground, ScrollView, } from 'react-native';
import {SearchBar, ListItem, Avatar, Rating} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {LinearGradient, Defs, Stop, G, Rect, Circle, Line, Svg, ClipPath, } from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';
import {VictoryAxis, VictoryBar, VictoryChart, VictoryTheme, VictoryLine, VictoryTooltip, VictoryVoronoiContainer, VictoryLabel, VictoryScatter, Flyout} from 'victory-native';
import * as shape from 'd3-shape';
import * as scale from 'd3-scale';
import DatePicker from 'react-native-datepicker';



const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
	},
  header:{
		height: 150,
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
		height: 60,
		flexDirection: 'row',
	},
	avtCover: {
		height: 100,
		flexDirection: 'column',
	},
	infoSpace: {
		flex: 1,
	},
	info: {
		flexDirection: 'row',
	},
	nameInfo: {
		flexDirection: 'column',
		paddingTop: 10,
		paddingLeft: 130,
		height: 100,
		width: '100%',
		backgroundColor: '#000000b0',
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
		position: 'absolute',
	},
	settingBtn: {
		flex: 1,
		top: 12,
		alignItems:'center',
	},
	chartTime: {
		height: 50,
		width: '100%',
		alignItems:'center',
		justifyContent: 'center',
		backgroundColor: '#eee',
	},
  body: {
		flex: 1,
		marginTop: 20,
		backgroundColor: '#fff',
	},
});

export class HealthTrackerGraph extends Component {
  constructor(props){
    super(props)
    this.state = {date:"29-05-2018"}
  }


  render() {
    return (
			<ScrollView>
      <View style={styles.container}>
				<Svg width={420} height={850}>
					<Defs>
						<LinearGradient id='gradient1' x1='0' y1='0' x2='100%' y2='0'>
							<Stop offset='0' stopColor="#76F69C" stopOpacity="1" />
            				<Stop offset="1" stopColor="#E99DD9" stopOpacity="1" />
						</LinearGradient>
						<LinearGradient id='gradient2' x1='0' y1='0' x2='0' y2='100%'>
							<Stop offset='0' stopColor="#9CBCEE" stopOpacity="1" />
							<Stop offset="1" stopColor="#fff" stopOpacity="0" />
						</LinearGradient>
						<LinearGradient id='gradient3' x1='0' y1='0' x2='0' y2='100%'>
							<Stop offset='0' stopColor="#fff" stopOpacity="0" />
							<Stop offset="1" stopColor="#9CBCEE" stopOpacity="1" />
						</LinearGradient>
					</Defs>
					<Defs>
						<ClipPath id='clip-avt'>
							<Circle cx='87%' cy='75' r='20' />
						</ClipPath>
					</Defs>
					<Rect x='0' y='0' width={420} height={850} fill='#fff' />
					<Rect x='0' y='0' width={420} height={850} fill='url(#gradient1)' fillOpacity='1' />
					<Rect x='0' y='0' width={420} height={425} fill='url(#gradient2)' fillOpacity='0.82' />
					<Rect x='0' y='425' width={420} height={425} fill='url(#gradient3)' fillOpacity='0.82' />
					<G>
						<Circle cx='87%' cy='75' r='25' fill='#fff' fillOpacity='0.5' />
						<SvgImage 
							x='81%' 
							y='50' 
							width='50' 
							height='50' 
							href={require('../images/avt/user-1.jpg')}
							clipPath='url(#clip-avt)'
						/>
					</G>
					<SvgText 
						fill='#fff' fontSize='25' 
						x='50%' y='150' 
						textAnchor='middle'
					>
					KẾT QUẢ ĐO HUYẾT ÁP
					</SvgText>
					<G width={420} height={400} x='0' y='170' >
						<VictoryChart
								standalone={false}
								theme={VictoryTheme.material}
								width={420}
								height={400}
								domainPadding={{ x: 25 }}
								scale={{ x: "time" }}
								containerComponent={<VictoryVoronoiContainer/>}
							>
							<VictoryAxis 
								tickFormat={(t) => `${t.getDate()}/${t.getMonth()}`}
								style={{
									axis: {stroke: '#fff',},
									tickLabels: {fill: '#fff', fontSize: 15, fontWeight: 'bold'}
								}}
							/>
							<VictoryAxis dependentAxis domain={{
								y: [50, 150]
								}}
								style={{
									axis: {stroke: '#fff'},
									tickLabels: {fill: '#fff', fontSize: 15, fontWeight: 'bold'}
								}}
							/>
							<VictoryBar
								data={[
									{x: new Date(2018, 6, 1), y0: 55, y: 110, },
									{x: new Date(2018, 6, 2), y0: 60, y: 115, },
									{x: new Date(2018, 6, 3), y0: 65, y: 120,},
									{x: new Date(2018, 6, 4), y0: 70, y: 110, },
									{x: new Date(2018, 6, 5), y0: 80, y: 115,}
								]}
								cornerRadius={5}
								style={{
									data: {fill: '#F87373', width: 10,}
								}}
							/>
							<VictoryLine 
								style={{
									data: {stroke:'#fff'},
									
								}}
								data={[
									{ x: new Date(2018, 6, 1), y: 110 },
									{ x: new Date(2018, 6, 2), y: 115 },
									{ x: new Date(2018, 6, 3), y: 120 },
									{ x: new Date(2018, 6, 4), y: 110 },
									{ x: new Date(2018, 6, 5), y: 115 }
								]}
							/>
							<VictoryScatter 
								labelComponent={
									<VictoryTooltip 
										renderInPortal={false}
										flyoutComponent={<Flyout x={210} y={100} />}
										flyoutStyle={{
											stroke: 'none',
											fillOpacity: 0 
										}}
										labelComponent={<VictoryLabel x={210} y={10} />}
										style={{fontSize: 20, fill: '#fff',}}
										width={150} height={50}
										pointerLenght={0}
									/>}
								labels={(datum) => `${datum.y} mmHg`}
								data={[
									{ x: new Date(2018, 6, 1), y: 110,  },
									{ x: new Date(2018, 6, 2), y: 115,  },
									{ x: new Date(2018, 6, 3), y: 120,  },
									{ x: new Date(2018, 6, 4), y: 110,  },
									{ x: new Date(2018, 6, 5), y: 115,  },
								]}
								style={{
									data: {fill: '#fff'}
								}}
								size={5}
							/>
						</VictoryChart>
					</G>
					<View x='350' y='12'>
						<Icon name="home" size={35} color={'#60a1d7'}/>
					</View>
				</Svg>
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
          <View style={styles.avtCover}>
            <View style={styles.info}>
              <View style={styles.nameInfo}>
                <Text style={styles.name}>Nguyễn An Ninh</Text>
                <Text style={styles.job}>Chủ phòng Gym</Text>
              </View>
              <Image style={styles.avt} source ={require('../images/avt/user-1.jpg')}>
              </Image>
            </View>
          </View>
          
        </View>
        <View style={styles.body}>
					<View style={styles.chartTitle}>
							<Text style={{ marginVertical: 10, paddingTop: 15, fontSize: 22, textAlign:'center', }}>KẾT QUẢ ĐO HUYẾT ÁP</Text>
					</View>
					<View style={styles.chartTime}>
						<DatePicker
							style={{width: 100}}
							showIcon={false}
							date={this.state.date}
							mode="date"
							placeholder="select date"
							format="DD-MM-YYYY"
							minDate="02-04-1991"
							maxDate="02-04-3000"
							confirmBtnText="Confirm"
							cancelBtnText="Cancel"
							onDateChange={(date) => {this.setState({date: date})}}
						/>
					</View>
					<View style={{ padding: 10, flexDirection: 'row',}}>
							<VictoryChart
								theme={VictoryTheme.material}
								domainPadding={{ x: 25 }}
								scale={{ x: "time" }}
								containerComponent={<VictoryVoronoiContainer/>}
							>
							<VictoryAxis tickFormat={(t) => `${t.getDate()}/${t.getMonth()}`}/>
							<VictoryAxis dependentAxis domain={{
								y: [50, 150]
							}}/>
							<VictoryBar
								data={[
									{x: new Date(2018, 6, 1), y0: 55, y: 110, },
									{x: new Date(2018, 6, 2), y0: 60, y: 115, },
									{x: new Date(2018, 6, 3), y0: 65, y: 120,},
									{x: new Date(2018, 6, 4), y0: 70, y: 110, },
									{x: new Date(2018, 6, 5), y0: 80, y: 115,}
								]}
								style={{
									data: {fill: '#74e8fc', width: 10, borderRadius: 5,}
								}}
							/>
							<VictoryLine 
								style={{
									data: {stroke:'url(#myGradient)'},
									
								}}
								labelComponent={<VictoryTooltip/>}
								data={[
									{ x: new Date(2018, 6, 1), y: 110 },
									{ x: new Date(2018, 6, 2), y: 115 },
									{ x: new Date(2018, 6, 3), y: 120 },
									{ x: new Date(2018, 6, 4), y: 110 },
									{ x: new Date(2018, 6, 5), y: 115 }
								]}
							/>
							</VictoryChart>

					</View>
        </View>
	    </View>
			</ScrollView>
    )
  }
};

export default HealthTrackerGraph;
