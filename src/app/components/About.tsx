import React from "react";
import { usePageContext } from "../context/PageContext";
import { useLocale } from "../context/LanguageContext";

const About = () => {
  const { setCurrentSection } = usePageContext();
  const { t } = useLocale();
  const onButtonClick = (e: any) => {
    setCurrentSection(e.target.name);

    const section = document.getElementById(e.target.name);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const today = new Date();

  const age =
    today.getFullYear() -
    1997 -
    (today.getMonth() < 3 || (today.getMonth() === 3 && today.getDate() < 14)
      ? 1
      : 0);

  return (
    <div className="h-screen font-main bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-white flex flex-col justify-center items-center cursor-default w-screen pt-14">
      <span
        className={`font-bold md:text-5xl text-3xl flex items-center justify-center h-[8%]`}
      >
        {t("about.title")}
      </span>
      <div className="w-full lg:px-10 px-2 flex flex-col lg:text-xl md:text-base text-sm text-center h-[88%] gap-6 xl:gap-10">
        <div
          data-aos="fade-right"
          className="flex w-full justify-center items-center max-h-[16vh]"
        >
          <span className="lg:w-7/12">{t("about.section_1", { age })}</span>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="750"
          className="flex w-full justify-center items-center max-h-[16vh]"
        >
          <span className="lg:w-7/12">{t("about.section_2")}</span>
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="1500"
          className="flex w-full justify-center items-center max-h-[30vh]"
        >
          <span className="lg:w-7/12">{t("about.section_3")}</span>
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="2250"
          className="flex w-full justify-center items-center max-h-[30vh]"
        >
          <span className="lg:w-7/12">{t("about.section_4")}</span>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="3000"
          className="flex w-full justify-center items-center max-h-[30vh]"
        >
          <span className="lg:w-7/12">{t("about.section_5")}</span>
        </div>

        <div className="flex w-full justify-center items-center max-h-[16vh]">
          <button
            name={"projects"}
            onClick={onButtonClick}
            className="lg:w-3/12 w-2/6 border-2 lg:p-2 p-2 rounded-lg transition-all duration-150 ease-linear active:scale-95 bg-white text-slate-800 dark:hover:bg-transparent dark:bg-slate-800 dark:text-white dark:border-slate-800"
          >
            {t("about.button")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
