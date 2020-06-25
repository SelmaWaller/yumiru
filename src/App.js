import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import variables from "./components/styles/variables";
import sun_evening from "./svgs/icons/sun/sun_evening.png";
import moon_daytime from "./svgs/icons/moon/moon_daytime.gif";
import logo_daytime from "./svgs/logo/logo_daytime.png";
import logo_evening from "./svgs/logo/logo_evening.png";
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
  logo: `url(${logo_daytime})`,
  mainButtonDefault: variables.sunLinkGradient,
  mainButtonShadow: `0 18px 30px -15px ${variables.sunLinkOrange}c2, 0 18px 30px -15px ${variables.sunLinkPink}c2`,
  globalBackground: variables.sunBackground,
  globalBackgroundLight: variables.sunBackgroundLight,
  globalText: variables.sunText,
  contentShadow: `3px -3px 10px ${variables.sunShadowInner}, inset -3px 3px 15px ${variables.sunShadowOuter}85, -3px 2px 10px ${variables.sunShadowOuter}, inset 3px -3px 15px ${variables.sunShadowInner}85`,
  //date and time
  lightText: variables.sunTextLight,
  lightTextShadow: `3px 3px 2px ${variables.sunShadowInner}, 3px 3px 10px ${variables.sunShadowInner}, -3px -2px 10px ${variables.sunShadowText}, -2px -2px 2px ${variables.sunShadowText} , -3px -2px 10px ${variables.sunShadowText}, -2px -2px 2px ${variables.sunShadowText}, -3px -2px 10px ${variables.sunShadowText}, -2px -2px 2px ${variables.sunShadowText}`,
  //topButtons
  homeButtonImage: `url(${logo_daytime})`,
  modeButtonImage: `url(${moon_daytime})`,
  topButtonShadow: `inset 3px -3px 3px ${variables.sunShadowInner}, inset -5px 5px 5px ${variables.sunShadowOuter}`,
  //games and other stuff
  gameTag: `url(${games_daytime})`,
  otherTag: `url(${other_daytime})`,
};

const evening = {
  //global
  logo: `url(${logo_evening})`,
  mainButtonDefault: variables.moonLinkGradient,
  mainButtonShadow: `0 18px 30px -15px ${variables.moonLinkOrange}40, 0 18px 30px -15px ${variables.moonLinkPink}40`,
  globalBackground: variables.moonBackground,
  globalBackgroundLight: variables.moonBackgroundDark,
  globalText: variables.moonText,
  contentBackgroundHover: variables.moonBackgroundLight,
  contentShadow: `3px -3px 10px ${variables.moonShadowInner}, inset -3px 3px 15px ${variables.moonShadowDark}85, -3px 2px 10px ${variables.moonShadowDark}, inset 3px -3px 15px ${variables.moonShadowInner}85`,
  //date and time
  lightText: variables.moonTextLight,
  lightTextShadow: `3px 3px 2px ${variables.moonShadowInner}, 3px 3px 10px ${variables.moonShadowInner}, -3px -2px 10px ${variables.moonShadowDark}, -2px -2px 2px ${variables.moonShadowDark}, -3px -2px 10px ${variables.moonShadowDark}, -2px -2px 2px ${variables.moonShadowDark}, -3px -2px 10px ${variables.moonShadowDark}, -2px -2px 2px ${variables.moonShadowDark}`,
  //topButtons
  homeButtonImage: `url(${logo_evening})`,
  modeButtonImage: `url(${sun_evening})`,
  topButtonShadow: `inset -5px 5px 5px ${variables.moonShadowOuter}, inset 3px -3px 3px ${variables.moonShadowInner}`,
  //games and other stuff
  gameTag: `url(${games_evening})`,
  otherTag: `url(${other_evening})`,
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
