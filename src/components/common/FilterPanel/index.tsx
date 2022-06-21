interface FilterPanelProps {
  children: React.ReactNode;
  panelLabel: string;
}

const FilterPanel = ({ children, panelLabel }: FilterPanelProps) => {
  return (
    <div className="rounded-[20px] bg-[#151515] pt-[33px] px-[30px] pb-[41px] flex flex-col space-y-[24px] text-white mt-[28px]">
      <span className="font-bold text-lg">{panelLabel}</span>
      {children}
    </div>
  );
};

export default FilterPanel;
