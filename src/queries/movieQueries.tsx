import { useQuery } from 'react-query';
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
export const useDiscoverMoviesQuery = (page = 1) => {
  return useQuery(
    ['movies', { page }],
    async () => {
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
