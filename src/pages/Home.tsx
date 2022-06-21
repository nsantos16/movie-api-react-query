import DiscoverList from '../components/home/DiscoverList';
import Hero from '../components/home/Hero';
import MyList from '../components/home/MyList';
import { useMovieConfiguration } from '../queries/movieQueries';

const Home = () => {
  useMovieConfiguration();
  // TODO: Create loading state component

  // TODO: Create error state component

  // TODO: Implement total_results zero case

  return (
    <div className="flex flex-col">
      <Hero />
      <DiscoverList />
    </div>
  );
};

export default Home;
