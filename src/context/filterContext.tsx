import { createContext, PropsWithChildren, useState } from 'react';
import useDebounce from '../hooks/useDebounce';

interface FilterContextValue {
  searchTerm: string;
  setSearchTerm: (_: string) => void;
}

export const FilterContext = createContext<FilterContextValue>({
  searchTerm: '',
  setSearchTerm: () => {},
});

export const FilterCtxProvider = ({
  children,
}: PropsWithChildren<Record<string, unknown>>) => {
  const [search, setSearch] = useState<string>('');
  const debounceSearch = useDebounce(search, 500);

  const value = {
    searchTerm: debounceSearch,
    setSearchTerm: setSearch,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
