import { useMovieGenres } from '../../../queries/movieQueries';

interface GenreLabelProps {
  genreId: number;
}

const GenreLabel = ({ genreId }: GenreLabelProps) => {
  const { data, isSuccess } = useMovieGenres();
  const genre = data?.find((genre) => genre.id === genreId);

  if (isSuccess && genre) {
    return (
      <div className="absolute bg-[#192AC3] rounded-b-[11px] px-[14px] py-[7px]">
        {genre?.name}
      </div>
    );
  }

  return null;
};

export default GenreLabel;
