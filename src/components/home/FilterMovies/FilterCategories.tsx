import { useContext, useEffect } from 'react';
import { FilterContext } from '../../../context/filterContext';
import { useMovieGenres } from '../../../queries/movieQueries';
import FilterPanel from '../../common/FilterPanel';
import Checkbox from '../../common/Checkbox';

const FilterCategories = () => {
  const { filterCategories, setFilterCategories } = useContext(FilterContext);
  const { data, isSuccess } = useMovieGenres();

  useEffect(() => {
    // Back to the defaults when the filter is closed

    return () => {
      setFilterCategories([]);
    };
  }, []);

  const onSelectCategory = (categoryId: number) => {
    setFilterCategories((prevFilterCategories) => [
      ...prevFilterCategories,
      categoryId,
    ]);
  };

  if (isSuccess) {
    return (
      <FilterPanel panelLabel="Categories">
        <div className="grid grid-cols-1 grid-flow-row 2xl:grid-cols-2 gap-x-1 gap-y-[18px]">
          {data.map(({ name, id }) => (
            <div className="space-x-[15px] flex items-center">
              <Checkbox
                isSelected={
                  !!filterCategories.find((filterId) => filterId === id)
                }
                onClick={() => onSelectCategory(id)}
                key={id}
              />
              <label>{name}</label>
            </div>
          ))}
        </div>
      </FilterPanel>
    );
  }

  return null;
};

export default FilterCategories;
