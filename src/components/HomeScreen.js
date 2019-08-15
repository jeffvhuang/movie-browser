import React from "react";
import { View, TextInput, FlatList } from "react-native";
import { styles } from "../styles/styles";
import { data } from "../utils/mockData";
import { fetchMovies } from '../utils/helpers';
import MovieListItem from "./MovieListItem";
import Btn from './Btn';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Movie Search List',
  };

  state = {
    search: "",
    data: []
  };

  onChange = value => {
    this.setState({ search: value });
  };

  getMovies = async () => {
    try {
      const search = this.state.search.replace(' ', '+').trim();
      const result = await fetchMovies(search);
      this.setState({ data: result.Search });
    } catch (error) {
      this.props.navigation.navigate('ErrorView', { error: "Oops, something went wrong!" });
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

  onPressItem = id => this.props.navigation.navigate('Movie', { id });

  keyExtractor = (item, index) => item.imdbID;

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.search}>
          <TextInput onChangeText={this.onChange} value={this.state.search} style={styles.searchInput} />
          <Btn onPress={this.getMovies} title='search' />
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
