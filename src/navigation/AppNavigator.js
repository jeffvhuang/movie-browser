import { createStackNavigator } from "react-navigation";
import HomeScreen from "../components/HomeScreen";
import MovieScreen from "../components/MovieScreen";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Movie: MovieScreen
  },
  {
    initialRouteName: "Home"
  }
);

export default AppNavigator;
