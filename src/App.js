import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import variables from "./components/styles/variables";
import moon_daytime from "./svgs/icons/moon/moon_daytime.gif";
import sun_evening from "./svgs/icons/sun/sun_evening.gif";
import logo_daytime from "./svgs/logo/logo_daytime.png";
import logo_evening from "./svgs/logo/logo_evening.png";
import logo_icon_daytime from "./svgs/logo/logo_no-text_daytime.png";
import logo_icon_evening from "./svgs/logo/logo_no-text_evening.png";
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
  logo: `url(${logo_daytime})`,
  logoShadow: `3px -3px 2px ${variables.sunShadowInner}, 3px -3px 10px ${variables.sunShadowInner}, -3px 2px 10px ${variables.sunShadowText}, -2px 2px 2px ${variables.sunShadowText} , -3px 2px 10px ${variables.sunShadowText}, -2px 2px 2px ${variables.sunShadowText}, -3px 2px 10px ${variables.sunShadowText}, -2px 2px 2px ${variables.sunShadowText}`,
  mainButtonDefault: variables.sunLinkGradient,
  mainButtonShadow: `0 18px 30px -15px ${variables.sunLinkOrange}c2, 0 18px 30px -15px ${variables.sunLinkPink}c2`,
  globalBackground: variables.sunBackground,
  globalBackgroundLight: variables.sunBackgroundLight,
  globalText: variables.sunText,
  contentShadow: `5px -5px 15px ${variables.sunShadowOuter}25, inset -5px 5px 20px ${variables.sunShadowInner}, -5px 5px 15px ${variables.sunShadowOuter}90, inset 5px -5px 5px ${variables.sunShadowOuter}, inset 1px -1px 25px ${variables.sunShadowOuter}, inset 8px -8px 15px ${variables.sunShadowInner}00, inset -5px 5px 10px ${variables.sunShadowOuter}00`,
  contentShadowHover: `5px -5px 15px ${variables.sunShadowOuter}00, inset -5px 5px 20px ${variables.sunShadowInner}00, -5px 5px 15px ${variables.sunShadowOuter}00, inset 5px -5px 5px ${variables.sunShadowOuter}00, inset 1px -1px 25px ${variables.sunShadowOuter}00, inset 8px -8px 15px ${variables.sunShadowInner}, inset -4px 4px 10px ${variables.sunShadowOuter}`,
  //date and time
  lightText: variables.sunTextLight,
  lightTextShadow: `3px 3px 2px ${variables.sunShadowInner}, 3px 3px 10px ${variables.sunShadowInner}, -3px -2px 10px ${variables.sunShadowText}, -2px -2px 2px ${variables.sunShadowText} , -3px -2px 10px ${variables.sunShadowText}, -2px -2px 2px ${variables.sunShadowText}, -3px -2px 10px ${variables.sunShadowText}, -2px -2px 2px ${variables.sunShadowText}`,
  //topButtons
  homeButtonImage: `url(${logo_icon_daytime})`,
  modeButtonImage: `url(${moon_daytime})`,
  topButtonShadow: `3px -3px 10px ${variables.sunShadowOuter}15, inset -3px 3px 4px ${variables.sunShadowInner}, -3px 3px 10px ${variables.sunShadowOuter}80, inset 2px -2px 2px ${variables.sunShadowOuter}, inset 3px -3px 10px ${variables.sunShadowOuter}, inset 3px -3px 3px ${variables.sunShadowInner}00, inset -5px 5px 5px ${variables.sunShadowOuter}00`,
  topButtonShadowHover: `3px -3px 10px ${variables.sunShadowOuter}00, inset -3px 3px 4px ${variables.sunShadowInner}00, -3px 3px 10px ${variables.sunShadowOuter}00, inset 2px -2px 2px ${variables.sunShadowOuter}00, inset 3px -3px 10px ${variables.sunShadowOuter}00, inset 3px -3px 3px ${variables.sunShadowInner}, inset -5px 5px 5px ${variables.sunShadowOuter}`,
  //games and other stuff
  gameTag: `url(${games_daytime})`,
  otherTag: `url(${other_daytime})`,
};

const evening = {
  //global
  logo: `url(${logo_evening})`,
  logoShadow: `3px -3px 2px ${variables.moonShadowInner}, 3px -3px 10px ${variables.moonShadowInner}, -3px 2px 10px ${variables.moonShadowOuter}, -2px 2px 2px ${variables.moonShadowOuter} , -3px 2px 10px ${variables.moonShadowOuter}, -2px 2px 2px ${variables.moonShadowOuter}, -3px 2px 10px ${variables.moonShadowOuter}, -2px 2px 2px ${variables.moonShadowOuter}`,
  mainButtonDefault: variables.moonLinkGradient,
  mainButtonShadow: `0 18px 30px -15px ${variables.moonLinkOrange}40, 0 18px 30px -15px ${variables.moonLinkPink}40`,
  globalBackground: variables.moonBackground,
  globalBackgroundLight: variables.moonBackgroundDark,
  globalText: variables.moonText,
  contentBackgroundHover: variables.moonBackgroundLight,
  contentShadow: `5px -5px 15px ${variables.moonShadowOuter}25, inset -5px 5px 20px ${variables.moonShadowInner}, -5px 5px 15px ${variables.moonShadowOuter}90, inset 5px -5px 5px ${variables.moonShadowOuter}, inset 1px -1px 25px ${variables.moonShadowOuter}, inset 8px -8px 15px ${variables.moonShadowInner}00, inset -5px 5px 10px ${variables.moonShadowOuter}00`,
  contentShadowHover: `5px -5px 15px ${variables.moonShadowOuter}00, inset -5px 5px 20px ${variables.moonShadowInner}00, -5px 5px 15px ${variables.moonShadowOuter}00, inset 5px -5px 5px ${variables.moonShadowOuter}00, inset 1px -1px 25px ${variables.moonShadowOuter}00, inset 8px -8px 15px ${variables.moonShadowInner}, inset -4px 4px 10px ${variables.moonShadowOuter}`,
  //date and time
  lightText: variables.moonTextLight,
  lightTextShadow: `3px 3px 2px ${variables.moonShadowInner}, 3px 3px 10px ${variables.moonShadowInner}, -3px -2px 10px ${variables.moonShadowOuter}, -2px -2px 2px ${variables.moonShadowOuter}, -3px -2px 10px ${variables.moonShadowOuter}, -2px -2px 2px ${variables.moonShadowOuter}, -3px -2px 10px ${variables.moonShadowOuter}, -2px -2px 2px ${variables.moonShadowOuter}`,
  //topButtons
  homeButtonImage: `url(${logo_icon_evening})`,
  modeButtonImage: `url(${sun_evening})`,
  topButtonShadow: `3px -3px 10px ${variables.moonShadowOuter}15, inset -3px 3px 4px ${variables.moonShadowInner}, -3px 3px 10px ${variables.moonShadowOuter}80, inset 2px -2px 2px ${variables.moonShadowOuter}, inset 3px -3px 10px ${variables.moonShadowOuter}`,
  topButtonShadowHover: `inset 3px -3px 3px ${variables.moonShadowInner}, inset -5px 5px 5px ${variables.moonShadowOuter}`,
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
