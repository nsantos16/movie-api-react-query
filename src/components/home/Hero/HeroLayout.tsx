import { useMovieConfiguration } from '../../../queries/movieQueries';
import { getImageURLWithAPIKeyParam } from '../../../utils/apiFetch';
import ErrorMessage from '../../common/ErrorMessage';
import Spinner from '../../common/Spinner';

interface HeroLayoutProps {
  children: React.ReactNode;
  backgroundImagePath: string;
}

const HeroLayout = ({ children, backgroundImagePath }: HeroLayoutProps) => {
  const { data, isLoading, isError, isSuccess } = useMovieConfiguration();

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorMessage />;
  }

  if (isSuccess) {
    return (
      <section className="flex  justify-center relative w-full bg-gradient-to-r from-[#070707] to-gray-800">
        <img
          src={getImageURLWithAPIKeyParam(
            data?.images.secure_base_url,
            data?.images.poster_sizes[data?.images.poster_sizes.length - 1],
            backgroundImagePath,
          )}
          alt="Hero background"
          className="w-full h-full absolute mix-blend-overlay object-cover object-top"
        />
        <div className="flex flex-col pt-[75px] pb-[81.92px] text-white max-w-7xl z-10">
          {children}
        </div>
      </section>
    );
  }

  return null;
};

export default HeroLayout;
