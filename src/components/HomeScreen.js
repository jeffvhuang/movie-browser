import React from "react";
import { View, TextInput, Text, FlatList } from "react-native";
import { styles } from "../styles/styles";
import { data } from "../utils/mockData";
import { OMDB_API_KEY } from '../utils/helpers';
import MovieListItem from "./MovieListItem";
import Btn from './Btn';

export default class HomeScreen extends React.Component {
  state = {
    search: "",
    data: [],
    err: ''
  };

  onChange = value => {
    this.setState({ search: value });
  };

  onPressBtn = async () => {
    try {
      const search = this.state.search.replace(' ', '+').trim();
      const requestUrl = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${search}`;
      console.log(requestUrl);
      const response = await fetch(requestUrl);
      const result = await response.json();
      console.log(result);
      this.setState({ data: result.Search });
    } catch (err) {
      console.log(err);
    }
  }

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
        <View style={styles.search}>
          <TextInput onChangeText={this.onChange} value={this.state.search} style={styles.searchInput} />
          <Btn onPress={this.onPressBtn} title='search' />
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
