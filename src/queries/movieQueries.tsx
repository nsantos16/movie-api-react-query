import { useQuery } from 'react-query';
import apiFetch from '../utils/apiFetch';

export interface PaginatedResponse<T> {
  page: number;
  total_pages: number;
  total_results: number;
  results: T[];
}
export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Genre {
  id: number;
  name: string;
}
export interface MovieDetails extends Movie {
  runtime: number;
  genres: Genre[];
}

export interface MovieConfiguration {
  images: {
    base_url: string;
    secure_base_url: string;
    backdrop_sizes: string[];
    logo_sizes: string[];
    poster_sizes: string[];
    profile_sizes: string[];
    still_sizes: string[];
  };
}

// https://developers.themoviedb.org/3/discover/movie-discover
export const useDiscoverMoviesQuery = (page = 1) => {
  return useQuery(['movies', { page }], async () => {
    const movies = await apiFetch<PaginatedResponse<Movie>>(
      `/discover/movie?page=${page}`,
      {
        method: 'GET',
      },
    );

    return movies;
  });
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
