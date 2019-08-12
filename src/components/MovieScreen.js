import React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import { styles } from "../styles/styles";
import { movieData } from "../utils/mockData";
import { OMDB_API_KEY } from '../utils/helpers';

export default class MovieScreen extends React.Component {
  state = {
    movie: {},
    err: ''
  };

  componentDidMount() {
    const id = this.props.navigation.getParam('movieId', 'no-id-provided');
    this.fetchMovieInfo(id);
  }

  fetchMovieInfo = async id => {
    try {
      const requestUrl = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}`;
      const response = await fetch(encodeURI(requestUrl));
      const result = await response.json();
      console.log('result for movie', result);
      this.setState({ movie: result });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const { movie } = this.state;

    if (!movie.hasOwnProperty('Title')) return <View></View>

    return (
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: movie.Poster}} />
        </View>
        <View style={styles.textContainer}>
          <Text>{movie.Title}</Text>
          <Text>{movie.Year}</Text>
          <Text>{movie.Rated}</Text>
          <Text>{movie.Released}</Text>
          <Text>{movie.Runtime}</Text>
          <Text>{movie.Genre}</Text>
          <Text>{movie.Director}</Text>
          <Text>{movie.Writer}</Text>
          <Text>{movie.Actors}</Text>
          <Text>{movie.Language}</Text>
          <Text>{movie.Country}</Text>
          <Text>{movie.Awards}</Text>
        </View>
        <View>
          <Text>{movie.Plot}</Text>
        </View>
        <View>
          {movie.Ratings.map((rating, index) => {
            return (
              <View key={movie.imdbID + '-' + index}>
                <Text>{rating.Source}</Text>
                <Text>{rating.Value}</Text>
              </View>
            );
          })}
        </View>
        <View style={styles.textContainer}>
          <Text>{movie.Metascore}</Text>
          <Text>{movie.imdbRating}</Text>
          <Text>{movie.imdbVotes}</Text>
          <Text>{movie.BoxOffice}</Text>
        </View>
      </ScrollView>
    );
  }
}
