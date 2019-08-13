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
  row: {
    flexDirection: 'row'
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
  image: {
    height: 120,
    width: 100
  },
  movieListTextContainer: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10
  },
  textContainer: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row'
  },
  itemText: {
    fontSize: 24,
    flexWrap: 'wrap',
    flexDirection: 'column',
    width: '100%',
    textAlign: 'left'
  },
  movieTitle: {
    fontSize: 26,
    flexWrap: 'wrap',
    flexDirection: 'column',
    marginBottom: 10
  },
  movieYear: {
    fontSize: 20
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5
  },
  text: {
    fontSize: 16,
    flexWrap: 'wrap',
    flexDirection: 'column',
    marginBottom: 10
  },
  bold: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  errorView: {
    flex: 1,
    justifyContent: 'center'    
  },
  centerText: {
    textAlign: 'center',
    fontSize: 24,
    paddingLeft: 10,
    paddingRight: 10,
    flexWrap: 'wrap',
    flexDirection: 'column',
  }
})

export const movieStyles = StyleSheet.create({
  imageContainer: {
    marginBottom: 10
  },
  image: {
    width: 160,
    height: 240
  },
  mainInfo: {
    width: '60%',
    paddingLeft: 10,
    paddingRight: 10
  },
  spaced: {
    justifyContent: 'space-between'
  },
  sectionLabel: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 10,
    marginBottom: 10,
    marginTop: 10
  },
  plotText: {
    paddingRight: 10,
    paddingLeft: 10
  }
})