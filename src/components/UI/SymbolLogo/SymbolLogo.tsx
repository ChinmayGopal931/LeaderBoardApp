const SymbolLogo = (props: any) => {
  return (
    <div className="flex">
      <img
        src={props.properties.avatar}
        alt=""
        className="rounded-full overflow-hidden border border-gray-200 shadow-sm w-11 h-11 mr-2 ml-2"
      />
    </div>
  );
};

export default SymbolLogo;
