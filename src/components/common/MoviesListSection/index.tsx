import { useContext } from 'react';
import { FilterContext } from '../../../context/filterContext';
import { Movie } from '../../../types/movies';
import ArrowLeftIcon from '../../icons/ArrowLeftIcon';
import ArrowRightIcon from '../../icons/ArrowRightIcon';
import MovieCard from '../MovieCard';
import PaginationButton from '../PaginationButton';

interface ListSectionProps {
  sectionLabel: string;
  movies: Movie[];
  totalPages: number;
}

const MoviesListSection = ({
  sectionLabel,
  movies,
  totalPages,
}: ListSectionProps) => {
  const { currentPage, setCurrentPage } = useContext(FilterContext);

  const onNextPage = () => {
    setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
  };
  const onPreviousPage = () => {
    setCurrentPage((prevCurrentPage) => prevCurrentPage - 1);
  };

  return (
    <div className="flex flex-col">
      <span className="text-white font-semibold text-[24px] w-full">
        {sectionLabel}
      </span>
      <div className="flex flex-wrap gap-x-[28px] gap-y-[35px] mt-[23px] relative">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
      <div className="flex space-x-[11px] self-end mt-[68px]">
        <PaginationButton
          leftIcon={<ArrowRightIcon />}
          label="Previous"
          disabled={currentPage === 1}
          onClick={onPreviousPage}
        />
        <PaginationButton
          rightIcon={<ArrowLeftIcon />}
          label="Next"
          disabled={currentPage === totalPages}
          onClick={onNextPage}
        />
      </div>
    </div>
  );
};

export default MoviesListSection;
