import useAddMovieToMyList from '../../../hooks/useAddMovieToMyList';
import { Movie } from '../../../types/movies';
import PlayIcon from '../../icons/PlayIcon';
import PlusIcon from '../../icons/PlusIcon';
import OutlineButton from '../OutlineButton';
import PrimaryButton from '../PrimaryButton';

interface MovieCardButtonsProps {
  movie: Movie;
}

const MovieCardButtons = ({ movie }: MovieCardButtonsProps) => {
  const { addMovieToMyList } = useAddMovieToMyList();

  return (
    <div className="flex space-x-[10px] justify-between items-center absolute bottom-[-40px] z-30">
      <PrimaryButton icon={<PlayIcon />} />
      <OutlineButton
        onClick={() => {
          addMovieToMyList(movie);
        }}
        icon={<PlusIcon height={21} width={19} stroke="#192AC3" />}
      />
    </div>
  );
};

export default MovieCardButtons;
