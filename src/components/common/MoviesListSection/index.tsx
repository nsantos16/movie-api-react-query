import { Movie } from '../../../types/movies';
import MovieCard from '../MovieCard';

interface ListSectionProps {
  sectionLabel: string;
  movies: Movie[];
}

const MoviesListSection = ({ sectionLabel, movies }: ListSectionProps) => {
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
    </div>
  );
};

export default MoviesListSection;
