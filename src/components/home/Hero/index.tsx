import cn from 'classnames';
import useAddMovieToMyList from '../../../hooks/useAddMovieToMyList';
import useOnRedirectMovie from '../../../hooks/useOnRedirectMovie';
import { useMovieDetails } from '../../../queries/movieQueries';
import { parseDateFormat, parseDuration } from '../../../utils/date';
import OutlineButton from '../../common/OutlineButton';
import PrimaryButton from '../../common/PrimaryButton';
import PlayIcon from '../../icons/PlayIcon';
import PlusIcon from '../../icons/PlusIcon';
import HeroLayout from './HeroLayout';

interface HeroProps {
  movieId: string;
  withPoster?: boolean;
}

const Hero = ({ movieId, withPoster = false }: HeroProps) => {
  const { addMovieToMyList } = useAddMovieToMyList();

  const { data: heroMovieDetails, isSuccess: isSuccessMovieDetails } =
    useMovieDetails(movieId);
  const { onRedirect } = useOnRedirectMovie();

  if (isSuccessMovieDetails) {
    return (
      <HeroLayout
        backgroundImagePath={heroMovieDetails.poster_path}
        withPoster={withPoster}
      >
        <div className="flex flex-col-reverse sm:flex-col">
          <div className="flex space-x-[39px] mt-[18px] sm:mb-0 text-sm opacity-50">
            <div>{heroMovieDetails?.genres.map((genre) => genre.name)[0]}</div>
            <div>
              {parseDateFormat(heroMovieDetails?.release_date).getFullYear()}
            </div>
            <div>{parseDuration(heroMovieDetails?.runtime)}</div>
          </div>
          <div className="sm:mt-[26px] font-arvo text-[52px] sm:text-xl sm:max-w-3xl leading-none">
            {heroMovieDetails?.title}
          </div>
        </div>
        <div className={cn('mt-[22px] sm:block', { hidden: !withPoster })}>
          {heroMovieDetails.overview}
        </div>
        <div className="mt-[37px] flex items-center flex-col space-y-[16px] sm:flex-row sm:space-x-[15px] sm:space-y-0">
          <PrimaryButton
            label="Watch Now"
            icon={<PlayIcon />}
            onClick={() => {
              if (movieId) {
                onRedirect(movieId);
              }
            }}
          />
          <OutlineButton
            onClick={() => {
              addMovieToMyList(heroMovieDetails);
            }}
            label="Add to List"
            icon={<PlusIcon />}
          />
        </div>
      </HeroLayout>
    );
  }

  return null;
};

export default Hero;
