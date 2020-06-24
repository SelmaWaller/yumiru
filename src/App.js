import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import variables from "./components/styles/variables";
import sun_evening from "./svgs/icons/sun/sun_evening.png";
import moon_daytime from "./svgs/icons/moon/moon_daytime.gif";
import logo_daytime from "./svgs/icons/logo/logo_daytime.svg";
import logo_evening from "./svgs/icons/logo/logo_evening.svg";
import games_daytime from "./svgs/icons/tags/games_daytime.png";
import games_evening from "./svgs/icons/tags/games_evening.png";
import other_daytime from "./svgs/icons/tags/other_daytime.png";
import other_evening from "./svgs/icons/tags/other_evening.png";

import Global from "./components/styles/global";
import ModeButton from "./components/styles/small-elements/mode-button";
import LiveClock from "./components/global/live-clock";
import HomeButton from "./components/styles/small-elements/home-button";
import Today from "./components/global/today.js";

const timeNow = new Date().getHours();

const day = {
  //global
  logoText: variables.sunLogo,
  mainButtonDefault: variables.sunLinkGradient,
  mainButtonShadow: `0 13px 30px -15px ${variables.sunLinkBlue}b0, 0 13px 30px -15px ${variables.sunLinkNeon}b0`,
  mainButtonShadowHover: `0 18px 30px -15px ${variables.sunLinkBlue}c2, 0 18px 30px -15px ${variables.sunLinkNeon}c2`,
  globalBackground: variables.sunBackground,
  globalBackgroundLight: variables.sunBackgroundLight,
  globalText: variables.sunText,
  contentShadow: `3px -3px 10px ${variables.sunShadowInner}, inset -3px 3px 15px ${variables.sunShadowOuter}85, -3px 2px 10px ${variables.sunShadowOuter}, inset 3px -3px 15px ${variables.sunShadowInner}85`,
  //date and time
  lightText: variables.sunTextLight,
  lightTextHover: variables.sunShadowOuter,
  lightTextShadow: `3px 3px 2px ${variables.sunShadowInner}, 3px 3px 10px ${variables.sunShadowInner}, -3px -2px 10px ${variables.sunShadowText}, -2px -2px 2px ${variables.sunShadowText} , -3px -2px 10px ${variables.sunShadowText}, -2px -2px 2px ${variables.sunShadowText}, -3px -2px 10px ${variables.sunShadowText}, -2px -2px 2px ${variables.sunShadowText}`,
  lightTextShadowHover: `3px 3px 2px ${variables.sunShadowInner}, -2px -2px 2px #bac5d2, -2px -2px 5px #bac5d288, -2px -2px 2px #bac5d2, -2px -2px 5px #bac5d288`,
  //topButtons
  homeButtonImage: `url(${logo_daytime})`,
  homeButtonImageWidth: "83px",
  modeButtonImage: `url(${moon_daytime})`,
  topButtonShadow: `inset 3px -3px 3px ${variables.sunShadowInner}, inset -5px 5px 5px ${variables.sunShadowOuter}`,
  //games and other stuff
  gameTag: `url(${games_daytime})`,
  otherTag:  `url(${other_daytime})`,
};

const evening = {
  //global
  logoText: variables.moonLogo,
  mainButtonDefault: variables.sunLinkGradient,
  mainButtonShadow: `0 17px 30px -15px ${variables.moonLinkBlue}30, 0 17px 30px -15px ${variables.moonLinkNeon}30`,
  mainButtonShadowHover: `0 18px 30px -15px ${variables.moonLinkBlue}40, 0 18px 30px -15px ${variables.moonLinkNeon}40`,
  globalBackground: variables.moonBackground,
  globalBackgroundLight: variables.moonBackgroundDark,
  globalText: variables.moonText,
  contentBackgroundHover: variables.moonBackgroundLight,
  contentShadow: `3px -3px 10px ${variables.moonShadowInner}, inset -3px 3px 15px ${variables.moonShadowDark}85, -3px 2px 10px ${variables.moonShadowDark}, inset 3px -3px 15px ${variables.moonShadowInner}85`,
  //date and time
  lightText: variables.moonTextLight,
  lightTextHover: variables.moonTextDark,
  lightTextShadow: `3px 3px 2px ${variables.moonShadowInner}, 3px 3px 10px ${variables.moonShadowInner}, -3px -2px 10px ${variables.moonShadowDark}, -2px -2px 2px ${variables.moonShadowDark}, -3px -2px 10px ${variables.moonShadowDark}, -2px -2px 2px ${variables.moonShadowDark}, -3px -2px 10px ${variables.moonShadowDark}, -2px -2px 2px ${variables.moonShadowDark}`,
  lightTextShadowHover: `3px 3px 2px ${variables.moonShadowInner}, -2px -2px 2px 0f1625, -2px -2px 5px 0f1625, -2px -2px 2px 0f1625, -2px -2px 5px 0f1625`,
  //topButtons
  homeButtonImage: `url(${logo_evening})`,
  homeButtonImageWidth: "80px",
  modeButtonImage: `url(${sun_evening})`,
  topButtonShadow: `inset -5px 5px 5px ${variables.moonShadowOuter}, inset 3px -3px 3px ${variables.moonShadowInner}`,
  //games and other stuff
  gameTag: `url(${games_evening})`,
  otherTag:  `url(${other_evening})`,
};

function App({ children }) {
  const [daytime, setDaytime] = useState(
    timeNow > 5 && timeNow < 21 ? true : false
  );
  const [themeIcon, setThemeIcon] = useState(
    daytime ? moon_daytime : sun_evening
  );
  const [theme, setTheme] = useState(daytime ? day : evening);

  const toggleTheme = () => {
    setDaytime(!daytime);
    themeIcon === moon_daytime
      ? setThemeIcon(sun_evening)
      : setThemeIcon(moon_daytime);
    theme === day ? setTheme(evening) : setTheme(day);
  };

  useEffect(() => {
    document.title = "Yumiru";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Global>
        <Link to="/">
          <HomeButton />
        </Link>
        <LiveClock />
        <Today />
        <ModeButton
          onClick={() => {
            toggleTheme();
          }}
        ></ModeButton>
        {children}
      </Global>
    </ThemeProvider>
  );
}
export default App;
