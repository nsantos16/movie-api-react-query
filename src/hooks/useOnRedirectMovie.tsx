import { useNavigate } from 'react-router-dom';

const useOnRedirectMovie = () => {
  const navigate = useNavigate();

  const onRedirect = (movieId: string) => {
    navigate(`/movie/${movieId}`);
  };

  return {
    onRedirect,
  };
};

export default useOnRedirectMovie;
