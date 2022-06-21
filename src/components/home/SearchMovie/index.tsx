import { ChangeEvent, useContext, useState } from 'react';
import { FilterContext } from '../../../context/filterContext';
import SearchIcon from '../../icons/SearchIcon';

const SearchMovie = () => {
  const { setSearchTerm } = useContext(FilterContext);
  const [isInputFocus, setIsInputFocus] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const onFocus = () => {
    setIsInputFocus(true);
  };

  const onBlur = () => {
    setIsInputFocus(false);
  };

  return (
    <div className="relative">
      <div className="absolute right-[20px] top-[20px]">
        <SearchIcon fill={isInputFocus ? '#020202' : undefined} />
      </div>
      <input
        onChange={onChange}
        className="w-full h-[65px] px-[25px] py-[20px] rounded-[20px] outline-none focus:bg-white bg-[#424242] border-solid border border-[#7c7c7c] text-opacity-60"
        placeholder="Search..."
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
};

export default SearchMovie;
