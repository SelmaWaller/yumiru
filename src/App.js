import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import variables from "./components/styles/variables";
import sun_default_daytime from "./svgs/icons/sun_default_daytime.svg";
import moon_default_daytime from "./svgs/icons/moon_default_daytime.svg";
import sun_default_evening from "./svgs/icons/sun_default_evening.svg";
import moon_default_evening from "./svgs/icons/moon_default_evening.svg";

import Global from "./components/styles/global";
import ModeButton from "./components/styles/small-elements/mode-button";

const day = {
  mainButtonDefault: variables.sunLinkGradient,
  globalBackground: variables.sunBackground,
  modeButtonImage: `url(${sun_default_daytime})`,
  modeButtonImageHover: `url(${moon_default_daytime})`,
  globalShrinkWidth: "0%",
  globalShrinkHeight: "0vh",
  modeButtonShadow: `inset 3px -3px 3px ${variables.sunShadowInner}, 
  inset -5px 5px 5px ${variables.sunShadowOuter}`,
  // for a better transition solution:
  /* modeButtonShadow: `inset 5px -5px 10px ${variables.sunShadowInner}, -6px 6px 4px ${variables.sunShadowOuter}75,
  inset -5px 5px 10px ${variables.sunShadowOuter}, 5px -5px 10px ${variables.sunShadowInner}`, */
};

const evening = {
  mainButtonDefault: variables.moonLinkGradient,
  globalBackground: variables.moonBackground,
  modeButtonImage: `url(${moon_default_evening})`,
  modeButtonImageHover: `url(${sun_default_evening})`,
  globalShrinkWidth: "100%",
  globalShrinkHeight: "100vh",
  modeButtonShadow: `inset 3px -3px 3px ${variables.moonShadowInner}, 
  inset -5px 5px 5px ${variables.moonShadowOuter}`,
};

const timeNow = new Date().getHours();
function App({ children }) {
  const [daytime, setDaytime] = useState(
    timeNow > 5 && timeNow < 21 ? true : false
  );
  const [themeIcon, setThemeIcon] = useState(
    daytime ? sun_default_daytime : moon_default_evening
  );
  const [theme, setTheme] = useState(daytime ? day : evening);

  const toggleTheme = () => {
    setDaytime(!daytime);
    themeIcon === sun_default_daytime
      ? setThemeIcon(moon_default_evening)
      : setThemeIcon(sun_default_daytime);
    theme === day ? setTheme(evening) : setTheme(day);
  };

  useEffect(() => {
    document.title = "Yumiru";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Global>
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
