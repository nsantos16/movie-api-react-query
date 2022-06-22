import DiscoverList from '../components/home/DiscoverList';
import Hero from '../components/home/Hero';
import MyList from '../components/home/MyList';
import {
  useDiscoverMoviesQuery,
  useMovieConfiguration,
} from '../queries/movieQueries';

const Home = () => {
  useMovieConfiguration();
  const { data, isLoading, isError, isSuccess } = useDiscoverMoviesQuery(true);

  if (isLoading) {
    // TODO: Show loading state
    return null;
  }

  if (isError) {
    // TODO: Show error state
    return null;
  }

  if (isSuccess) {
    const heroMovieId = data.results[0].id;

    return (
      <div className="flex flex-col">
        <Hero movieId={heroMovieId.toString()} />
        <DiscoverList />
      </div>
    );
  }

  return null;
};

export default Home;
