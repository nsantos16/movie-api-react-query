import { useTopRatedMovies } from '../../../queries/movieQueries';
import MoviesListSection from '../../common/MoviesListSection';

const NUMBER_OF_TOP_RATED_MOVIES = 5;

const BestRatedMovies = () => {
  const { data: topRatedMovies, isSuccess } = useTopRatedMovies();

  if (isSuccess) {
    return (
      <MoviesListSection
        movies={topRatedMovies.results.slice(0, NUMBER_OF_TOP_RATED_MOVIES)}
        sectionLabel="Best Rated"
        withPagination={false}
      />
    );
  }
  return null;
};

export default BestRatedMovies;
