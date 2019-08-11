import React from "react";
import { View, TextInput, Text, FlatList } from "react-native";
import { styles } from "../styles/styles";
import { data } from "../utils/mockData";
import MovieListItem from "./MovieListItem";

export default class HomeScreen extends React.Component {
  state = {
    search: "app",
    data: data.Search
  };

  onChange = value => {
    this.setState({ search: value });
  };

  renderListItem = ({ item }) => (
    <MovieListItem
      title={item.Title}
      year={item.Year}
      poster={item.Poster}
      id={item.imdbID}
      onPressItem={this.onPressItem}
    />
  );

  onPressItem = id => {
    // TODO navigate to next stack
    console.log(id);
  };

  keyExtractor = (item, index) => item.imdbID;

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput onChangeText={this.onChange} value={this.state.search} />
        </View>
        <FlatList
          data={this.state.data}
          extraData={this.state}
          renderItem={this.renderListItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}
