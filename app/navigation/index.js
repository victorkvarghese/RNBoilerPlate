import { StackNavigator } from 'react-navigation';

import LoginScreen from '@screens/LoginScreen';
import MainScreen from '@screens/MainScreen';

const RNBoilerApp = StackNavigator({
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: { header: null, gesturesEnabled: false }
    },
    MainScreen: {
        screen: MainScreen,
        navigationOptions: { header: null, gesturesEnabled: false }
    }
});

export default RNBoilerApp;
