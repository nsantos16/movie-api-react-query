import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { Movie } from '../types/movies';

interface FilterContextValue {
  movieList: Movie[];
  addMovieList: (newMovie: Movie) => void;
}

export const MovieListContext = createContext<FilterContextValue>({
  movieList: [],
  addMovieList: () => {},
});

const LOCAL_STORAGE_KEY = 'movieListIds';

export const MovieListCtxProvider = ({
  children,
}: PropsWithChildren<Record<string, unknown>>) => {
  const [movieList, setMovieListState] = useState<Movie[]>([]);

  useEffect(() => {
    // Back to the first page every time a filter changes
    if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
      setMovieListState(
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) as string),
      );
    } else {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([]));
    }
  }, []);

  const addMovieList = (newMovie: Movie) => {
    if (!movieList.find(({ id }) => id === newMovie.id)) {
      const newMovieList = [...movieList, newMovie];
      setMovieListState(newMovieList);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newMovieList));
    }
  };

  const value = {
    movieList,
    addMovieList,
  };

  return (
    <MovieListContext.Provider value={value}>
      {children}
    </MovieListContext.Provider>
  );
};
