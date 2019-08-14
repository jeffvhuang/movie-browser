const OMDB_API_KEY = '6a02aaf';

export const fetchMovies = async search => {
  const requestUrl = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${search}`;
  const response = await fetch(encodeURI(requestUrl));
  const result = await response.json();

  if (result.Error) throw new Error(result.Error);
  else return result;
}

export const fetchMovieInfo = async id => {
  const requestUrl = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}`;
  const response = await fetch(encodeURI(requestUrl));
  const result = await response.json();
  
  if (result.Error) throw new Error(result.Error);
  else return result;
};