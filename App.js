/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Geolocation from 'react-native-geolocation-service';
import {Alert, TouchableOpacity} from 'react-native';

export default class App extends React.Component{
  state={
    location: null,
    lat:'',
    lon:''
  }
  findCoordinates = () =>{
    Geolocation.getCurrentPosition(
      (position) =>{
        Alert.alert("hello");
        console.log(position);
        const location = JSON.stringify(position);
        this.setState({ location });
      },
      (error) =>{
        console.log(error.code, error.message);
      },{
        enableHighAccuracy:true, timeout:15000, maximumAge:10000
      }
      );
    
  };

  render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity onPress={this.findCoordinates}>
					<Text style={styles.welcome}>Find My Coords?</Text>
					<Text>Location: {this.state.location}</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
  }
});
