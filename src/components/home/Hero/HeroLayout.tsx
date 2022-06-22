import MovieImage from '../../common/MovieImage';

interface HeroLayoutProps {
  children: React.ReactNode;
  backgroundImagePath: string;
  isMovie?: boolean;
}

const HeroLayout = ({
  children,
  backgroundImagePath,
  isMovie = false,
}: HeroLayoutProps) => {
  return (
    <section className="flex  justify-center relative w-full bg-gradient-to-r from-[#070707] to-gray-800">
      <MovieImage
        backgroundImagePath={backgroundImagePath}
        className="w-full h-full absolute mix-blend-overlay object-cover"
      />
      <div className="flex flex-wrap justify-center lg:flex-nowrap pt-[75px] pb-[81.92px] text-white z-10 space-x-[80px] space-y-[40px] lg:space-y-0">
        {isMovie ? (
          <div>
            <MovieImage
              backgroundImagePath={backgroundImagePath}
              className="w-[174px] h-[240px] rounded-[20px]"
            />
          </div>
        ) : null}
        <div className="flex flex-col max-w-3xl">{children}</div>
      </div>
    </section>
  );
};

export default HeroLayout;
