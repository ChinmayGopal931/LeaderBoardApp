import { useEffect, useState } from "react";
import SearchInput from "components/Discover/SearchVaults/SearchInput";
import SearchTable from "components/Discover/SearchVaults/SearchTable/SearchTable";
import { useGetAllData } from "hooks";
import { userData } from "lib/constants/types";

export type DropdownItem = {
  title: string;
  icon?: string;
};

export type DropdownTheme = {
  type: string;
  icon?: string;
};

export type DropdownProps = {
  selectedLabel: string;
  options: DropdownItem[];
  theme?: DropdownTheme;
};

const SearchVaults = (vaultData: any) => {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {}, [searchInput]);

  return (
    <div className="flex flex-col">
      <p className="mobile:text-2xl desktop:text-7xl text-heading_dark font-semibold">
        LeaderBoard
      </p>
      {/* Search Input, Uncomment to use */}
      <div className="flex flex-col tablet:flex-row gap-4 pt-5 pb-5">
        <SearchInput
          search={searchInput}
          setSearch={setSearchInput}
          placeholder={"Search Name"}
        />
      </div>
      {vaultData && (
        <SearchTable userInput={searchInput} vaultData={vaultData} />
      )}
    </div>
  );
};

export default SearchVaults;
