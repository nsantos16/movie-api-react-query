import { ReactNode } from 'react';

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: ReactNode;
}

const PrimaryButton = ({ label, icon, ...btnProps }: PrimaryButtonProps) => {
  return (
    <button
      {...btnProps}
      type="button"
      className="bg-[#192AC3] text-lg text-white rounded-[20px] py-[20px] px-[30px] flex items-center justify-center space-x-[42px]"
      style={{ boxShadow: '0px 7px 42px rgba(0, 15, 147, 0.44)' }}
    >
      <span className="font-bold">{label}</span>
      {icon}
    </button>
  );
};

export default PrimaryButton;
