import fan from "assets/fan.svg";

const PlayerStats = (props: any) => {
  return (
    <div>
      <div className="flex mobile:gap-4 tablet:gap-8 desktop:justify-start flex-col items-center desktop:flex-col mr-[210px]">
        {Object.values(props?.vaultStats).map((item: any) => {
          return (
            <div className="flex flex-row bg-ui_surface p-4 rounded-xl items-center gap-x-3 w-full desktop:w-[250px] h-[110px]">
              <img src={fan} alt={item.icon} className="h-12 w-7 mb-3" />

              <div
                className="flex flex-col text-center flex-grow gap-y-1"
                key={item.key}
              >
                <p className="text-heading_dark font-roboto_normal text-4xl tracking-wider">
                  {item.value}
                </p>
                <p className="text-body_light_dark font-normal text-xs mb-1 w-full">
                  {item.key}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayerStats;
