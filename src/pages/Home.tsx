import Hero from '../components/home/Hero';
import { useMovieConfiguration } from '../queries/movieQueries';

const Home = () => {
  useMovieConfiguration();
  // TODO: Create loading state component

  // TODO: Create error state component

  // TODO: Implement total_results zero case

  return (
    <div className="flex">
      <Hero />
    </div>
  );
};

export default Home;
