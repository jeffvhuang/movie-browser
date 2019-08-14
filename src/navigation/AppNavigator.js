import { createStackNavigator } from "react-navigation";
import HomeScreen from "../components/HomeScreen";
import MovieScreen from "../components/MovieScreen";

const AppNavigator = createStackNavigator(
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

export default AppNavigator;
