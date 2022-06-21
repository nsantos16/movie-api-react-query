interface ArrowLeftIconProps {
  height?: number;
  width?: number;
  fill?: string;
}

const ArrowLeftIcon = ({
  width = 24,
  height = 25,
  fill = 'white',
}: ArrowLeftIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 18.5L18 12.5L12 6.5"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 18.5L11 12.5L5 6.5"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowLeftIcon;
