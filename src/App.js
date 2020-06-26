import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import variables from "./components/styles/variables";
import moon_daytime from "./svgs/icons/moon/moon_daytime.gif";
import sun_evening from "./svgs/icons/sun/sun_evening.gif";

//import logo_icon_daytime from "./svgs/logo/logo_new_daytime.png";
//import logo_big_evening from "./svgs/logo/logo_new_evening.png";
import logo_small_daytime from "./svgs/logo/logo_daytime.png";
import logo_small_evening from "./svgs/logo/logo_evening.png";

import logo_icon_daytime from "./svgs/logo/logo_new_daytime.png";
import logo_icon_evening from "./svgs/logo/logo_new_evening.png";
import games_daytime from "./svgs/icons/tags/games_daytime.png";
import games_evening from "./svgs/icons/tags/games_evening.png";
import other_daytime from "./svgs/icons/tags/other_daytime.png";
import other_evening from "./svgs/icons/tags/other_evening.png";

import Global from "./components/styles/global";
import ModeButton from "./components/styles/small-elements/mode-button";
import LiveClock from "./components/global/live-clock";
import HomeButton from "./components/styles/small-elements/home-button";
import Today from "./components/global/today.js";

const day = {
  //global
  logo: `url(${logo_small_daytime})`,
  logoShadow: `3px -3px 2px ${variables.sunShadowLight}, 3px -3px 10px ${variables.sunShadowLight}, -3px 2px 10px ${variables.sunShadowText}, -2px 2px 2px ${variables.sunShadowText} , -3px 2px 10px ${variables.sunShadowText}, -2px 2px 2px ${variables.sunShadowText}, -3px 2px 10px ${variables.sunShadowText}, -2px 2px 2px ${variables.sunShadowText}`,
  mainButtonDefault: variables.sunButtonDefault,
  mainButtonShadow: `0 18px 30px -15px ${variables.sunLinkOrange}c2, 0 18px 30px -15px ${variables.sunLinkPink}c2`,
  globalBackground: variables.sunBackground,
  globalBackgroundLight: variables.sunBackgroundLight,
  globalText: variables.sunText,
  contentShadow: `3px -3px 10px ${variables.sunShadowDark}15, inset -3px 3px 8px ${variables.sunShadowLight}, -3px 3px 10px ${variables.sunShadowDark}80, inset 2px -2px 2px ${variables.sunShadowDark}, inset 3px -3px 10px ${variables.sunShadowDark}f5, inset 3px -3px 3px ${variables.sunShadowLight}00, inset -5px 5px 5px ${variables.sunShadowDark}00`,
  contentShadowHover: `5px -5px 8px ${variables.sunShadowDark}00, inset -5px 5px 10px ${variables.sunShadowLight}00, -5px 5px 15px ${variables.sunShadowDark}00, inset 5px -5px 5px ${variables.sunShadowDark}00, inset 1px -1px 25px ${variables.sunShadowDark}00, inset 8px -8px 15px ${variables.sunShadowLight}, inset -4px 4px 10px ${variables.sunShadowDark}`,
  //date and time
  lightText: variables.sunTextLight,
  lightTextShadow: `3px 3px 2px ${variables.sunShadowLight}, 3px 3px 10px ${variables.sunShadowLight}, -3px -2px 10px ${variables.sunShadowText}, -2px -2px 2px ${variables.sunShadowText} , -3px -2px 10px ${variables.sunShadowText}, -2px -2px 2px ${variables.sunShadowText}, -3px -2px 10px ${variables.sunShadowText}, -2px -2px 2px ${variables.sunShadowText}`,
  //topButtons
  homeButtonImage: `url(${logo_icon_daytime})`,
  modeButtonImage: `url(${moon_daytime})`,
  topButtonShadow: `3px -3px 10px ${variables.sunShadowDark}15, inset -3px 3px 4px ${variables.sunShadowLight}, -3px 3px 10px ${variables.sunShadowDark}80, inset 2px -2px 2px ${variables.sunShadowDark}, inset 3px -3px 10px ${variables.sunShadowDark}, inset 3px -3px 3px ${variables.sunShadowLight}00, inset -5px 5px 5px ${variables.sunShadowDark}00`,
  topButtonShadowHover: `3px -3px 10px ${variables.sunShadowDark}00, inset -3px 3px 4px ${variables.sunShadowLight}00, -3px 3px 10px ${variables.sunShadowDark}00, inset 2px -2px 2px ${variables.sunShadowDark}00, inset 3px -3px 10px ${variables.sunShadowDark}00, inset 3px -3px 3px ${variables.sunShadowLight}, inset -5px 5px 5px ${variables.sunShadowDark}`,
  //games and other stuff
  gameTag: `url(${games_daytime})`,
  otherTag: `url(${other_daytime})`,
};

