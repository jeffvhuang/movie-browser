import React from "react";
import { View, TextInput, Text } from "react-native";
import { styles } from "../styles/styles";

export default class HomeScreen extends React.Component {
  state = {
    search: "app"
  };

  onChange = value => {
    this.setState({ search: value });
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput onChangeText={this.onChange} value={this.state.search} />
          <View>
            <Text>{this.state.search}</Text>
          </View>
        </View>
      </View>
    );
  }
}
