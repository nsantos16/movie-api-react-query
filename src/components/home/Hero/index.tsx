import {
  useDiscoverMoviesQuery,
  useMovieDetails,
} from '../../../queries/movieQueries';
import { parseDateFormat, parseDuration } from '../../../utils/date';
import ErrorMessage from '../../common/ErrorMessage';
import OutlineButton from '../../common/OutlineButton';
import PrimaryButton from '../../common/PrimaryButton';
import Spinner from '../../common/Spinner';
import PlayIcon from '../../icons/PlayIcon';
import PlusIcon from '../../icons/PlusIcon';
import HeroLayout from './HeroLayout';

const Hero = () => {
  const {
    data,
    isLoading: isLoadingDiscoverMovies,
    isError: isErrorDiscoverMovies,
    isSuccess: isSuccessDiscoverMovies,
  } = useDiscoverMoviesQuery(true);

  const heroMovieId = data?.results[0].id;
  const {
    data: heroMovieDetails,
    isLoading: isLoadingMovieDetails,
    isError: isErrorMovieDetails,
    isSuccess: isSuccessMovieDetails,
  } = useMovieDetails(heroMovieId);

  if (isLoadingDiscoverMovies || isLoadingMovieDetails) {
    return <Spinner />;
  }

  if (isErrorDiscoverMovies || isErrorMovieDetails) {
    return <ErrorMessage />;
  }

  if (isSuccessDiscoverMovies && isSuccessMovieDetails) {
    return (
      <HeroLayout backgroundImagePath={heroMovieDetails.poster_path}>
        <div className="flex space-x-[39px] text-sm opacity-50">
          <div>{heroMovieDetails?.genres.map((genre) => genre.name)[0]}</div>
          <div>
            {parseDateFormat(heroMovieDetails?.release_date).getFullYear()}
          </div>
          <div>{parseDuration(heroMovieDetails?.runtime)}</div>
        </div>
        <div className="mt-[26px] font-arvo text-xl max-w-3xl leading-none">
          {heroMovieDetails?.title}
        </div>
        <div className="mt-[22px]">{heroMovieDetails.overview}</div>
        <div className="mt-[37px] flex space-x-[15px]">
          <PrimaryButton label="Watch Now" icon={<PlayIcon />} />
          <OutlineButton label="Add to List" icon={<PlusIcon />} />
        </div>
      </HeroLayout>
    );
  }

  return null;
};

export default Hero;
