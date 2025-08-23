import headerStyles from "./Header.module.scss";
import IbMatrixLogo from "../../assets/ibMatrixLogo.svg";

const Header = () => {
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
          <div className={headerStyles.pageName}>Home</div>
          <div className={headerStyles.pageName}>Our Expertise</div>
          <div className={headerStyles.pageName}>About Us</div>
          <div className={headerStyles.pageName}>Contact Us</div>
        </div>
        <button className={headerStyles.getStartedButton}>TALK TO OUR EXPERTS</button>
      </div>
    </div>
  );
};

export default Header;
