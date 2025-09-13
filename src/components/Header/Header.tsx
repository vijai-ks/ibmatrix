import { useState, useEffect } from "react";

import clsx from "clsx";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "motion/react";

import headerStyles from "./Header.module.scss";
import IbMatrixLogo from "../../assets/ibMatrixLogo.svg";
import { type ITheme } from "../../types/common";

const getInitialTheme = (): ITheme => {
  const stored = localStorage.getItem("theme") as ITheme;

  if (stored) return stored;

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  return prefersDark ? "dark" : "light";
};

const Header = () => {
  const [selectedPage, setSelectedPage] = useState("Home");
  const [theme, setTheme] = useState<ITheme>(getInitialTheme());

  useEffect(() => {
    document.querySelector("body")?.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const syncTheme = (e: StorageEvent) => {
      if (e.key === "theme" && e.newValue) {
        updateTheme((e.newValue as ITheme) || "light");
      }
    };

    window.addEventListener("storage", syncTheme);
    return () => window.removeEventListener("storage", syncTheme);
  }, []);

  const updateTheme = (newTheme: ITheme) => {
    console.log("new theme ", newTheme);
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className={headerStyles.headerContainer}>
      <div className={headerStyles.headerContents}>
        <a
          className={headerStyles.titleContainer}
          href="#home"
          onClick={() => setSelectedPage("Home")}
        >
          <img
            src={IbMatrixLogo}
            alt="IB Matrix Logo"
            className={headerStyles.logo}
          />
          <div className={headerStyles.title}>IB Matrix</div>
        </a>
        <div className={headerStyles.navbar}>
          <a
            href="#home"
            className={clsx(headerStyles.pageName, {
              [headerStyles.active]: selectedPage === "Home",
            })}
            onClick={() => setSelectedPage("Home")}
          >
            Home
          </a>
          <a
            href="#our-expertise"
            className={clsx(headerStyles.pageName, {
              [headerStyles.active]: selectedPage === "Our Expertise",
            })}
            onClick={() => setSelectedPage("Our Expertise")}
          >
            Our Expertise
          </a>
          <a
            href="#about-us"
            className={clsx(headerStyles.pageName, {
              [headerStyles.active]: selectedPage === "About Us",
            })}
            onClick={() => setSelectedPage("About Us")}
          >
            About Us
          </a>
          <a
            href="#contact-us"
            className={clsx(headerStyles.pageName, {
              [headerStyles.active]: selectedPage === "Contact Us",
            })}
            onClick={() => setSelectedPage("Contact Us")}
          >
            Contact Us
          </a>
        </div>
        <div className={headerStyles.actionsContainer}>
          <button className={headerStyles.getStartedButton}>
            TALK TO OUR EXPERTS
          </button>
          <span
            onClick={() => updateTheme(theme === "dark" ? "light" : "dark")}
            className={headerStyles.themeIconContainer}
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "dark" ? (
                <motion.div
                  key="moon"
                  initial={{ x: -20, opacity: 0, rotate: -45 }}
                  animate={{ x: 0, opacity: 1, rotate: 0 }}
                  exit={{ x: 20, opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={headerStyles.iconWrapper}
                >
                  <MoonIcon className={headerStyles.moonIcon} />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={headerStyles.iconWrapper}
                >
                  <SunIcon className={headerStyles.sunIcon} />
                </motion.div>
              )}
            </AnimatePresence>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
