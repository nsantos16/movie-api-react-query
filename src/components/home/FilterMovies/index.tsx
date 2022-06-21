import { useContext, useEffect, useState } from 'react';
import { FilterContext } from '../../../context/filterContext';
import DropdownSection from '../../common/DropdownSection';
import FilterCategories from './FilterCategories';
import FilterRanking from './FilterRanking';

const FilterMovies = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { directSearchTerm } = useContext(FilterContext);

  const onToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  useEffect(() => {
    if (directSearchTerm && directSearchTerm !== '') {
      setIsOpen(false);
    }
  }, [directSearchTerm]);

  return (
    <div>
      <DropdownSection label="Filter by" isOpen={isOpen} onToggle={onToggle}>
        <FilterRanking />
        <FilterCategories />
      </DropdownSection>
    </div>
  );
};

export default FilterMovies;
