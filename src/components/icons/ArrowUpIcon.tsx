interface ArrowUpIconProps {
  height?: number;
  width?: number;
}

const ArrowUpIcon = ({ width = 6, height = 12 }: ArrowUpIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 6 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 12L6 6L0 0" fill="white" fill-opacity="0.5" />
    </svg>
  );
};

export default ArrowUpIcon;
