import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import useDebounce from '../hooks/useDebounce';

interface FilterContextValue {
  directSearchTerm: string;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  rankingFilter: number | null;
  setRankingFilter: React.Dispatch<React.SetStateAction<number | null>>;
  filterCategories: number[];
  setFilterCategories: React.Dispatch<React.SetStateAction<number[]>>;
}

export const FilterContext = createContext<FilterContextValue>({
  directSearchTerm: '',
  searchTerm: '',
  setSearchTerm: () => {},
  currentPage: 1,
  setCurrentPage: () => {},
  rankingFilter: null,
  setRankingFilter: () => {},
  filterCategories: [],
  setFilterCategories: () => {},
});

export const FilterCtxProvider = ({
  children,
}: PropsWithChildren<Record<string, unknown>>) => {
  const [search, setSearch] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const debounceSearch = useDebounce(search, 500);
  const [rankingFilter, setRankingFilter] = useState<number | null>(null);
  const [filterCategories, setFilterCategories] = useState<number[]>([]);

  useEffect(() => {
    // Back to the first page every time a filter changes
    setCurrentPage(1);
  }, [search, rankingFilter, filterCategories]);

  useEffect(() => {
    if (search) {
      // Disable ranking & category filter when searching
      setRankingFilter(null);
      setFilterCategories([]);
    }
  }, [search]);

  const value = {
    directSearchTerm: search,
    searchTerm: debounceSearch,
    setSearchTerm: setSearch,
    currentPage,
    setCurrentPage,
    rankingFilter,
    setRankingFilter,
    filterCategories,
    setFilterCategories,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
