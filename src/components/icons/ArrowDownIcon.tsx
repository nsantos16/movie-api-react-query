interface ArrowDownIconProps {
  height?: number;
  width?: number;
}

const ArrowDownIcon = ({ width = 12, height = 6 }: ArrowDownIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 -5.24537e-07L6 6L12 0" fill="white" fill-opacity="0.5" />
    </svg>
  );
};

export default ArrowDownIcon;
