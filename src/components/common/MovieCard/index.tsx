import useAddMovieToMyList from '../../../hooks/useAddMovieToMyList';
import useOnRedirectMovie from '../../../hooks/useOnRedirectMovie';
import { Movie } from '../../../types/movies';
import { parseDateFormat } from '../../../utils/date';
import MovieImage from '../MovieImage';
import RatingStars from '../RankingStars';
import GenreLabel from './GenreLabel';
import MovieCardButtons from './MovieCardButtons';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const { onRedirect } = useOnRedirectMovie();

  return (
    <div className="bg-[#131313] rounded-[20px] w-[275px] flex flex-col items-center pt-[20px] pb-[27px] px-[23px] text-white relative transition hover:z-10 hover:rounded-b-none hover:bg-gray-800 group cursor-pointer" onClick={() => {
      onRedirect(movie.id.toString())
    }}>
      <GenreLabel genreId={movie?.genre_ids?.[0] ?? movie?.genres?.[0].id} />
      <MovieImage
        backgroundImagePath={movie.poster_path}
        className="w-[229px] h-[321px] rounded-[20px] object-cover"
      />
      <span className="truncate whitespace-nowrap max-w-[219px] font-semibold mt-[17.8px] text-lg">
        {movie.title}
      </span>
      <span className="opacity-50 mt-2">
        {parseDateFormat(movie.release_date).getFullYear()}
      </span>
      <div className="invisible group-hover:flex group-hover:visible absolute group-hover:delay-[40ms] bottom-[-69px] left-0 h-[70px] w-full bg-gray-800 justify-center rounded-b-[20px]">
        <RatingStars rating={movie.vote_average} />
        <MovieCardButtons movie={movie} />
      </div>
    </div>
  );
};

export default MovieCard;
