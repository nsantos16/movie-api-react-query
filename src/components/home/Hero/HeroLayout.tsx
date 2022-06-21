import MovieImage from '../../common/MovieImage';

interface HeroLayoutProps {
  children: React.ReactNode;
  backgroundImagePath: string;
}

const HeroLayout = ({ children, backgroundImagePath }: HeroLayoutProps) => {
  return (
    <section className="flex  justify-center relative w-full bg-gradient-to-r from-[#070707] to-gray-800">
      <MovieImage
        backgroundImagePath={backgroundImagePath}
        className="w-full h-full absolute mix-blend-overlay object-cover"
      />
      <div className="flex flex-col pt-[75px] pb-[81.92px] text-white max-w-7xl z-10">
        {children}
      </div>
    </section>
  );
};

export default HeroLayout;
