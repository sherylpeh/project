import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import profileScreen from './src/screens/profileScreen';
import signinScreen from './src/screens/signinScreen';
import signupScreen from './src/screens/signupScreen';
import newsScreen from './src/screens/newsScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';


/*const navigator = createStackNavigator(
  {
    SignUp: signupScreen,
	SignIn: signinScreen,
	News: newsScreen,
	Profile: profileScreen,
  },
  {
    initialRouteName: 'SignUp',
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);*/

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: signupScreen,
    Signin: signinScreen,
  }),
  mainFlow: createSwitchNavigator({
    News: newsScreen,
    Profile: profileScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
