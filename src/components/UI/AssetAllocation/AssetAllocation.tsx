// App
import { useMemo } from "react";
import { Cell, Label, Pie, PieChart, Tooltip } from "recharts";

// Lib
import { formatValue } from "lib/helpers/helpers";

// Components
import CustomTooltip from "components/UI/Rechart/CustomTooltip";
import SymbolLogo from "components/UI/SymbolLogo/SymbolLogo";

// Styles
import "react-tooltip/dist/react-tooltip.css";

export interface AssetAllocationProps {
  assets: any;
  totalAmount: any;
}

const AssetAllocation = ({ assets, totalAmount }: AssetAllocationProps) => {
  const COLORS = [
    "#3383C5", // primary_brand_01
    "#9CFFFD", // primary_brand_02
    "#192F4D", // sec_brand_01
    "#29C4B8", // sec_brand_02
    "#3D40C4", // brand_highlight
    "#1B4ACB", // ui_accent
    "#00BC8C", // success
    "#F39C11", // warning
    "#E84C3D", // error
    "#07162F", // ui_surface_opc
    "#536DFE", // Indigo A100 (complementary)
    "#448AFF", // Blue A100 (complementary)
    "#1DE9B6", // Teal A400 (complementary)
  ];

  const columns = useMemo(
    () => [
      {
        Header: "Asset",
        accessor: (properties: any) => {
          return (
            <div className="flex flex-row items-end">
              <SymbolLogo symbol={properties?.symbol} height={20} width={20} />
            </div>
          );
        },
      },
      {
        Header: "Allocation",
        accessor: (properties: any) => {
          return (
            <p className="text-heading_dark text-sm ">
              {formatValue(properties?.allocation, true, "")}
            </p>
          );
        },
      },
    ],
    []
  );
  return (
    <div className="p-6 ml-6 bg-ui_surface rounded-lg shadow-lg  justify-center w-[334px]">
      <p className="text-xl font-semibold font-open_sans justify-center mb-4 text-center">
        Allocation
      </p>

      <div className="flex flex-end justify-center">
        <PieChart width={200} height={175}>
          <Pie
            data={assets}
            startAngle={360}
            endAngle={0}
            innerRadius={65}
            outerRadius={80}
            paddingAngle={-10}
            dataKey="value"
            textAnchor="middle"
            cornerRadius={10}
          >
            {assets.map((entry: any, index: number) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                stroke="none"
              />
            ))}
            <Label
              value={totalAmount}
              position="center"
              fill="#FCFCFC"
              fontSize={16}
            />
          </Pie>
          <Tooltip content={<CustomTooltip type={"Percentage"} />} />
        </PieChart>
      </div>

      <div className="flex-col mt-4">
        <p className="text-heading_dark text-xl tracking-wider mt-0">
          {/* <AllocationBaseTable
            tableName="Assets"
            options={{ columns: columns, data: assets }}
            data={assets}
          /> */}
        </p>
      </div>
    </div>
  );
};

export default AssetAllocation;
