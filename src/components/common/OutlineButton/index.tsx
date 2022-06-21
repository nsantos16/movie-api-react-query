import { ReactNode } from 'react';

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: ReactNode;
}

const OutlineButton = ({ label, icon, ...btnProps }: PrimaryButtonProps) => {
  return (
    <button
      {...btnProps}
      type="button"
      className="border-solid border border-white border-opacity-[15%] bg-transparent text-lg text-white rounded-[20px] py-[20px] px-[30px] flex items-center justify-center space-x-[42px]"
      style={{
        filter: 'drop-shadow(0px 7px 42px rgba(0, 15, 147, 0.44))',
      }}
    >
      <span className="font-bold">{label}</span>
      {icon}
    </button>
  );
};

export default OutlineButton;
