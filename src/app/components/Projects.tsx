import React, { useState } from "react";
import { projects } from "../data/projects";
import Image from "next/image";
import "../styles/projects.css";
import { useLocale } from "../context/LanguageContext";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(projects[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { t } = useLocale();

  const changeProject = (index: number) => {
    if (currentProject.id === index + 1) return;
    setCurrentImageIndex(0);
    setCurrentProject(projects[index]);
  };

  const nextImage = () => {
    if (currentImageIndex < currentProject.images.length - 1) {
      setCurrentImageIndex((prev) => prev + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="h-screen px-2 font-main bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-white flex flex-col justify-center items-center cursor-default w-screen lg:gap-8 md:gap-4">
      {/* TITLE */}
      <div className="w-full flex flex-col items-center gap-6">
        <span className="text-5xl lg:inline-block hidden">
          {t("projects.title")}
        </span>

        <div className="w-full flex items-center justify-center">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="flex justify-center lg:w-2/6 md:w-full w-1/6 h-full"
            >
              <span
                className={`transition-all duration-150 cursor-pointer flex justify-center items-center lg:py-4 py-1 md:px-6 text-xs text-center lg:w-4/6 w-full project-shadow lg:rounded-xl lg:border-r-[3px] lg:border-b-[3px] lg:border-t-[1px] lg:border-l-[1px] border-t-slate-400 border-l-slate-400 border-b-cyan-500 border-r-cyan-500 hover:bg-cyan-400 hover:text-white lg:text-base md:text-sm ${
                  project.id === currentProject.id && "bg-cyan-500 text-white"
                }`}
                onClick={() => changeProject(index)}
              >
                {t(project.titleKey)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className="w-full flex lg:flex-row flex-col">
        {/* IMAGES */}
        <div className="lg:w-8/12 w-full flex justify-center items-center relative">
          {currentProject.images.length > 0 ? (
            <div className="flex justify-center items-center">
              <button
                onClick={prevImage}
                className="z-20 absolute left-0 md:px-3 px-1 py-12 enabled:active:scale-95 transition-all duration-150 rounded text-3xl disabled:cursor-not-allowed text-cyan-500 dark:text-cyan-300 enabled:hover:bg-gray-200 enabled:active:bg-gray-300 dark:enabled:hover:bg-gray-700 dark:enabled:active:bg-gray-600"
                disabled={currentImageIndex === 0}
              >
                &#8249;
              </button>

              <div className="lg:h-[60vh] lg:w-11/12 w-full overflow-hidden rounded-2xl relative">
                <div
                  className="flex transition-transform duration-300"
                  style={{
                    transform: `translateX(-${currentImageIndex * 100}%)`,
                  }}
                >
                  {currentProject.images.map((image, index) => (
                    <Image
                      key={index}
                      src={image}
                      alt={t(currentProject.titleKey)}
                      className={`object-contain transition-opacity duration-500 ${
                        index === currentImageIndex
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={nextImage}
                className="z-20 absolute md:right-0 right-3 md:px-3 px-1 py-12 enabled:active:scale-95 transition-all duration-150 rounded text-3xl disabled:cursor-not-allowed text-cyan-500 dark:text-cyan-300 enabled:hover:bg-gray-200 enabled:active:bg-gray-300 dark:enabled:hover:bg-gray-700 dark:enabled:active:bg-gray-600"
                disabled={
                  currentImageIndex === currentProject.images.length - 1
                }
              >
                &#8250;
              </button>
            </div>
          ) : (
            <span>{t("projects.error")}</span>
          )}
        </div>

        {/* INFO */}
        <div className="lg:w-4/12 flex items-center flex-col">
          <div className="flex lg:flex-col flex-col sm:flex-row gap-2 items-center">
            <div className="flex flex-col items-center">
              <span className="lg:text-4xl font-bold text-xl">
                {t(currentProject.titleKey)}
              </span>
            </div>

            {/* TAGS */}
            <div className="flex flex-wrap lg:gap-x-6 gap-x-2 items-center justify-center pt-1">
              <span className="text-sm py-1 px-3 rounded-xl bg-sky-100 text-sky-700 dark:bg-sky-400/20 dark:text-sky-300">
                Frontend
              </span>

              {currentProject.has_backend && (
                <span className="text-sm py-1 px-3 rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-400/20 dark:text-emerald-300">
                  Backend
                </span>
              )}
            </div>

            {/* STACK */}
            <div className="flex flex-wrap lg:gap-x-6 gap-x-2 lg:gap-y-4 gap-y-1 items-center justify-center lg:py-4 py-1">
              {currentProject.stack.map((stack, index) => (
                <span
                  key={index}
                  className="text-sm py-1 px-3 rounded-xl bg-slate-800/90 text-white dark:bg-white/90 dark:text-slate-800"
                >
                  {stack}
                </span>
              ))}
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="flex flex-col items-center text-center lg:gap-3 px-6">
            <span className="text-lg">{t(currentProject.descriptionKey)}</span>

            <div className="flex lg:flex-col gap-2">
              {currentProject.deploy_link !== "" && (
                <button className="py-2 px-6 rounded-full bg-slate-50 text-black hover:bg-cyan-500 hover:text-white transition-all">
                  <a
                    href={currentProject.deploy_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("projects.deploy")}
                  </a>
                </button>
              )}

              <button className="py-2 px-6 rounded-full bg-cyan-400 hover:bg-cyan-500 dark:bg-cyan-600 dark:hover:bg-cyan-500 transition-all">
                <a
                  href={currentProject.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("projects.repository")}
                </a>
              </button>
            </div>

            {t(currentProject.disclaimerKey) && (
              <span className="text-xs italic lg:inline hidden">
                {t("projects.disclaimer")} {t(currentProject.disclaimerKey)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