const evening = {
  //global
  logo: `url(${logo_small_evening})`,
  logoShadow: `3px -3px 2px ${variables.moonShadowLight}, 3px -3px 10px ${variables.moonShadowLight}, -3px 2px 10px ${variables.moonShadowOuter}, -2px 2px 2px ${variables.moonShadowOuter} , -3px 2px 10px ${variables.moonShadowOuter}, -2px 2px 2px ${variables.moonShadowOuter}, -3px 2px 10px ${variables.moonShadowOuter}, -2px 2px 2px ${variables.moonShadowOuter}`,
  mainButtonDefault: variables.moonButtonDefault,
  mainButtonShadow: `0 18px 30px -15px ${variables.moonLinkOrange}40, 0 18px 30px -15px ${variables.moonLinkPink}40`,
  globalBackground: variables.moonBackground,
  globalBackgroundLight: variables.moonBackgroundDark,
  globalText: variables.moonText,
  contentBackgroundHover: variables.moonBackgroundLight,
  contentShadow: `3px -3px 10px ${variables.moonShadowDark}15, inset -3px 3px 8px ${variables.moonShadowLight}, -3px 3px 10px ${variables.moonShadowDark}80, inset 2px -2px 2px ${variables.moonShadowDark}, inset 3px -3px 10px ${variables.moonShadowDark}f5, inset 3px -3px 3px ${variables.moonShadowLight}00, inset -5px 5px 5px ${variables.moonShadowDark}00`,
  contentShadowHover: `5px -5px 8px ${variables.moonShadowDark}00, inset -5px 5px 10px ${variables.moonShadowLight}00, -5px 5px 15px ${variables.moonShadowDark}00, inset 5px -5px 5px ${variables.moonShadowDark}00, inset 1px -1px 25px ${variables.moonShadowDark}00, inset 8px -8px 15px ${variables.moonShadowLight}, inset -4px 4px 10px ${variables.moonShadowDark}`,
  //date and time
  lightText: variables.moonTextLight,
  lightTextShadow: `3px 3px 2px ${variables.moonShadowLight}, 3px 3px 10px ${variables.moonShadowLight}, -3px -2px 10px ${variables.moonShadowDark}, -2px -2px 2px ${variables.moonShadowDark}, -3px -2px 10px ${variables.moonShadowDark}, -2px -2px 2px ${variables.moonShadowDark}, -3px -2px 10px ${variables.moonShadowDark}, -2px -2px 2px ${variables.moonShadowDark}`,
  //topButtons
  homeButtonImage: `url(${logo_icon_evening})`,
  modeButtonImage: `url(${sun_evening})`,
  topButtonShadow: `3px -3px 10px ${variables.moonShadowDark}15, inset -3px 3px 4px ${variables.moonShadowLight}, -3px 3px 10px ${variables.moonShadowDark}80, inset 2px -2px 2px ${variables.moonShadowDark}, inset 3px -3px 10px ${variables.moonShadowDark}`,
  topButtonShadowHover: `3px -3px 10px ${variables.moonShadowDark}00, inset -3px 3px 4px ${variables.moonShadowLight}00, -3px 3px 10px ${variables.moonShadowDark}00, inset 2px -2px 2px ${variables.moonShadowDark}00, inset 3px -3px 10px ${variables.moonShadowDark}00, inset 3px -3px 3px ${variables.moonShadowLight}, inset -5px 5px 5px ${variables.moonShadowDark}`,
  //games and other stuff
  gameTag: `url(${games_evening})`,
  otherTag: `url(${other_evening})`,
};

function App({ children }) {
  const [daytime, setDaytime] = useState(true);
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
