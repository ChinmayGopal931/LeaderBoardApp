import LayoutHeader from "components/UI/LayoutHeader/LayoutHeader";
import SymbolLogo from "components/UI/SymbolLogo/SymbolLogo";
import VaultStats from "components/UI/VaultStats/VaultStats";
import { formatValue } from "lib/helpers/helpers";
import { useMemo } from "react";

import { useMediaQuery } from "usehooks-ts";

const MyPortfolio = () => {
  const isMobileView = useMediaQuery("(max-width:1000px)");

  const columns = useMemo(
    () => [
      {
        Header: "Asset",
        accessor: (properties: any) => {
          return (
            <div className="flex flex-row items-end">
              <SymbolLogo symbol={properties?.symbol} height={20} width={20} />
              <p className="mx-2 text-body_light_dark font-semibold text-sm">
                {properties?.name}
              </p>
              <p className="text-ucla_blue font-semibold text-xs ">
                {properties?.symbol}
              </p>
            </div>
          );
        },
      },
      {
        Header: "Balance",
        accessor: (properties: any) => {
          return (
            <p className="text-body_light_dark text-sm ">
              {formatValue(+properties?.balance, false, "")}
            </p>
          );
        },
      },
      {
        Header: "24H Change",
        accessor: (properties: any) => {
          const textColor =
            +properties?.dailyChange > 0
              ? "text-success  text-sm"
              : "text-error  text-sm";
          return (
            <p className={textColor}>
              {formatValue(properties?.dailyChange, true, "")}
            </p>
          );
        },
      },
      {
        Header: "Value",
        accessor: (properties: any) => {
          return (
            <p className="text-body_light_dark text-sm ">
              {formatValue(properties?.value, false, "USD")}
            </p>
          );
        },
      },
      {
        Header: "Allocation",
        accessor: (properties: any) => {
          return (
            <p className="text-body_light_dark text-sm ">
              {formatValue(properties?.allocation, true, "")}
            </p>
          );
        },
      },
    ],
    []
  );

  // const vaultStats = [
  //   {
  //     key: "Total AUM",
  //     value: userStats.totalDeposits?.toFixed(2),
  //     icon: "dollar",
  //   },
  //   {
  //     key: "Overall PNL",
  //     value: userStats?.pnlTotal?.toFixed(2),
  //     icon: "dollar",
  //   },
  //   {
  //     key: "Vaults",
  //     value: userStats?.vaultCount,
  //     icon: "lock",
  //   },
  // ];
  return (
    <div className="page-container gap-6">
      <LayoutHeader
        title="My Portfolio"
        description="Get exposure to a wide variety of community-generated yield
        opportunities, including passive and active strategies, thematic
        indices, and more."
      />
      {/* <VaultStats vaultStats={vaultStats} /> */}

      {isMobileView ? (
        <>Mobile view</>
      ) : (
        // <DetailBaseTable
        //   tableName="My Vaults"
        //   options={{ columns, data: data }}
        // />
        <></>
      )}
    </div>
  );
};

export default MyPortfolio;
