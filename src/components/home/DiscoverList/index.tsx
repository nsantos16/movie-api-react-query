import { useDiscoverMoviesQuery } from '../../../queries/movieQueries';
import ErrorMessage from '../../common/ErrorMessage';
import MoviesListSection from '../../common/MoviesListSection';
import Spinner from '../../common/Spinner';
import FilterMovies from '../FilterMovies';
import MyList from '../MyList';
import SearchMovie from '../SearchMovie';

const DiscoverList = () => {
  const { data, isLoading, isError, isSuccess } = useDiscoverMoviesQuery();

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorMessage />;
  }

  if (isSuccess) {
    return (
      <div className="mt-[74px] mb-[40px] grid grid-cols-12 px-14 gap-x-[40px]">
        <div className="col-span-3">
          <FilterMovies />
        </div>
        <div className="space-y-[23px] col-span-9">
          <SearchMovie />
          <MyList />
          <MoviesListSection
            sectionLabel="Discover"
            movies={data.results}
            totalPages={data.total_pages}
          />
        </div>
      </div>
    );
  }

  return null;
};

export default DiscoverList;
