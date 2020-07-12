import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

	const ProfileScreen = ({ navigate }) => {
	const Username = navigate.getParam('username');
	
  return <View>
		<Text style={{ fontSize: 48 }}>ProfileScreen</Text>;
		<Text style={{ fontSize: 48 }}>${Username}</Text>;
	</View>
};

const styles = StyleSheet.create({});

export default ProfileScreen;