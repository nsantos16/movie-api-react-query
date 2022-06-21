import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import useDebounce from '../hooks/useDebounce';

interface FilterContextValue {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const FilterContext = createContext<FilterContextValue>({
  searchTerm: '',
  setSearchTerm: () => {},
  currentPage: 1,
  setCurrentPage: () => {},
});

export const FilterCtxProvider = ({
  children,
}: PropsWithChildren<Record<string, unknown>>) => {
  const [search, setSearch] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const debounceSearch = useDebounce(search, 500);

  useEffect(() => {
    // Back to the first page every time a filter changes
    setCurrentPage(1);
  }, [search]);

  const value = {
    searchTerm: debounceSearch,
    setSearchTerm: setSearch,
    currentPage,
    setCurrentPage,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
