import { useMovieConfiguration } from '../../../queries/movieQueries';
import { getImageURLWithAPIKeyParam } from '../../../utils/apiFetch';
import Spinner from '../Spinner';

interface MovieImageProps {
  className?: string;
  backgroundImagePath: string | null;
}

const MovieImage = ({ className, backgroundImagePath }: MovieImageProps) => {
  const { data, isLoading, isError, isSuccess } = useMovieConfiguration();

  if (!backgroundImagePath) {
    return (
      <img
        src="https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg"
        alt="Not found"
        className={className}
      />
    );
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return null;
  }

  if (isSuccess) {
    return (
      <img
        src={getImageURLWithAPIKeyParam(
          data?.images.secure_base_url,
          data?.images.poster_sizes[data?.images.poster_sizes.length - 1],
          backgroundImagePath,
        )}
        alt="Movie poster"
        className={className}
      />
    );
  }

  return null;
};

export default MovieImage;
