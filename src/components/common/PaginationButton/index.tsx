import { ReactNode } from 'react';
import cn from 'classnames';

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const PaginationButton = ({
  label,
  leftIcon,
  rightIcon,
  ...btnProps
}: PrimaryButtonProps) => {
  return (
    <button
      {...btnProps}
      type="button"
      className={cn(
        'bg-white bg-opacity-[9%] text-[18px] text-white rounded-[20px] py-[13px] px-[25px] flex items-center justify-center space-x-[15px] disabled:bg-opacity-5',
      )}
    >
      <div>{leftIcon}</div>
      <span>{label}</span>
      <div>{rightIcon}</div>
    </button>
  );
};

export default PaginationButton;
