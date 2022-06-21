import { useContext } from 'react';
import { useQuery } from 'react-query';
import { FilterContext } from '../context/filterContext';
import {
  Genre,
  Movie,
  MovieConfiguration,
  MovieDetails,
} from '../types/movies';
import apiFetch from '../utils/apiFetch';

export interface PaginatedResponse<T> {
  page: number;
  total_pages: number;
  total_results: number;
  results: T[];
}

// https://developers.themoviedb.org/3/discover/movie-discover
// https://developers.themoviedb.org/3/search/search-movies
export const useDiscoverMoviesQuery = (
  page = 1,
  withoutFilters: boolean = false,
) => {
  const { searchTerm } = useContext(FilterContext);
  const filters = withoutFilters ? {} : { searchTerm };

  return useQuery(
    ['movies', { page, ...filters }],
    async () => {
      if (searchTerm) {
        const movies = await apiFetch<PaginatedResponse<Movie>>(
          `/search/movie?query=${searchTerm}&page=${page}`,
          { method: 'GET' },
        );

        return movies;
      }

      const movies = await apiFetch<PaginatedResponse<Movie>>(
        `/discover/movie?page=${page}`,
        {
          method: 'GET',
        },
      );

      return movies;
    },
    { keepPreviousData: true },
  );
};

// https://developers.themoviedb.org/3/movies/get-movie-details
export const useMovieDetails = (movieId: number | undefined) => {
  return useQuery(
    ['movie', { movieId }],
    async () => {
      const movie = await apiFetch<MovieDetails>(`/movie/${movieId}`, {
        method: 'GET',
      });

      return movie;
    },
    {
      enabled: !!movieId,
    },
  );
};

// https://developers.themoviedb.org/3/configuration/get-api-configuration
export const useMovieConfiguration = () => {
  return useQuery('configuration', async () => {
    const movie = await apiFetch<MovieConfiguration>(`/configuration`, {
      method: 'GET',
    });

    return movie;
  });
};

export const useMovieGenres = () => {
  return useQuery('movieGenres', async () => {
    const movieGenres = await apiFetch<{ genres: Genre[] }>(
      `/genre/movie/list`,
      {
        method: 'GET',
      },
    );

    return movieGenres.genres;
  });
};
