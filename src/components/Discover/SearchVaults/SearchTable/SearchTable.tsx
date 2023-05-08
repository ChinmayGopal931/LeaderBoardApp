// App
import { useMemo } from "react";

// Hooks
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";

// Components
import { DetailBaseTable } from "components/DetailBaseTable";
import SymbolLogo from "components/UI/SymbolLogo/SymbolLogo";

const SearchTable = (props: any) => {
  const data = useMemo(() => {
    if (props.userInput !== "" && props?.vaultData?.vaultData?.data)
      return Object.values(props?.vaultData?.vaultData?.data).filter(
        (val: any) =>
          val.name.toLowerCase().includes(props.userInput.toLowerCase())
      );
    else return props?.vaultData?.vaultData?.data;
  }, [props]);

  const columns = useMemo(
    () => [
      {
        Header: "Position",
        accessor: (properties: any) => {
          return (
            <div
              className="flex flex-row items-center cursor-pointer"
              onClick={() => handleClick(properties)}
            >
              <p className="mx-2 text-body_light_dark font-semibold">
                {properties.position}
              </p>
            </div>
          );
        },
      },
      {
        Header: "Name",
        accessor: (properties: any) => {
          return (
            <div
              className="flex flex-row items-center cursor-pointer spacing-x-4"
              onClick={() => handleClick(properties)}
            >
              {" "}
              <SymbolLogo properties={properties} height={20} width={20} />
              <p onClick={() => handleClick(properties)}>{properties.name}</p>
            </div>
          );
        },
      },
      {
        Header: "Predicted World Champion",
        accessor: (properties: any) => {
          return (
            <p
              onClick={() => handleClick(properties)}
              className="cursor-pointer"
            >
              {properties.predicted?.toFixed(2)}
            </p>
          );
        },
      },
      {
        Header: "Points",
        accessor: (properties: any) => {
          return (
            <p
              onClick={() => handleClick(properties)}
              className="cursor-pointer"
            >
              {properties.points?.toFixed(2)}
            </p>
          );
        },
      },
    ],
    []
  );

  const handleClick = (properties: any) => {};

  return (
    <div className="flex flex-col w-full min-h-[400px]">
      <DetailBaseTable tableName="" options={{ columns, data }} />
    </div>
  );
};

export default SearchTable;
