import variables from "../../components/styles/variables";

import moon_evening from "../../illustrations/moon/moon_evening.gif";
import house_evening from "../../illustrations/house/house_evening.png";

const evening = {
  //global
  titleShadow: `3px -3px 2px ${variables.moonShadowLight}, 3px -3px 10px ${variables.moonShadowLight}, -3px 2px 10px ${variables.moonShadowDark}, -2px 2px 2px ${variables.moonShadowDark} , -3px 2px 10px ${variables.moonShadowDark}, -2px 2px 2px ${variables.moonShadowDark}, -3px 2px 10px ${variables.moonShadowDark}, -2px 2px 2px ${variables.moonShadowDark}`,
  titleShadowMobile: `1px -1px 2px ${variables.moonShadowLight}, 2px -2px 4px ${variables.moonShadowLight}, -3px 2px 10px ${variables.moonShadowDark}, -2px 2px 2px ${variables.moonShadowDark} , -3px 2px 10px ${variables.moonShadowDark}, -2px 2px 2px ${variables.moonShadowDark}, -3px 2px 10px ${variables.moonShadowDark}, -2px 2px 2px ${variables.moonShadowDark}`,
  buttonDefault: variables.moonButtonDefault,
  //old buttonShadow: `0 13px 30px -15px ${variables.moonOrange}40, 0 13px 30px -15px ${variables.moonPink}40`,
  buttonShadow: `0 13px 30px -15px ${variables.moonDarkBlue}40, 0 13px 30px -15px ${variables.moonAqua}40`,
  globalBackground: variables.moonBackground,
  globalBackgroundLight: variables.moonBackgroundLight,
  globalText: variables.moonText,
  contentShadow: `3px -3px 10px ${variables.moonShadowDark}15, inset -3px 3px 8px ${variables.moonShadowLight}, -3px 3px 10px ${variables.moonShadowDark}80, inset 2px -2px 2px ${variables.moonShadowDark}, inset 3px -3px 10px ${variables.moonShadowDark}f5, inset 3px -3px 3px ${variables.moonShadowLight}00, inset -5px 5px 5px ${variables.moonShadowDark}00`,
  contentShadowHover: `5px -5px 8px ${variables.moonShadowDark}00, inset -5px 5px 10px ${variables.moonShadowLight}00, -5px 5px 15px ${variables.moonShadowDark}00, inset 5px -5px 5px ${variables.moonShadowDark}00, inset 1px -1px 25px ${variables.moonShadowDark}00, inset 8px -8px 15px ${variables.moonShadowLight}, inset -4px 4px 10px ${variables.moonShadowDark}`,
  floatShadow: `-5px 5px 10px ${variables.moonShadowDark}55`,
  globalScroll: variables.moonDimmed,
  globalScrollHover: variables.moonDimmedHover,
  //date, time and logo
  shadowText: variables.moonDimmed,
  lightTextShadow: `3px 3px 2px ${variables.moonShadowLight}, 3px 3px 10px ${variables.moonShadowLight}, -3px -2px 10px ${variables.moonShadowDark}, -2px -2px 2px ${variables.moonShadowDark}, -3px -2px 10px ${variables.moonShadowDark}, -2px -2px 2px ${variables.moonShadowDark}, -3px -2px 10px ${variables.moonShadowDark}, -2px -2px 2px ${variables.moonShadowDark}`,
  lightTextShadowMobile: `1px 1px 1px ${variables.moonShadowLight}, 2px 2px 4px ${variables.moonShadowLight}, -3px -1px 10px ${variables.moonShadowDark}, -2px -2px 2px ${variables.moonShadowDark} , -3px -1px 10px ${variables.moonShadowDark}, -2px -2px 2px ${variables.moonShadowDark}, -3px -1px 10px ${variables.moonShadowDark}, -2px -2px 2px ${variables.moonShadowDark}`,
  //transparentButtons
  homeButtonImage: `url(${house_evening})`,
  modeButtonImage: `url(${moon_evening})`,
  transparentButtonShadow: `3px -3px 10px ${variables.moonShadowDark}15, inset -3px 3px 4px ${variables.moonShadowLight}, -3px 3px 10px ${variables.moonShadowDark}80, inset 2px -2px 2px ${variables.moonShadowDark}, inset 3px -3px 10px ${variables.moonShadowDark}`,
  transparentButtonShadowHover: `3px -3px 10px ${variables.moonShadowDark}00, inset -3px 3px 4px ${variables.moonShadowLight}00, -3px 3px 10px ${variables.moonShadowDark}00, inset 2px -2px 2px ${variables.moonShadowDark}00, inset 3px -3px 10px ${variables.moonShadowDark}00, inset 3px -3px 3px ${variables.moonShadowLight}65, inset -5px 5px 5px ${variables.moonShadowDark}65`,
  transparentButtonShadowActive: `3px -3px 10px ${variables.moonShadowDark}00, inset -3px 3px 4px ${variables.moonShadowLight}00, -3px 3px 10px ${variables.moonShadowDark}00, inset 2px -2px 2px ${variables.moonShadowDark}00, inset 3px -3px 10px ${variables.moonShadowDark}00, inset 3px -3px 3px ${variables.moonShadowLight}, inset -5px 5px 5px ${variables.moonShadowDark}`,
  //alphabets & numbers
  alphabetShadow: `inset 8px -8px 15px ${variables.moonShadowLight}85, inset -4px 4px 10px ${variables.moonShadowDark}`,
  alphabetLine: `1px solid ${variables.moonDimmed}40`,
  counterOrange: variables.moonOrange,
  counterBlue: variables.moonLightBlue,
  //footer
  footer: variables.moonShadowLight,
};

export default evening;
