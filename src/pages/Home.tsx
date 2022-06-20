import useDiscoverMovieQuery from '../queries/movieQueries';

const Home = () => {
  const { data } = useDiscoverMovieQuery();

  return null;
};

export default Home;
