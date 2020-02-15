import {AppRegistry,StatusBar} from 'react-native';
import App from './App';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Headlines from './src/pages/Headlines';
import NewsWebView from './src/pages/NewsWebView';
import Login from './src/pages/Login';
import Register from './src/pages/Register'
import {name as appName} from './app.json';


const navigationConfig = {
    initialRouteName: 'Register',
    defaultNavigationOptions: {
      title: ' Haber Uygulamasına Hoşgeldiniz',
      headerStyle: {
        backgroundColor:'#6666CC',
      },
      headerTintColor: '#FFF',
      headerTitleStyle: {
        fontFamily: Platform.OS === 'ios' ? 'Futura' : 'Roboto',
      },
    },
  }
   
  StatusBar.setBarStyle('light-content', true);
const MainNavigator = createStackNavigator({
    Home: { screen: App },
    Headlines: { screen: Headlines },
    NewsWebView: { screen: NewsWebView },
    Login: { screen: Login },
    Register:{screen:Register},
  }, navigationConfig);
   
const MainContainer = createAppContainer(MainNavigator);
AppRegistry.registerComponent(appName, () => MainContainer);
