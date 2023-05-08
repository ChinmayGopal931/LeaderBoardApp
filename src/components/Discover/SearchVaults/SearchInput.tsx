import searchSvg from "assets/search.svg";

interface SearchInputProps {
  search: string;
  setSearch: Function;
  placeholder?: string;
}

const SearchInput = (props: SearchInputProps) => {
  return (
    <div className="w-[300px] desktop:w-[200px] h-[40px] flex border-[1px]  border-solid border-gray-1400 border-opacity-50 rounded-lg bg-ui_surface_opc">
      <div className="flex flex-row justify-center items-center px-3">
        {props.search === "" && (
          <img src={searchSvg} className="h-[17px] w-[17px]" alt="Search" />
        )}
        <input
          type="text"
          className="w-full bg-ui_surface_opc outline-none h-[17px] px-2 border-none text-body_light_dark"
          value={props.search}
          placeholder={props.placeholder}
          onChange={(e) => props.setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchInput;
