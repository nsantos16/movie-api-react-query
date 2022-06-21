import StarEmptyIcon from '../../icons/StarEmptyIcon';
import StarFilledIcon from '../../icons/StarFilledIcon';

interface RatingStarsProps {
  rating: number;
}

const RatingStars = ({ rating }: RatingStarsProps) => {
  const numberOfFilledStars = Math.ceil(rating / 2);
  const numberOfEmptyStars = 5 - numberOfFilledStars;

  return (
    <div className="flex space-x-2">
      {Array.from({ length: numberOfFilledStars }, (_, index) => (
        <StarFilledIcon key={index} />
      ))}
      {Array.from({ length: numberOfEmptyStars }, (_, index) => (
        <StarEmptyIcon key={5 - index} />
      ))}
    </div>
  );
};

export default RatingStars;
