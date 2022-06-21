import StarEmptyIcon from '../../icons/StarEmptyIcon';
import StarFilledIcon from '../../icons/StarFilledIcon';

interface RankingStarsProps {
  rating: number;
  onSelectRanking?: (selectedRanking: number) => void;
}

const RankingStars = ({ rating, onSelectRanking }: RankingStarsProps) => {
  const numberOfFilledStars = Math.ceil(rating / 2);
  const numberOfEmptyStars = 5 - numberOfFilledStars;

  return (
    <div className="flex space-x-2">
      {Array.from({ length: 5 }, (_, index) =>
        index < numberOfFilledStars ? (
          <StarFilledIcon
            key={index}
            onClick={() => onSelectRanking?.((index + 1) * 2)}
          />
        ) : (
          <StarEmptyIcon
            key={index}
            onClick={() => onSelectRanking?.((index + 1) * 2)}
          />
        ),
      )}
    </div>
  );
};

export default RankingStars;
