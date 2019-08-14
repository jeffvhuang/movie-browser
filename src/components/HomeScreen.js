import React from "react";
import { View, TextInput, FlatList } from "react-native";
import { styles } from "../styles/styles";
import { data } from "../utils/mockData";
import { OMDB_API_KEY } from '../utils/helpers';
import MovieListItem from "./MovieListItem";
import Btn from './Btn';
import ErrorView from './ErrorView';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Movie Search List',
  };

  state = {
    search: "",
    data: [],
    error: ''
  };

  onChange = value => {
    this.setState({ search: value });
  };

  onPressBtn = async () => {
    try {
      const search = this.state.search.replace(' ', '+').trim();
      const requestUrl = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${search}`;
      // const response = await fetch(encodeURI(requestUrl));
      // const result = await response.json();
      // console.log(result);
      // if (result.Error) throw new Error(result.Error);
      this.setState({ data: data.Search });
    } catch (error) {
      this.setState({ error: "Oops, something went wrong!" });
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
    if (this.state.error) return <ErrorView text={this.state.error} />

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
