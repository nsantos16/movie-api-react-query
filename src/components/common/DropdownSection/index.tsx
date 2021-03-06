import { useState } from 'react';
import ArrowDownIcon from '../../icons/ArrowDownIcon';
import ArrowUpIcon from '../../icons/ArrowUpIcon';

interface DropdownSectionProps {
  children: React.ReactNode;
  label: string;
  isOpen: boolean;
  onToggle: () => void;
}

const DropdownSection = ({
  children,
  label,
  isOpen,
  onToggle,
}: DropdownSectionProps) => {
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
      {isOpen ? children : null}
    </div>
  );
};

export default DropdownSection;
