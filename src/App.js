import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import variables from "./components/styles/variables";
import sun_evening from "./svgs/icons/sun/sun_evening.png";
import moon_daytime from "./svgs/icons/moon/moon_daytime.gif";
import logo_daytime from "./svgs/icons/logo/logo_daytime.svg";
import logo_evening from "./svgs/icons/logo/logo_evening.svg";
import controller from "./svgs/controller/controller.svg";
import controller_daytime from "./svgs/controller/controller_daytime.gif";
import controller_evening from "./svgs/controller/controller_evening.gif";
import popcorn from "./svgs/popcorn/popcorn.svg";
import popcorn_daytime from "./svgs/popcorn/popcorn_daytime.gif";
import popcorn_evening from "./svgs/popcorn/popcorn_evening.gif";

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
  globalText: variables.sunText,
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
  //game stuff
  gameController: `url(${controller})`,
  gameControllerHover: `url(${controller_daytime})`,
  //'other things'
  popcornImage: `url(${popcorn})`,
  popcornImageHover: `url(${popcorn_daytime})`,
};

const evening = {
  //global
  logoText: variables.moonLogo,
  mainButtonDefault: variables.moonLinkGradient,
  mainButtonShadow: `0 17px 30px -15px ${variables.moonLinkBlue}30, 0 17px 30px -15px ${variables.moonLinkNeon}30`,
  mainButtonShadowHover: `0 18px 30px -15px ${variables.moonLinkBlue}40, 0 18px 30px -15px ${variables.moonLinkNeon}40`,
  globalBackground: variables.moonBackground,
  globalText: variables.moonText,
  //date and time
  lightText: variables.moonTextLight,
  lightTextHover: variables.moonTextDark,
  lightTextShadow: `3px 3px 2px ${variables.moonShadowInner}, 3px 3px 10px ${variables.moonShadowInner}, -3px -2px 10px ${variables.moonShadowText}, -2px -2px 2px ${variables.moonShadowText}, -3px -2px 10px ${variables.moonShadowText}, -2px -2px 2px ${variables.moonShadowText}, -3px -2px 10px ${variables.moonShadowText}, -2px -2px 2px ${variables.moonShadowText}`,
  lightTextShadowHover: `3px 3px 2px ${variables.moonShadowInner}, -2px -2px 2px 0f1625, -2px -2px 5px 0f1625, -2px -2px 2px 0f1625, -2px -2px 5px 0f1625`,
  //topButtons
  homeButtonImage: `url(${logo_evening})`,
  homeButtonImageWidth: "80px",
  modeButtonImage: `url(${sun_evening})`,
  topButtonShadow: `inset -5px 5px 5px ${variables.moonShadowOuter}, inset 3px -3px 3px ${variables.moonShadowInner}`,
  //game stuff
  gameController: `url(${controller})`,
  gameControllerHover: `url(${controller_evening})`,
  //'other things'
  popcornImage: `url(${popcorn})`,
  popcornImageHover: `url(${popcorn_evening})`,
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
