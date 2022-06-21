import { useDiscoverMoviesQuery } from '../../../queries/movieQueries';
import ErrorMessage from '../../common/ErrorMessage';
import MoviesListSection from '../../common/MoviesListSection';
import Spinner from '../../common/Spinner';
import SearchMovie from '../SearchMovie';

const HomeContent = () => {
  const { data, isLoading, isError, isSuccess } = useDiscoverMoviesQuery();

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorMessage />;
  }

  if (isSuccess) {
    return (
      <div className="mt-[74px]">
        <div>{/* TODO: Filter by */}</div>
        <div className="space-y-[23px]">
          <SearchMovie />
          <MoviesListSection sectionLabel="Discover" movies={data.results} />
        </div>
      </div>
    );
  }

  return null;
};

export default HomeContent;
