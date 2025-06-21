import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

import homePageStyles from "./HomePage.module.scss";
import businessAnalyticsSample from "../../assets/businessAnalyticsSample.svg";
import strategicPlanningLogo from "../../assets/strategicPlanning.svg";
import teamBuildingLogo from "../../assets/teamBuilding.svg";
import partnershipDrivenLogo from "../../assets/partnershipDriven.svg";
import servicesLogo from "../../assets/servicesOffered.svg";
import IbMatrixLogo from "../../assets/ibMatrixLogo.svg";

const HomePage = () => {
  return (
    <div>
      <div className={homePageStyles.homePageContainer}>
        <div className={homePageStyles.solutionsContainer}>
          <div>
            <h1 className={homePageStyles.solutionsTitle}>
              Best Solution for <br /> your business growth
            </h1>
            <p className={homePageStyles.solutionsDescription}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi..
            </p>
            <button className={homePageStyles.primaryButton}>Know more</button>
          </div>
          <div className={homePageStyles.cardsContainer}>
            <div className={homePageStyles.firstCard}></div>
            <div className={homePageStyles.secondCard}></div>
            <div className={homePageStyles.thirdCard}></div>
          </div>
        </div>
        <div className={homePageStyles.servicesContainer}>
          <div className={homePageStyles.specializationContainer}>
            <h2 className={homePageStyles.specializeTitle}>
              We specialize <br /> in.
            </h2>
            <img
              className={homePageStyles.specializationImage}
              src={businessAnalyticsSample}
              alt="Business Analytics Sample"
            />
            <p className={homePageStyles.specializationDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices
            </p>
            <button className={homePageStyles.primaryButton}>Get Quote</button>
          </div>
          <div className={homePageStyles.serviceCardsContainer}>
            <div className={homePageStyles.serviceCard}>
              <img
                className={homePageStyles.serviceLogo}
                src={strategicPlanningLogo}
                alt="Strategic Planning"
              />
              <h3 className={homePageStyles.serviceTitle}>
                Strategic GTM Planning
              </h3>
              <div className={homePageStyles.serviceDescription}>
                Strategic GTM Planning Lorem ipsum dolor sit amet consectetur
                adipiscing.
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
                Team Building & Consulting
              </h3>
              <div className={homePageStyles.serviceDescription}>
                Comprehensive support from assembling top-tier teams to
                providing expert advisory services.
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
                Partnership-Driven Growth
              </h3>
              <div className={homePageStyles.serviceDescription}>
                Collaborating closely with our clients to streamline processes
                and maximize opportunities.
              </div>
              <div className={homePageStyles.learnMoreText}>Learn More</div>
            </div>
          </div>
        </div>
      </div>
      <div className={homePageStyles.aboutTeam}>
        <div className={homePageStyles.whiteBoard}></div>
        <div>
          <div className={homePageStyles.ourTeamHeading}>Our Team</div>
          <div className={homePageStyles.aboutTeamPoint}>
            <CheckCircleIcon className={homePageStyles.checkCircleIcon} />
            <span>
              Our dynamic team thrives on turning market challenges into growth
              opportunities.
            </span>
          </div>
          <div className={homePageStyles.aboutTeamPoint}>
            <CheckCircleIcon className={homePageStyles.checkCircleIcon} />
            <span>
              At IB Matrix, we take a hands-on approach—collaborating closely
              with clients to implement strategies that exceed functional goals
              and drive revenue growth.
            </span>
          </div>
          <div className={homePageStyles.aboutTeamPoint}>
            <CheckCircleIcon className={homePageStyles.checkCircleIcon} />
            <span>
              "Discover how our innovative solutions and dedication to
              excellence drive your business forward. Welcome to IB Matrix—where
              your success is our mission.
            </span>
          </div>
        </div>
      </div>
      <div className={homePageStyles.servicesOffered}>
        <div className={homePageStyles.servicesOfferedContainer}>
          <h2 className={homePageStyles.servicesOfferedTitle}>
            Services Offered
          </h2>
          <div>
            <div className={homePageStyles.servicesOfferedPoint}>
              <TaskAltIcon className={homePageStyles.taskAltIcon} />
              <span>UI/UX audit and design</span>
            </div>
            <div className={homePageStyles.servicesOfferedPoint}>
              <TaskAltIcon className={homePageStyles.taskAltIcon} />
              <span>Custom Website and app development</span>
            </div>
            <div className={homePageStyles.servicesOfferedPoint}>
              <TaskAltIcon className={homePageStyles.taskAltIcon} />
              <span>Digital consulting and Solutions</span>
            </div>
            <div className={homePageStyles.servicesOfferedPoint}>
              <TaskAltIcon className={homePageStyles.taskAltIcon} />
              <span>GTM consulting</span>
            </div>
            <div className={homePageStyles.servicesOfferedPoint}>
              <TaskAltIcon className={homePageStyles.taskAltIcon} />
              <span>Partnership</span>
            </div>
          </div>
        </div>
        <div>
          <img
            className={homePageStyles.servicesLogo}
            src={servicesLogo}
            alt="Services logo"
          />
        </div>
      </div>
      <div className={homePageStyles.contactUsContainer}>
        <div className={homePageStyles.contactUs}>
          <div>
            <h2 className={homePageStyles.meetingWithUsHeading}>
              Want to schedule a meeting <br />
              with our experts?
            </h2>
            <p className={homePageStyles.meetingSubHeading}>
              Let's talk Clear. Concise. Compelling ideas for your brand!
            </p>
          </div>
          <button className={homePageStyles.getStartedButton}>
            Get Started
          </button>
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
