import { useContext } from 'react';
import { FilterContext } from '../../../context/filterContext';
import { MovieListContext } from '../../../context/movieListContext';
import MoviesListSection from '../../common/MoviesListSection';

const MyList = () => {
  const { movieList } = useContext(MovieListContext);
  const { searchTerm, filterCategories, rankingFilter } =
    useContext(FilterContext);

  if (movieList.length === 0) {
    return null;
  }

  const filterMovies = movieList.filter((movie) => {
    if (searchTerm) {
      return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    }

    if (filterCategories.length > 0) {
      const genreFilter =
        movie?.genre_ids?.some((id) => filterCategories.includes(id)) ||
        movie?.genres?.some(({ id }) => filterCategories.includes(id));

      if (!genreFilter) {
        return false;
      }
    }

    if (rankingFilter) {
      return (
        movie.vote_average <= rankingFilter &&
        movie.vote_average >= rankingFilter - 2
      );
    }

    return movieList;
  });

  return filterMovies.length > 0 ? (
    <MoviesListSection
      movies={filterMovies}
      sectionLabel="My List"
      withPagination={false}
    />
  ) : null;
};

export default MyList;
