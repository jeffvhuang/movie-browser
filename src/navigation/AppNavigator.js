import { createStackNavigator } from "react-navigation";
import HomeScreen from "../components/HomeScreen";

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

export default AppNavigator;
