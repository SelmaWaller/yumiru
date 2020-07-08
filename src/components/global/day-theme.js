import variables from "../../components/styles/variables";

import moon_daytime from "../../svgs/icons/moon/moon_daytime.gif";
import logo_small_daytime from "../../svgs/logo/logo_no-text_daytime.png";
import logo_big_daytime from "../../svgs/logo/logo_big_daytime.png";
import games_daytime from "../../svgs/icons/tags/games_daytime.png";
import other_daytime from "../../svgs/icons/tags/other_daytime.png";

const day = {
  //global
  logo: `url(${logo_small_daytime})`,
  logoMobile: `url(${logo_big_daytime})`,
  title: "unset",
  titleShadow: `3px -3px 2px ${variables.sunShadowLight}, 3px -3px 10px ${variables.sunShadowLight}, -3px 2px 10px ${variables.sunShadowText}, -2px 2px 2px ${variables.sunShadowText} , -3px 2px 10px ${variables.sunShadowText}, -2px 2px 2px ${variables.sunShadowText}, -3px 2px 10px ${variables.sunShadowText}, -2px 2px 2px ${variables.sunShadowText}`,
  titleShadowMobile: `1px -1px 2px ${variables.sunShadowLight}, 2px -2px 4px ${variables.sunShadowLight}, -3px 2px 10px ${variables.sunShadowText}, -2px 2px 2px ${variables.sunShadowText} , -3px 2px 10px ${variables.sunShadowText}, -2px 2px 2px ${variables.sunShadowText}, -3px 2px 10px ${variables.sunShadowText}, -2px 2px 2px ${variables.sunShadowText}`,
  buttonDefault: variables.sunButtonDefault,
  //old buttonShadow: `0 13px 30px -15px ${variables.sunOrange}c2, 0 13px 30px -15px ${variables.sunPink}c2`,
  buttonShadow: `0 13px 30px -15px ${variables.sunSkyBlue}c2, 0 13px 30px -15px ${variables.sunAqua}c2`,
  globalBackground: variables.sunBackground,
  globalBackgroundLight: variables.sunBackgroundLight,
  globalText: variables.sunText,
  contentShadow: `3px -3px 10px ${variables.sunShadowDark}15, inset -3px 3px 8px ${variables.sunShadowLight}, -3px 3px 10px ${variables.sunShadowDark}80, inset 2px -2px 2px ${variables.sunShadowDark}, inset 3px -3px 10px ${variables.sunShadowDark}f5, inset 3px -3px 3px ${variables.sunShadowLight}00, inset -5px 5px 5px ${variables.sunShadowDark}00`,
  contentShadowHover: `5px -5px 8px ${variables.sunShadowDark}00, inset -5px 5px 10px ${variables.sunShadowLight}00, -5px 5px 15px ${variables.sunShadowDark}00, inset 5px -5px 5px ${variables.sunShadowDark}00, inset 1px -1px 25px ${variables.sunShadowDark}00, inset 8px -8px 15px ${variables.sunShadowLight}, inset -4px 4px 10px ${variables.sunShadowDark}`,
  floatShadow: `-5px 5px 10px ${variables.moonShadowLight}15`,
  globalScroll: variables.sunDimmed,
  globalScrollHover: variables.sunDimmedHover,
  //date, time and logo
  shadowText: variables.sunDimmed,
  lightTextShadow: `3px 3px 2px ${variables.sunShadowLight}, 3px 3px 10px ${variables.sunShadowLight}, -3px -2px 10px ${variables.sunShadowText}, -2px -2px 2px ${variables.sunShadowText} , -3px -2px 10px ${variables.sunShadowText}, -2px -2px 2px ${variables.sunShadowText}, -3px -2px 10px ${variables.sunShadowText}, -2px -2px 2px ${variables.sunShadowText}`,
  lightTextShadowMobile: `1px 1px 1px ${variables.sunShadowLight}, 2px 2px 4px ${variables.sunShadowLight}, -3px -1px 10px ${variables.sunShadowText}, -2px -2px 2px ${variables.sunShadowText} , -3px -1px 10px ${variables.sunShadowText}, -2px -2px 2px ${variables.sunShadowText}, -3px -1px 10px ${variables.sunShadowText}, -2px -2px 2px ${variables.sunShadowText}`,
  //transparentButtons
  homeButtonImage: `url(${logo_small_daytime})`,
  modeButtonImage: `url(${moon_daytime})`,
  transparentButtonShadow: `3px -3px 10px ${variables.sunShadowDark}15, inset -3px 3px 4px ${variables.sunShadowLight}, -3px 3px 10px ${variables.sunShadowDark}80, inset 2px -2px 2px ${variables.sunShadowDark}, inset 3px -3px 10px ${variables.sunShadowDark}, inset 3px -3px 3px ${variables.sunShadowLight}00, inset -5px 5px 5px ${variables.sunShadowDark}00`,
  transparentButtonShadowHover: `3px -3px 10px ${variables.sunShadowDark}00, inset -3px 3px 4px ${variables.sunShadowLight}00, -3px 3px 10px ${variables.sunShadowDark}00, inset 2px -2px 2px ${variables.sunShadowDark}00, inset 3px -3px 10px ${variables.sunShadowDark}00, inset 3px -3px 3px ${variables.sunShadowLight}65, inset -5px 5px 5px ${variables.sunShadowDark}65`,
  transparentButtonShadowActive: `3px -3px 10px ${variables.sunShadowDark}00, inset -3px 3px 4px ${variables.sunShadowLight}00, -3px 3px 10px ${variables.sunShadowDark}00, inset 2px -2px 2px ${variables.sunShadowDark}00, inset 3px -3px 10px ${variables.sunShadowDark}00, inset 3px -3px 3px ${variables.sunShadowLight}, inset -5px 5px 5px ${variables.sunShadowDark}`,
  //overview
  gameTag: `url(${games_daytime})`,
  otherTag: `url(${other_daytime})`,
  //alphabet
  alphabetShadow: `inset 8px -8px 15px ${variables.sunShadowLight}85, inset -4px 4px 10px ${variables.sunShadowDark}`,
  alphabetLine: `2px solid ${variables.sunShadowDark}`,
  //footer
  footer: variables.sunShadowDark,
};

export default day;
