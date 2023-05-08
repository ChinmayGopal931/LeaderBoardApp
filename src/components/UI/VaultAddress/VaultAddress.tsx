import copy from "assets/clipboard-copy.svg";
import { truncatehex } from "lib/helpers/helpers";
interface VaultAddressProps {
  address: string;
  isTrunced?: boolean;
  start?: number;
  end?: number;
}

const VaultAddress = (props: VaultAddressProps) => {
  return (
    <div className="flex flex-col gap-y-2 desktop:flex-row desktop:items-center w-full">
      <div
        className="flex flex-row hover:opacity-50 cursor-pointer hover:transition-all duration-200 "
        onClick={() => navigator.clipboard.writeText(props.address)}
      >
        <p className={`text-2xs mr-4 tracking-wider`}>
          {props.isTrunced
            ? truncatehex(props?.address, props.start ?? 26, props.end ?? 3)
            : props.address}
        </p>
        <img className="h-[16px] w-[16px]" src={copy} alt="Copy Address" />
      </div>
    </div>
  );
};

export default VaultAddress;
