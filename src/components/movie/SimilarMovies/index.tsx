import { useSimilarMovies } from '../../../queries/movieQueries';
import MoviesListSection from '../../common/MoviesListSection';

interface SimilarMoviesProps {
  movieId: string;
}

const NUMBER_OF_SIMILAR_MOVIES = 5;

const SimilarMovies = ({ movieId }: SimilarMoviesProps) => {
  const { data: similarMovies, isSuccess } = useSimilarMovies(movieId);

  if (isSuccess) {
    return (
      <MoviesListSection
        movies={similarMovies.results.slice(0, NUMBER_OF_SIMILAR_MOVIES)}
        sectionLabel="Browse Similar Titles"
        withPagination={false}
      />
    );
  }
  return null;
};

export default SimilarMovies;
