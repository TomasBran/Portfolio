"use client";

import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaHandshake,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { Menu } from "antd";
import { useThemeContext } from "../context/ThemeContext";
import { usePageContext } from "../context/PageContext";
import LanguageSwitcher from "./Navbar/LanguagePicker";
import { useLocale } from "../context/LanguageContext";

const Navbar = () => {
  const { theme, changeTheme } = useThemeContext();
  const { currentSection, setCurrentSection } = usePageContext();

  const { t } = useLocale();

  const onClick = (e) => {
    setCurrentSection(e.key);

    const section = document.getElementById(e.key);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const items = [
    {
      label: t("navbar.home"),
      key: "home",
      icon: <FaHome />,
    },
    {
      label: t("navbar.about_me"),
      key: "about",
      icon: <FaUser />,
    },
    {
      label: t("navbar.projects"),
      key: "projects",
      icon: <FaProjectDiagram />,
    },
    {
      label: t("navbar.hire_me"),
      key: "hire-me",
      icon: <FaHandshake />,
    },
  ];

  return (
    <div className="w-full flex items-center fixed z-50">
      <Menu
        onClick={onClick}
        selectedKeys={[currentSection]}
        mode="horizontal"
        items={items}
        theme={theme}
        className="flex items-center w-screen"
      />
      <div className="flex items-center absolute gap-3 right-4">
        <LanguageSwitcher />
        <button
          onClick={changeTheme}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-300 ease-in-out"
        >
          {theme === "dark" ? (
            <FaMoon className=" text-yellow-300" />
          ) : (
            <FaSun className=" text-yellow-500" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
