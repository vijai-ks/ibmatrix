import { PopupButton } from "react-calendly";

import scheduleMeetingButtonStyles from "./ScheduleMeetingButton.module.scss";
import { useTheme } from "../../context/ThemeContext";

const calendlySettings = {
  light: {
    backgroundColor: "ffffff",
    primaryColor: "3781ee",
    textColor: "4d5055",
    hideEventTypeDetails: false,
    hideLandingPageDetails: false,
  },
  dark: {
    backgroundColor: "181818",
    primaryColor: "3781ee",
    textColor: "ffffff",
    hideEventTypeDetails: false,
    hideLandingPageDetails: false,
  },
};

interface ScheduleMeetingButtonProps {
  buttonText: string;
}

const ScheduleMeetingButton = ({ buttonText }: ScheduleMeetingButtonProps) => {
  const { theme } = useTheme();

  return (
    <PopupButton
      url="https://calendly.com/vijaisivakumar2001/talk-to-our-experts?hide_gdpr_banner=1"
      rootElement={document.getElementById("root") as HTMLElement}
      text={buttonText}
      className={scheduleMeetingButtonStyles.scheduleMeetingButton}
      pageSettings={calendlySettings[theme]}
    />
  );
};

export default ScheduleMeetingButton;
