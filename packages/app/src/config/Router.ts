import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  NavigationContainer,
} from 'react-navigation'
import ChatList from '../screens/Chat/ChatsList'
import ChatScreen from '../screens/Chat/ChatScreen'
import AddChat from '../screens/Chat/AddChat'
import Login from '../screens/Login/Login'
import SignUp from '../screens/SignUp/SignUp'
import CallScreen from '../screens/Chat/CallScreen';

export const Routes = {
  Login: 'Login',
  SignUp: 'SignUp',
  ChatList: 'ChatList',
  ChatScreen: 'ChatScreen',
  CallScreen: 'CallScreen',
  AddChat: 'AddChat',
  Logged: 'Logged',
  NonLogged: 'NonLogged',
}

const Logged = createStackNavigator(
  {
    [Routes.ChatList]: ChatList,
    [Routes.ChatScreen]: ChatScreen,
    [Routes.CallScreen]: CallScreen,
    [Routes.AddChat]: AddChat,
  },
  {
    initialRouteName: Routes.ChatList,
    headerMode: 'none',
  },
)

const NonLogged = createStackNavigator(
  {
    [Routes.Login]: Login,
    [Routes.SignUp]: SignUp,
  },
  {
    initialRouteName: Routes.Login,
    headerMode: 'none',
  },
)

export const createRouter = (token: string): NavigationContainer =>
  createAppContainer(
    createSwitchNavigator(
      {
        [Routes.Logged]: Logged,
        [Routes.NonLogged]: NonLogged,
      },
      {
        initialRouteName: token ? Routes.Logged : Routes.NonLogged,
      },
    ),
  )
