import { useContext, useEffect } from 'react';
import { FilterContext } from '../../../context/filterContext';
import FilterPanel from '../../common/FilterPanel';
import RankingStars from '../../common/RankingStars';

const DEFAULT_RANKING_FILTER = 8;

const FilterRanking = () => {
  const { rankingFilter, setRankingFilter } = useContext(FilterContext);

  useEffect(() => {
    // Set the default ranking filter when the filter is opening and back to the default when closed
    setRankingFilter(DEFAULT_RANKING_FILTER);

    return () => {
      setRankingFilter(null);
    };
  }, []);

  const onSelectRanking = (ranking: number) => {
    setRankingFilter(ranking);
  };

  return (
    <FilterPanel panelLabel="Ranking">
      <RankingStars
        rating={rankingFilter || DEFAULT_RANKING_FILTER}
        onSelectRanking={onSelectRanking}
      />
    </FilterPanel>
  );
};

export default FilterRanking;
