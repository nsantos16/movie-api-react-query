import MovieImage from '../../common/MovieImage';

interface HeroLayoutProps {
  children: React.ReactNode;
  backgroundImagePath: string;
  withPoster?: boolean;
}

const HeroLayout = ({
  children,
  backgroundImagePath,
  withPoster = false,
}: HeroLayoutProps) => {
  return (
    <section className="flex  justify-center relative w-full bg-gradient-to-r from-[#070707] to-gray-800">
      <MovieImage
        backgroundImagePath={backgroundImagePath}
        className="w-full h-full absolute mix-blend-overlay object-cover"
      />
      <div className="flex flex-wrap justify-center lg:flex-nowrap pt-[75px] pb-[81.92px] text-white z-10 sm:space-x-[80px] space-y-[40px] lg:space-y-0">
        {withPoster ? (
          <div>
            <MovieImage
              backgroundImagePath={backgroundImagePath}
              className="w-[174px] h-[240px] rounded-[20px]"
            />
          </div>
        ) : null}
        <div className="flex flex-col items-center sm:items-start sm:text-left max-w-3xl px-[40px] sm:px-0">
          {children}
        </div>
      </div>
    </section>
  );
};

export default HeroLayout;
