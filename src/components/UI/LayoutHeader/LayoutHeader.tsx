interface ILayoutHeaderProps {
  title: string;
  description?: string;
  symbol?: string;
}

const LayoutHeader = (props: ILayoutHeaderProps) => {
  return (
    <div className="flex flex-row items-end justify-center mb-2 desktop:justify-start h-13">
      {props.symbol && (
        <div className="flex mb-1 desktop:mb-2.5 mr-2 flex-end"></div>
      )}
      <h1 className="text-2xl font-semibold desktop:text-7xl text-heading_dark">
        {props.title}
      </h1>
      {props.symbol && (
        <p className="mb-0.5 ml-2 desktop:mb-1.5 text-body_light_dark">
          {props.symbol}
        </p>
      )}
    </div>
  );
};

export default LayoutHeader;
