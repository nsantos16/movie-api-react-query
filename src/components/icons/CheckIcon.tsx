interface CheckIconIconProps {
  height?: number;
  width?: number;
}

const CheckIcon = ({ width = 16, height = 12 }: CheckIconIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.5998 7.91999L2.4798 4.79999L0.799805 6.47999L5.5998 11.28L15.1998 1.68L13.5198 0L5.5998 7.91999Z"
        fill="white"
      />
    </svg>
  );
};

export default CheckIcon;
