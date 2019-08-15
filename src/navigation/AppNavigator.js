import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import HomeScreen from "../components/HomeScreen";
import MovieScreen from "../components/MovieScreen";
import ErrorScreen from "../components/ErrorScreen";

const AppStack = createStackNavigator(
  {
    Home: HomeScreen,
    Movie: MovieScreen
  },
  {
    initialRouteName: "Home",
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'steelblue'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
    },
  }
);

const ErrorStack = createStackNavigator({ ErrorView: ErrorScreen });

const AppNavigator = createSwitchNavigator(
  {
    App: AppStack,
    Error: ErrorStack,
  },
  {
    initialRouteName: 'App',
  }
);

export default AppNavigator;
