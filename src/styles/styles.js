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
    width: '70%',
    borderWidth: 1,
    fontSize: 20
  },
  button: {
    borderWidth: 1,
    backgroundColor: 'gainsboro',
    padding: 5,
    // width: '20%'
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center"
  },
  listItem: {
    height: 200,
    flexDirection: 'row'
  },
  imageContainer: {

  },
  image: {
    height: 100,
    width: 100
  },
  itemText: {
    fontSize: 24
  }
})