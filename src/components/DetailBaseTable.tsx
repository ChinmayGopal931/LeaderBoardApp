import { useEffect, useState } from "react";
import { TableOptions, useTable } from "react-table";
import { useMediaQuery } from "usehooks-ts";

interface Props<D extends object> {
  options: TableOptions<D>;
  sort?: boolean;
  children?: React.ReactNode;
  tableName: string;
}

function DetailBaseTable<D extends object = {}>(props: Props<D>) {
  const [selected, setSelected] = useState("");
  const [sortedData, setSortedData] = useState(props.options.data);

  function handleSort(headerGroup: any) {
    setSelected((v) => {
      if (v === headerGroup) {
        return "";
      }
      return headerGroup;
    });
  }

  useEffect(() => {
    if (selected !== "") {
      const data = [...props.options.data];
      data.sort((a: any, b: any) => a[selected] - b[selected]);
      return setSortedData(data);
    } else {
      return setSortedData(props.options.data);
    }
  }, [props.options.data, selected]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<D>({
      ...props.options,
      data: sortedData.length == 0 ? props.options.data : sortedData,
    });

  return (
    <div className="desktop:p-6 bg-ui_surface rounded-lg shadow-lg p-2 flex flex-col flex-grow h-full">
      <p className="text-xl font-semibold font-open_sans ">{props.tableName}</p>

      <table {...getTableProps()} className="w-full border-spacing-y-1">
        <thead>
          {headerGroups.map((headerGroup: any) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th
                  {...column.getHeaderProps()}
                  className={`desktop:text-xs mobile:text-[10px] font-normal text-left text-body_light_dark px-4 py-4 border-none ${
                    props.sort && "cursor-pointer"
                  }`}
                  onClick={props.sort ? () => handleSort(column.id) : () => {}}
                >
                  {column.render("Header")}
                  {column.id === selected && (
                    <img
                      className="px-1"
                      src={"downArrow"}
                      alt="change-arrow"
                    />
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row: any) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="bg-background hover:bg-ui_surface_opc transition-all duration-100 ease-in-out cursor-pointer"
              >
                {row.cells.map((cell: any, index: number) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className={`border-none desktop:text-3xs mobile:text-[10px] text-left cursor-default mobile:pl-4 desktop:px-4 py-5 ${
                        index === 0 && "rounded-l-2xl"
                      } ${index === row.cells.length - 1 && "rounded-r-2xl"}`}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {props.children}
    </div>
  );
}

export { DetailBaseTable };
