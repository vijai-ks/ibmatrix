import aboutPageStyles from "./AboutPage.module.scss";
import ourVision from "../../assets/ourVision.jpg";
import ourMission from "../../assets/ourMission.jpg";

const AboutPage = () => {
  return (
    <div className={aboutPageStyles.aboutPage} id="about-us">
      <div className={aboutPageStyles.visionMissionContainer}>
        <div>
          <img
            className={aboutPageStyles.aboutUsLogo}
            src={ourVision}
            alt="Our Vision"
          />
        </div>
        <div className={aboutPageStyles.headingsContainer}>
          <h1 className={aboutPageStyles.headings}>Our Vision</h1>
          <div className={aboutPageStyles.visionMissionStatements}>
            <div>
              To be the trusted partner powering transformative business growth
            </div>
            <div>through innovation, leadership</div>
            <div>and data-driven strategy.</div>
          </div>
        </div>
      </div>
      <div className={aboutPageStyles.visionMissionContainer}>
        <div className={aboutPageStyles.headingsContainer}>
          <h1 className={aboutPageStyles.headings}>Our Mission</h1>
          <div className={aboutPageStyles.visionMissionStatements}>
            <div>
              We help organizations scale faster by building growth engines,
            </div>
            <div>placing exceptional leaders,</div>
            <div>
              and turning data into actionable insights that drive lasting
              success.
            </div>
          </div>
        </div>
        <div>
          <img
            className={aboutPageStyles.aboutUsLogo}
            src={ourMission}
            alt="Our Mission"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
