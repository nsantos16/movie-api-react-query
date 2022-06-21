import { useState } from 'react';
import ArrowDownIcon from '../../icons/ArrowDownIcon';
import ArrowUpIcon from '../../icons/ArrowUpIcon';

interface DropdownSectionProps {
  children: React.ReactNode;
  label: string;
}

const DropdownSection = ({ children, label }: DropdownSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div>
      <div
        onClick={onToggle}
        className="flex items-center space-x-[14px] cursor-pointer"
      >
        <span className="w-[12px] h-[12px] flex justify-center items-center">
          {isOpen ? <ArrowDownIcon /> : <ArrowUpIcon />}
        </span>
        <span className="text-white font-bold text-[24px]">{label}</span>
      </div>
      {children}
    </div>
  );
};

export default DropdownSection;
