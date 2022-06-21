import cn from 'classnames';
import CheckIcon from '../../icons/CheckIcon';

interface CheckboxProps {
  isSelected: boolean;
  onClick: () => void;
}

const Checkbox = ({ isSelected, onClick }: CheckboxProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        'border-white cursor-pointer border-[2px] border-opacity-[14%] border-solid w-[24px] h-[24px] flex items-center justify-center rounded',
        { 'border-opacity-100': isSelected },
      )}
    >
      {isSelected ? <CheckIcon /> : null}
    </div>
  );
};

export default Checkbox;
