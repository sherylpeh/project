import React, {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';

const SigninScreen = ({navigation}) => {
  return <View>
	<Text style={{ fontSize: 48 }}>SigninScreen</Text>
	<Button title="Sign Up" 
		onPress={( ) => navigation.navigate('Profile')}
	/>
	</View>
};

const styles = StyleSheet.create({});

export default SigninScreen;