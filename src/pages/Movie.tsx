import { Navigate, useParams } from 'react-router-dom';
import Hero from '../components/home/Hero';
import BestRatedMovies from '../components/movie/BestRatedMovies';
import SimilarMovies from '../components/movie/SimilarMovies';

const Movie = () => {
  const { movieId } = useParams<{ movieId: string }>();

  if (!movieId) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex flex-col">
      <Hero movieId={movieId} withPoster />
      <div className="mt-[80px] space-y-[132px] flex flex-col justify-center items-center">
        <SimilarMovies movieId={movieId} />
        <BestRatedMovies />
      </div>
    </div>
  );
};

export default Movie;
