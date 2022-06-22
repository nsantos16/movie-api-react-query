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
  totalPages?: number;
  withPagination?: boolean;
}

const MoviesListSection = ({
  sectionLabel,
  movies,
  totalPages,
  withPagination = true,
}: ListSectionProps) => {
  const { currentPage, setCurrentPage } = useContext(FilterContext);

  const onNextPage = () => {
    setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
  };
  const onPreviousPage = () => {
    setCurrentPage((prevCurrentPage) => prevCurrentPage - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center sm:items-start sm:justify-start">
      <span className="text-white font-semibold text-[24px] w-full">
        {sectionLabel}
      </span>
      <div className="flex flex-wrap justify-center sm:justify-start gap-y-[150px] sm:gap-x-[28px] sm:gap-y-[35px] mt-[23px] relative">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
      {withPagination && (
        <div className="flex space-x-[11px] self-end mt-[150px] sm:mt-[68px] mr-[20px]">
          <PaginationButton
            leftIcon={<ArrowRightIcon />}
            label="Previous"
            disabled={currentPage === 1}
            onClick={onPreviousPage}
          />
          <PaginationButton
            rightIcon={<ArrowLeftIcon />}
            label="Next"
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={onNextPage}
          />
        </div>
      )}
    </div>
  );
};

export default MoviesListSection;
