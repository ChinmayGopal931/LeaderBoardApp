import Flag from "assets/gradiant-flag.svg";
import Envelope from "assets/gradiant-envelope.svg";
import Dollar from "assets/gradiant-dollar.svg";
import Lock from "assets/gradiant-lock.svg";
import Smily from "assets/smily.svg";

type VaultDetail = {
  key: string;
  value: string;
  icon: string;
};

interface IVaultDetailProps {
  vaultStats: VaultDetail[];
  hideIcon?: boolean;
}

const VaultStats = (props: IVaultDetailProps) => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case "flag":
        return Flag;
      case "envelope":
        return Envelope;
      case "dollar":
        return Dollar;
      case "lock":
        return Lock;
      case "smily":
        return Smily;
      default:
        return Dollar;
    }
  };

  return (
    <div>
      <div className="flex mobile:gap-4 tablet:gap-8 desktop:justify-start flex-col items-center desktop:flex-row ">
        {props.vaultStats.map((item: VaultDetail) => {
          return (
            <div className="flex flex-row bg-ui_surface p-4 rounded-xl items-center gap-x-3 w-full desktop:w-[250px] h-[110px]">
              {!props.hideIcon && (
                <img
                  src={getIcon(item.icon)}
                  alt={item.icon}
                  className="h-12 w-7 mb-3"
                />
              )}

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

export default VaultStats;
