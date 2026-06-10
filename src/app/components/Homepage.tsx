"use client";

import Image from "next/image";
import "../styles/homepage.css";
import { TechStack, Libraries } from "./Homepage/TechStack";
import { usePageContext } from "../context/PageContext";
import { FaArrowDown } from "react-icons/fa";
import { useLocale } from "../context/LanguageContext";

const Homepage = () => {
  const { setCurrentSection } = usePageContext();
  const { t } = useLocale();
  const onButtonClick = (e: any) => {
    setCurrentSection(e.target.name);

    const section = document.getElementById(e.target.name);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onTextClick = (name) => {
    setCurrentSection(name);

    const section = document.getElementById(name);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="h-screen bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-white flex lg:flex-row flex-col-reverse justify-center sm:gap-0 gap-4 items-center cursor-default w-screen">
      <div className="text-white font-main font-bold lg:text-5xl text-2xl xl:w-3/6 lg:4/6 w-full flex flex-col justify-center lg:gap-20 gap-2">
        <div className="flex lg:flex-col md:flex-row flex-col md:gap-6 mt-4 lg:mt-0 justify-center items-center w-full">
          <div className="text-slate-800 dark:text-white lg:w-full xl:px-24 lg:px-12 transition duration-500 ease-linear">
            <span>{t("home.title")} </span>
            <span className={`underline-animation duration-150 ease-linear`}>
              {t("home.name")}
            </span>
          </div>
          <span className="lg:hidden hidden md:inline">-</span>
          <div className="text-slate-800 dark:text-white lg:w-full xl:px-24 transition duration-500 ease-linear">
            <span>{t("home.subtitle_1")} </span>
            <span className={`underline-animation duration-150 ease-linear`}>
              {t("home.subtitle_2")}
            </span>
          </div>
        </div>
        <div className="flex xl:px-24 lg:px-12 flex-col lg:gap-4 items-center lg:items-start">
          <span className="text-slate-800 dark:text-white">
            {t("home.stack")}
          </span>
          <TechStack />
          <span className="text-slate-800 dark:text-white mt-6">
            {t("home.libraries")}
          </span>
          <Libraries />
        </div>
        <div className="xl:px-24 lg:px-12 flex gap-4 lg:gap-14 lg:text-2xl text-lg justify-center items-center lg:justify-start">
          <button
            name={"hire-me"}
            onClick={onButtonClick}
            className="lg:w-2/6 md:w-1/6 w-5/12 border-2 lg:p-4 p-2 md:rounded-2xl rounded-lg transition-all duration-150 ease-linear active:scale-95 bg-white text-slate-800 hover:bg-transparent hover:text-white dark:hover:bg-transparent dark:bg-slate-800 dark:text-white dark:border-slate-800 dark:hover:text-slate-800"
          >
            {t("home.contact")}
          </button>

          <div className="underline-colorless after:bg-slate-800 text-slate-800 dark:after:bg-white dark:text-white">
            <div
              className="flex justify-center items-center h-fit transition-all duration-150 ease-linear gap-2 cursor-pointer text-slate-800 dark:text-white"
              onClick={() => onTextClick("about")}
            >
              <span>{t("home.about_me")}</span>
              <FaArrowDown name={"about"} />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-3/6 md:w-2/6 w-4/6 flex justify-center items-center flex-col">
        <div className="lg:w-96 lg:h-96 rounded-full overflow-auto border-4 border-slate-600/60 transition duration-300 picture-shadow bg-custom-lightBg dark:bg-custom-darkBg dark:border-custom-darkBorder hover:bg-cyan-500 hover:border-cyan-500">
          <Image
            src="/assets/picture.png"
            className="h-full w-auto"
            alt="profile_picture"
            priority
            width={1024}
            height={1024}
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
