import { useContext } from 'react';
import { MovieListContext } from '../context/movieListContext';

const useAddMovieToMyList = () => {
  const { addMovieList } = useContext(MovieListContext);

  return { addMovieToMyList: addMovieList };
};

export default useAddMovieToMyList;
