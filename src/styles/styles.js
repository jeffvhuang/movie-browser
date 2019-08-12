import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  search: {
    flexDirection: 'row',
    justifyContent: "center"
  },
  searchInput: {
    width: '80%',
    borderWidth: 1,
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10
  },
  button: {
    borderWidth: 1,
    backgroundColor: 'gainsboro',
    padding: 5,
    width: '20%'
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center"
  },
  listItem: {
    height: 120,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  imageContainer: {

  },
  image: {
    height: 120,
    width: 100
  },
  textContainer: {
    flex: 1,
    paddingLeft: 10
  },
  itemText: {
    fontSize: 24,
    flexWrap: 'wrap',
    flexDirection: 'column',
    width: '100%',
    textAlign: 'left'
  },
  movieTitle: {
    fontSize: 26
  },
  movieYear: {
    fontSize: 20
  }
})