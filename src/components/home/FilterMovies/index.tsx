import DropdownSection from '../../common/DropdownSection';
import FilterCategories from './FilterCategories';
import FilterRanking from './FilterRanking';

const FilterMovies = () => {
  return (
    <div>
      <DropdownSection label="Filter by">
        <FilterRanking />
        <FilterCategories />
      </DropdownSection>
    </div>
  );
};

export default FilterMovies;
