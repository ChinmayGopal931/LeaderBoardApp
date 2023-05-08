import { Fragment, useEffect, useRef, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import arrowDownSvg from "../../../assets/arrow-down.svg";

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
  setSelectedOption: Function;
};

const Dropdown = (props: DropdownProps) => {
  const theme = props.theme;

  const generateButton = () => {
    switch (theme?.type) {
      case "asset":
        return "asset-dropdown-btn";
      case "metrics":
        return "metrics-dropdown-btn";
      case "network":
        return "network-dropdown-btn";
      default:
        return "dropdown-btn";
    }
  };

  const generateMenu = () => {
    switch (theme?.type) {
      case "asset":
        return "asset-dropdown-menu";
      case "metrics":
        return "metrics-dropdown-menu";
      case "network":
        return "network-dropdown-menu";
      default:
        return "dropdown-menu";
    }
  };
  return (
    <Menu as="div" className="relative inline-block text-left min-w-[120px] ">
      <Menu.Button className={generateButton()}>
        {props.theme?.icon && (
          <img
            className="flex max-w-[20px] max-h-[20px] object-cover"
            src={props.theme.icon}
            alt="Asset icon"
          />
        )}
        <p className="text-heading_dark transition-all duration-75 text-2xs">
          {props.selectedLabel}
        </p>
        <img
          src={arrowDownSvg}
          alt=""
          className="-mr-1 ml-1 h-3 w-3 ui-open:rotate-180 transition-all duration-300"
          aria-hidden="true"
        />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className={generateMenu()}>
          {props?.options?.map((item) => {
            return (
              <Menu.Item key={item.title}>
                {({ active }) => (
                  <div
                    className="flex flex-row items-center w-full justify-start"
                    onClick={() => props.setSelectedOption(item.title)}
                  >
                    {item.icon && (
                      <img
                        className="flex max-w-[20px] max-h-[20px] object-cover ml-[14.75px]"
                        src={item.icon}
                        alt="menu-item-icon"
                      />
                    )}
                    <div
                      className={`${
                        active ? "opacity-50" : "opacity-100"
                      } text-heading_dark transition-all duration-75 text-2xs py-3 ml-[14.75px]`}
                    >
                      {item.title}
                    </div>
                  </div>
                )}
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
