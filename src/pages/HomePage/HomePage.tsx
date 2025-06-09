import homePageStyles from "./HomePage.module.scss";
import businessAnalyticsSample from "../../assets/businessAnalyticsSample.svg";
import strategicPlanningLogo from "../../assets/strategicPlanning.svg";
import teamBuildingLogo from "../../assets/teamBuilding.svg";
import partnershipDrivenLogo from "../../assets/partnershipDriven.svg";

const HomePage = () => {
  return (
    <div>
      <div className={homePageStyles.businessContentsContainer}>
        <div className={homePageStyles.solutionsContainer}>
          <div>
            <h1 className={homePageStyles.solutionsTitle}>
              Best Solution for <br /> your business growth
            </h1>
            <p className={homePageStyles.solutionsDescription}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi..
            </p>
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
            <button className={homePageStyles.getQuoteButton}>Get Quote</button>
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
    </div>
  );
};

export default HomePage;
