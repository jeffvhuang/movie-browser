import React from "react";
import { ScrollView, View, Text, Image, Platform } from "react-native";
import { styles, movieStyles } from "../styles/styles";
import { movieData } from "../utils/mockData";
import { fetchMovieInfo } from "../utils/helpers";
import MovieProperty from "./MovieProperty";
import Icon from "react-native-vector-icons/Ionicons";

const icon = Platform.OS === "ios" ? "ios-search" : "md-search";

export default class MovieScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Movie Details",
      headerRight: (
        <Icon.Button
          name={icon}
          size={28}
          color="white"
          backgroundColor="steelblue"
          onPress={() => navigation.navigate("Home")}
        />
      )      
    }
  };

  state = {
    movie: {}
  };

  componentDidMount() {
    const id = this.props.navigation.getParam("id", "no-id-provided");
    this.getMovieInfo(id);
  }

  getMovieInfo = async id => {
    try {
      const result = await fetchMovieInfo(id);
      this.setState({ movie: result });
    } catch (error) {
      this.props.navigation.navigate('ErrorView', { error: "Oops, something went wrong!" });
    }
  };

  render() {
    const { movie } = this.state;

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
        {movie.Awards != "N/A" && (
          <MovieProperty label="Awards" value={movie.Awards} />
        )}
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
