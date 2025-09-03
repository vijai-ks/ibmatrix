import { useState } from "react";

import clsx from "clsx";

import headerStyles from "./Header.module.scss";
import IbMatrixLogo from "../../assets/ibMatrixLogo.svg";

const Header = () => {
  const [selectedPage, setSelectedPage] = useState("Home");

  return (
    <div className={headerStyles.headerContainer}>
      <div className={headerStyles.headerContents}>
        <div className={headerStyles.titleContainer}>
          <img
            src={IbMatrixLogo}
            alt="IB Matrix Logo"
            className={headerStyles.logo}
          />
          <div className={headerStyles.title}>IB Matrix</div>
        </div>
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
        <button className={headerStyles.getStartedButton}>
          TALK TO OUR EXPERTS
        </button>
      </div>
    </div>
  );
};

export default Header;
