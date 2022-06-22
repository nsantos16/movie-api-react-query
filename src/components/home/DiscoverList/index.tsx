import { useDiscoverMoviesQuery } from '../../../queries/movieQueries';
import MoviesListSection from '../../common/MoviesListSection';
import Spinner from '../../common/Spinner';
import FilterMovies from '../FilterMovies';
import MyList from '../MyList';
import SearchMovie from '../SearchMovie';

const DiscoverList = () => {
  const { data, isLoading, isError, isSuccess } = useDiscoverMoviesQuery();

  if (isLoading) {
    // TODO: Implement loading state
    return null;
  }

  if (isError) {
    // TODO: Implement error state
    return null;
  }

  if (isSuccess) {
    return (
      <div className="mt-[74px] mb-[40px] sm:grid sm:grid-cols-12 px-14 gap-x-[40px]">
        <div className="sm:col-span-3 mb-[54px] sm:mb-0">
          <div className="block sm:hidden mb-[28px]">
            <SearchMovie />
          </div>
          <FilterMovies />
        </div>
        <div className="space-y-[150px] sm:space-y-[23px] sm:col-span-9">
          <div className="hidden sm:block">
            <SearchMovie />
          </div>
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
