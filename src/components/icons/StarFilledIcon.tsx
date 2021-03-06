interface StarFilledProps {
  height?: number;
  width?: number;
  onClick?: () => void;
}

const StarFilledIcon = ({
  height = 20,
  width = 21,
  onClick,
}: StarFilledProps) => {
  return (
    <svg
      onClick={onClick}
      width={width}
      height={height}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
    >
      <path
        d="M11.598 0.555469L13.9042 5.22891C14.0495 5.52187 14.3284 5.72578 14.6542 5.77266L19.8105 6.52266C20.6261 6.64219 20.9519 7.64531 20.3612 8.21953L16.63 11.857C16.3956 12.0867 16.2878 12.4148 16.3441 12.7383L17.2253 17.8734C17.3636 18.6867 16.5105 19.3055 15.7816 18.9234L11.1691 16.4977C10.8784 16.3453 10.5316 16.3453 10.2433 16.4977L5.62843 18.9234C4.89718 19.3078 4.04405 18.6867 4.18468 17.8734L5.06593 12.7383C5.12218 12.4148 5.01437 12.0867 4.77999 11.857L1.04874 8.21953C0.458113 7.64297 0.783894 6.63984 1.59952 6.52266L6.75577 5.77266C7.07921 5.72578 7.36046 5.52187 7.50577 5.22891L9.81202 0.555469C10.1776 -0.185156 11.2323 -0.185156 11.598 0.555469Z"
        fill="#FFB800"
      />
    </svg>
  );
};

export default StarFilledIcon;
