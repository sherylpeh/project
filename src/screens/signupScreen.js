import React, {useState, useContext} from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const signupScreen = ({ navigation }) => {
	const { state, signup } = useContext(AuthContext);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [dateOfBirth, setdateOfBirth] = useState('');
	const [gender, setGender] = useState('');
	const [zodiacSign, setZodiacSign] = useState('');
	
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for an Account</Text>
      </Spacer>
      <Input 
		label="Username" 
		value={username}
		onChangeText={setUsername}
		autoCapitalize="none"
        autoCorrect={false}
	  />
	  <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
	  <Input 
		label="Name" 
		value={name}
		onChangeText={setName}
		autoCapitalize="none"
        autoCorrect={false}
	  />
	  <Input 
		label="Date of Birth" 
		value={dateOfBirth}
		onChangeText={setdateOfBirth}
		autoCapitalize="none"
        autoCorrect={false}
	  />
	  <Input 
		label="Gender" 
		value={gender}
		onChangeText={setGender}
		autoCapitalize="none"
        autoCorrect={false}
	  />
	  <Input 
		label="Zodiac Sign" 
		value={zodiacSign}
		onChangeText={setZodiacSign}
		autoCapitalize="none"
        autoCorrect={false}
	  />
      <Spacer>
        <Button title="Sign Up" 
		onPress={( ) => signup({ username, password, name, dateOfBirth, gender, zodiacSign })}
		/>
      </Spacer>
    </View>
  );
};

signupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
	container: {
    flex: 1,
    justifyContent: 'center',
    
  },
});

export default signupScreen;