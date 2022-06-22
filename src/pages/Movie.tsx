import { Navigate, useParams } from 'react-router-dom';
import Hero from '../components/home/Hero';
import { useMovieDetails } from '../queries/movieQueries';

const Movie = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const { data: movie } = useMovieDetails(movieId);

  if (!movieId) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex flex-col">
      <Hero movie={movie} />
    </div>
  );
};

export default Movie;
