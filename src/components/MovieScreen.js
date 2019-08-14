import React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import { styles, movieStyles } from "../styles/styles";
import { movieData } from "../utils/mockData";
import { OMDB_API_KEY } from "../utils/helpers";
import MovieProperty from "./MovieProperty";
import ErrorView from './ErrorView';

export default class MovieScreen extends React.Component {
  static navigationOptions = {
    title: 'Movie Details'
  };

  state = {
    movie: {},
    error: ""
  };

  componentDidMount() {
    const id = this.props.navigation.getParam("id", "no-id-provided");
    console.log(id);
    this.fetchMovieInfo(id);
  }

  fetchMovieInfo = async id => {
    try {
      const requestUrl = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}`;
      const response = await fetch(encodeURI(requestUrl));
      const result = await response.json();
      console.log("result for movie", result);
      if (result.Error) throw new Error(result.Error);
      this.setState({ movie: result });
    } catch (error) {
      this.setState({ error: "Oops, something went wrong!" });
    }
  };

  render() {
    const { movie, error } = this.state;

    if (error) return <ErrorView text={error} />
    if (!movie.hasOwnProperty("Title")) return <View />;

    return (
      <ScrollView>
        <View style={styles.row}>
          <View style={movieStyles.imageContainer}>
            <Image style={movieStyles.image} source={{ uri: movie.Poster }} />
          </View>
          <View style={movieStyles.mainInfo}>
            <Text style={styles.movieTitle}>
              {movie.Title} ({movie.Year} film)
            </Text>
            <Text style={styles.text}>
              <Text style={styles.label}>Directed By: </Text>
              {movie.Director}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.label}>Starring: </Text>
              {movie.Actors}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.label}>Rated: </Text>
              {movie.Rated}
            </Text>
          </View>
        </View>
        <MovieProperty label="Released" value={movie.Released} />
        <MovieProperty label="Runtime" value={movie.Runtime} />
        <MovieProperty label="Genre" value={movie.Genre} />
        <MovieProperty label="Languages" value={movie.Language} />
        <MovieProperty label="Country" value={movie.Country} />
        {(movie.Awards != 'N/A') && <MovieProperty label="Awards" value={movie.Awards} />}
        <MovieProperty label="BoxOffice" value={movie.BoxOffice} />
        <View style={styles.plot}>
          <Text style={movieStyles.sectionLabel}>Plot</Text>
          <Text style={[styles.text, movieStyles.plotText]}>{movie.Plot}</Text>
        </View>
        <View>
          <Text style={movieStyles.sectionLabel}>Ratings</Text>
          {movie.Ratings.map((rating, index) => {
            return (
              <MovieProperty
                key={movie.imdbID + "-" + index}
                label={rating.Source}
                value={rating.Value}
              />
            );
          })}
        </View>
        <MovieProperty label="IMDb Rating" value={movie.imdbRating} />
        <MovieProperty label="IMDb Votes" value={movie.imdbVotes} />
      </ScrollView>
    );
  }
}
