import React from "react";
import { Text, View, Button } from "react-native";
import { styles } from '../styles/styles';

export default class ErrorScreen extends React.Component {  
  static navigationOptions = {
    title: 'Error',
    headerStyle: {
      backgroundColor: 'red'
    },
    headerTintColor: '#fff'
  };

  render() {
    return (
      <View style={styles.errorView}>
        <Text style={[styles.centerText, styles.errorText]}>Oops, something went wrong!</Text>
        <View style={styles.errorBtnView}>
          <Button
            onPress={() => this.props.navigation.navigate('Home')}
            title="Go To Search"
            color="steelblue"
          />          
        </View>
        <View></View>
      </View>
    )
  }
}
