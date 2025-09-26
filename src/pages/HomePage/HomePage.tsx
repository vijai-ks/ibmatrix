import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

import homePageStyles from "./HomePage.module.scss";
import strategicPlanningLogo from "../../assets/strategicPlanning.svg";
import teamBuildingLogo from "../../assets/teamBuilding.svg";
import partnershipDrivenLogo from "../../assets/partnershipDriven.svg";
import ourTeamLogo from "../../assets/ourTeam.jpg";
import IbMatrixLogo from "../../assets/ibMatrixLogo.svg";
import AboutPage from "../AboutPage/AboutPage";
import TextLooper from "../../components/TextLooper/TextLooper";
import ScheduleMeetingButton from "../../components/ScheduleMeeting/ScheduleMeetingButton";

const HomePage = () => {
  return (
    <div id="home" className={homePageStyles.homePage}>
      <div className={homePageStyles.homePageContainer}>
        <div className={homePageStyles.solutionsContainer}>
          <div className={homePageStyles.mainTitle}>
            Your Strategic Business Partner for
          </div>
          <div className={homePageStyles.textLooper}>
            <TextLooper />
          </div>
          <ScheduleMeetingButton buttonText="Talk To Our Experts" />
        </div>
        <div className={homePageStyles.servicesContainer} id="our-expertise">
          <h2>Our Expertise in</h2>
          <div className={homePageStyles.serviceCardsContainer}>
            <div className={homePageStyles.serviceCard}>
              <img
                className={homePageStyles.serviceLogo}
                src={strategicPlanningLogo}
                alt="Strategic Planning"
              />
              <h3 className={homePageStyles.serviceTitle}>
                Go-to-Market & Growth Systems
              </h3>
              <div className={homePageStyles.serviceDescription}>
                From GTM Planning to execution - We build for growth.
              </div>
              <div className={homePageStyles.learnMoreText}>Learn More</div>
            </div>
            <div className={homePageStyles.serviceCard}>
              <img
                className={homePageStyles.serviceLogo}
                src={teamBuildingLogo}
                alt="Team Building"
              />
              <h3 className={homePageStyles.serviceTitle}>
                Executive Staffing
              </h3>
              <div className={homePageStyles.serviceDescription}>
                Your partner in finding and closing the right leadership fit.
              </div>
              <div className={homePageStyles.learnMoreText}>Learn More</div>
            </div>
            <div className={homePageStyles.serviceCard}>
              <img
                className={homePageStyles.serviceLogo}
                src={partnershipDrivenLogo}
                alt="Partnership Driven Growth"
              />
              <h3 className={homePageStyles.serviceTitle}>
                DAAS-Driven Strategic Consulting
              </h3>
              <div className={homePageStyles.serviceDescription}>
                Turn insights into action for sustainable growth.
              </div>
              <div className={homePageStyles.learnMoreText}>Learn More</div>
            </div>
          </div>
        </div>
      </div>
      <AboutPage />
      <div className={homePageStyles.aboutTeam}>
        <div>
          <img
            className={homePageStyles.ourTeamImage}
            src={ourTeamLogo}
            alt="Strategic Planning"
          />
        </div>
        <div>
          <div className={homePageStyles.ourTeamHeading}>Our Team</div>
          <div className={homePageStyles.aboutTeamPoint}>
            <CheckCircleIcon className={homePageStyles.checkCircleIcon} />
            <span>
              Industry experts, with a proven track record in building
              leadership teams for growth-focused and enterprised companies
              delivered a significant impact on organizational success
            </span>
          </div>
          <div className={homePageStyles.aboutTeamPoint}>
            <CheckCircleIcon className={homePageStyles.checkCircleIcon} />
            <span>
              Industry experts who have successfully built growth engines for
              SNEs and enterprises, driving revenue scaling by 3X and beyond
            </span>
          </div>
          <div className={homePageStyles.aboutTeamPoint}>
            <CheckCircleIcon className={homePageStyles.checkCircleIcon} />
            <span>
              Industry experts specializing in DaaS-driven strategic consulting
              empower organizations to leverage data as a service, enabling
              scalable, data-centric growth and transformative business
              outcomes.
            </span>
          </div>
        </div>
      </div>
      <div className={homePageStyles.contactUsContainer} id="contact-us">
        <div className={homePageStyles.contactUs}>
          <div>
            <h2 className={homePageStyles.meetingWithUsHeading}>
              Want to schedule a meeting <br />
              with our experts?
            </h2>
            <p className={homePageStyles.meetingSubHeading}>
              Let's talk Clear. Concise. Compelling ideas for your business!
            </p>
          </div>
          <ScheduleMeetingButton buttonText="Get Started" />
        </div>
      </div>
      <div className={homePageStyles.footerContainer}>
        <div className={homePageStyles.footerContentsContainer}>
          <div className={homePageStyles.contactUsInFooter}>
            <div className={homePageStyles.ibMatrix}>
              <img
                src={IbMatrixLogo}
                alt="IB Matrix Logo"
                className={homePageStyles.logo}
              />
              <div className={homePageStyles.title}>IB Matrix</div>
            </div>
            <div className={homePageStyles.footerContents}>
              Let's build momentum around <br />
              Your business
            </div>
            <div className={homePageStyles.footerContents}>
              Call us: + (091)-123-ELLA <br />
              Email: email@domain.com
            </div>
          </div>
          <div>
            <h4 className={homePageStyles.services}>SERVICES</h4>
            <div className={homePageStyles.footerServices}>
              <div>LOREM</div>
              <div>LOREM</div>
              <div>LOREM</div>
              <div>LOREM</div>
            </div>
          </div>
          <div>
            <h4 className={homePageStyles.services}>CONTACT</h4>
            <div className={homePageStyles.footerServices}>
              <div>ABOUT</div>
              <div>CONTACT US</div>
            </div>
          </div>
          <div className={homePageStyles.newsLetterSection}>
            <div>
              <div className={homePageStyles.newsLetterTitle}>
                Newsletter Sign Up
              </div>
              <div className={homePageStyles.newsLetterDescription}>
                Receive our latest updates about our products & promotions.
              </div>
            </div>
            <div className={homePageStyles.subscribeSection}>
              <input
                className={homePageStyles.emailInput}
                placeholder="Enter your email address"
              />
              <button className={homePageStyles.subscribeButton}>
                Subscribe
              </button>
            </div>
            <div className={homePageStyles.socialIcons}>
              <FacebookOutlinedIcon />
              <XIcon />
              <InstagramIcon />
            </div>
          </div>
        </div>
        <div className={homePageStyles.footerBottom}>
          <div className={homePageStyles.copyrightText}>© 2025 IB Matrix</div>
          <div>Privacy Policy | Terms and Conditions | Returns Policy</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
