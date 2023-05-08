// App
import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";

// Assets
import MainLogoSvg from "assets/fan.svg";

// Social Assets
import TwitterSvg from "assets/social/twitter.svg";
import DiscordSvg from "assets/social/discord.svg";
import TelegramSvg from "assets/social/telegram.svg";
import MediumSvg from "assets/social/medium.svg";
import NotionSvg from "assets/social/notion.svg";
import GithubSvg from "assets/social/github.svg";

import {
  TWITTER,
  MEDIUM,
  NOTION,
  DISCORD,
  TELEGRAM,
  GITHUB,
  DOCS,
  PROTOCOL,
  GOVERNANCE,
} from "lib/constants";

const Footer = () => {
  const isMobileView = useMediaQuery("(max-width:1200px)");

  const footerItems = [
    {
      title: "About Us",
      link: DOCS,
    },
    {
      title: "Protocol",
      link: PROTOCOL,
    },
    {
      title: "Governance",
      link: GOVERNANCE,
    },
    {
      title: "Privacy Policy",
      link: "/privacyPolicy",
    },
  ];
  const socialImages = [
    {
      src: TwitterSvg,
      alt: "Twitter",
      href: TWITTER,
    },
    {
      src: MediumSvg,
      alt: "Medium",
      href: MEDIUM,
    },
    {
      src: NotionSvg,
      alt: "Notion",
      href: NOTION,
    },
    {
      src: DiscordSvg,
      alt: "Discord",
      href: DISCORD,
    },
    {
      src: TelegramSvg,
      alt: "Telegram",
      href: TELEGRAM,
    },
    {
      src: GithubSvg,
      alt: "Github",
      href: GITHUB,
    },
  ];

  const scrollToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Optional if you want to skip the scrolling animation
    });
  };

  const FooterInputSection = () => {
    useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://substackapi.com/widget.js";
      script.async = true;
      script.onload = () => {
        if (window.SubstackWidget) {
          window.SubstackWidget.init(window.CustomSubstackWidget);
        }
      };
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }, []);

    return (
      <div className={`flex row ${isMobileView ? "text-center" : ""} `}>
        <div>
          <div className="mb-4">
            <label className="cursor-pointer text-md text-body_light_dark mb-2 font-bold">
              Get the latest Fan Shark news
            </label>
          </div>
          <div id="custom-substack-embed"></div>
        </div>
      </div>
    );
  };

  return (
    <div className={`${isMobileView ? `pb-28 pt-10` : ""} w-full flex-col`}>
      <div className="flex flex-row border-bottom-header mb-12 items-center  justify-center  w-full h-[120px] "></div>
      <div
        className={`${
          isMobileView ? `flex-col` : "flex-row"
        } flex  justify-between items-center pl-[7%] pr-[7%] mb-[20px]`}
      >
        <div className={!isMobileView ? `hidden` : "flex-row row  mb-4"}>
          <FooterInputSection />
        </div>

        <div
          className={`flex justify-between ${
            isMobileView ? "grid grid-cols-2 gap-2 mt-2" : "space-x-6"
          }  font-open_sans  font-bold`}
        >
          {footerItems.map((item, index) => (
            <div key={index} className="text-center">
              <a
                href={item.link}
                className={`cursor-pointer text-body_light_dark ${
                  isMobileView ? "text-sm " : "text-md"
                } no-underline hover:opacity-70 transition-all duration-150 `}
                target="_blank"
                rel="noreferrer"
              >
                {item.title}
              </a>
            </div>
          ))}
        </div>

        <div
          className={`flex flex-row space-x-5  ${isMobileView ? `mt-12` : ""}`}
        >
          <img
            className="w-[120px] h-[70px] cursor-pointer"
            src={MainLogoSvg}
            alt="Fan Shark"
            onClick={() => scrollToTop()}
          />
        </div>
        <div className={isMobileView ? `hidden` : "flex-row row text-sm mb-4"}>
          <FooterInputSection />
        </div>
      </div>
    </div>
  );
};

export default Footer;
