import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';

import variables from './components/styles/variables';
import moon_daytime from './svgs/icons/moon/moon_daytime.gif';
import sun_evening from './svgs/icons/sun/sun_evening.gif';

import logo_small_daytime from './svgs/logo/logo_daytime.png';
import logo_small_evening from './svgs/logo/logo_evening.png';
import logo_big_daytime from './svgs/logo/logo_big_daytime.png';
import logo_big_evening from './svgs/logo/logo_big_evening.png';
import games_daytime from './svgs/icons/tags/games_daytime.png';
import games_evening from './svgs/icons/tags/games_evening.png';
import other_daytime from './svgs/icons/tags/other_daytime.png';
import other_evening from './svgs/icons/tags/other_evening.png';

import Global from './components/styles/global';
import Whitespace from './components/styles/top-whitespace';
import TransparentButton from './components/styles/transparent-button';
import Time from './components/global/time';
import Today from './components/global/today.js';

const day = {
  //global
  logo: `url(${logo_small_daytime})`,
  logoMobile: `url(${logo_big_daytime})`,
  title: 'unset',
  titleShadow: `3px -3px 2px ${variables.sunShadowLight}, 3px -3px 10px ${variables.sunShadowLight}, -3px 2px 10px ${variables.sunShadowText}, -2px 2px 2px ${variables.sunShadowText} , -3px 2px 10px ${variables.sunShadowText}, -2px 2px 2px ${variables.sunShadowText}, -3px 2px 10px ${variables.sunShadowText}, -2px 2px 2px ${variables.sunShadowText}`,
  titleShadowMobile: `1px -1px 2px ${variables.sunShadowLight}, 2px -2px 4px ${variables.sunShadowLight}, -3px 2px 10px ${variables.sunShadowText}, -2px 2px 2px ${variables.sunShadowText} , -3px 2px 10px ${variables.sunShadowText}, -2px 2px 2px ${variables.sunShadowText}, -3px 2px 10px ${variables.sunShadowText}, -2px 2px 2px ${variables.sunShadowText}`,
  buttonDefault: variables.sunButtonDefault,
  buttonShadow: `0 18px 30px -15px ${variables.sunLinkOrange}c2, 0 18px 30px -15px ${variables.sunLinkPink}c2`,
  buttonShadowActive: `0 13px 30px -15px ${variables.sunLinkOrange}c2, 0 13px 30px -15px ${variables.sunLinkPink}c2`,
  buttonSecondary: variables.sunButtonSecondary,
  buttonShadowSecondary: `0 18px 30px -15px ${variables.sunLinkBlue}c2, 0 18px 30px -15px ${variables.sunLinkCyan}c2`,
  buttonShadowSecondaryActive: `0 13px 30px -15px ${variables.sunLinkBlue}c2, 0 13px 30px -15px ${variables.sunLinkCyan}c2`,
  globalBackground: variables.sunBackground,
  globalBackgroundLight: variables.sunBackgroundLight,
  globalText: variables.sunText,
  contentShadow: `3px -3px 10px ${variables.sunShadowDark}15, inset -3px 3px 8px ${variables.sunShadowLight}, -3px 3px 10px ${variables.sunShadowDark}80, inset 2px -2px 2px ${variables.sunShadowDark}, inset 3px -3px 10px ${variables.sunShadowDark}f5, inset 3px -3px 3px ${variables.sunShadowLight}00, inset -5px 5px 5px ${variables.sunShadowDark}00`,
  contentShadowHover: `5px -5px 8px ${variables.sunShadowDark}00, inset -5px 5px 10px ${variables.sunShadowLight}00, -5px 5px 15px ${variables.sunShadowDark}00, inset 5px -5px 5px ${variables.sunShadowDark}00, inset 1px -1px 25px ${variables.sunShadowDark}00, inset 8px -8px 15px ${variables.sunShadowLight}, inset -4px 4px 10px ${variables.sunShadowDark}`,
  //date and time
  lightText: variables.sunTextLight,
  lightTextShadow: `3px 3px 2px ${variables.sunShadowLight}, 3px 3px 10px ${variables.sunShadowLight}, -3px -2px 10px ${variables.sunShadowText}, -2px -2px 2px ${variables.sunShadowText} , -3px -2px 10px ${variables.sunShadowText}, -2px -2px 2px ${variables.sunShadowText}, -3px -2px 10px ${variables.sunShadowText}, -2px -2px 2px ${variables.sunShadowText}`,
  lightTextShadowMobile: `1px 1px 1px ${variables.sunShadowLight}, 2px 2px 4px ${variables.sunShadowLight}, -3px -1px 10px ${variables.sunShadowText}, -2px -2px 2px ${variables.sunShadowText} , -3px -1px 10px ${variables.sunShadowText}, -2px -2px 2px ${variables.sunShadowText}, -3px -1px 10px ${variables.sunShadowText}, -2px -2px 2px ${variables.sunShadowText}`,
  //transparentButtons
  homeButtonImage: `url(${logo_big_daytime})`,
  modeButtonImage: `url(${moon_daytime})`,
  transparentButtonShadow: `3px -3px 10px ${variables.sunShadowDark}15, inset -3px 3px 4px ${variables.sunShadowLight}, -3px 3px 10px ${variables.sunShadowDark}80, inset 2px -2px 2px ${variables.sunShadowDark}, inset 3px -3px 10px ${variables.sunShadowDark}, inset 3px -3px 3px ${variables.sunShadowLight}00, inset -5px 5px 5px ${variables.sunShadowDark}00`,
  transparentButtonShadowHover: `3px -3px 10px ${variables.sunShadowDark}00, inset -3px 3px 4px ${variables.sunShadowLight}00, -3px 3px 10px ${variables.sunShadowDark}00, inset 2px -2px 2px ${variables.sunShadowDark}00, inset 3px -3px 10px ${variables.sunShadowDark}00, inset 3px -3px 3px ${variables.sunShadowLight}, inset -5px 5px 5px ${variables.sunShadowDark}`,
  //overview
  gameTag: `url(${games_daytime})`,
  otherTag: `url(${other_daytime})`,
  //alphabet
  alphabetShadow: `inset 8px -8px 15px ${variables.sunShadowLight}85, inset -4px 4px 10px ${variables.sunShadowDark}`,
  alphabetLine: `2px solid ${variables.sunShadowDark}`,
};

const evening = {
  //global
  logo: `url(${logo_small_evening})`,
  logoMobile: `url(${logo_big_evening})`,
  titleShadow: `3px -3px 2px ${variables.moonShadowLight}, 3px -3px 10px ${variables.moonShadowLight}, -3px 2px 10px ${variables.moonShadowDark}, -2px 2px 2px ${variables.moonShadowDark} , -3px 2px 10px ${variables.moonShadowDark}, -2px 2px 2px ${variables.moonShadowDark}, -3px 2px 10px ${variables.moonShadowDark}, -2px 2px 2px ${variables.moonShadowDark}`,
  titleShadowMobile: `1px -1px 2px ${variables.moonShadowLight}, 2px -2px 4px ${variables.moonShadowLight}, -3px 2px 10px ${variables.moonShadowDark}, -2px 2px 2px ${variables.moonShadowDark} , -3px 2px 10px ${variables.moonShadowDark}, -2px 2px 2px ${variables.moonShadowDark}, -3px 2px 10px ${variables.moonShadowDark}, -2px 2px 2px ${variables.moonShadowDark}`,
  buttonDefault: variables.moonButtonDefault,
  buttonShadow: `0 18px 30px -15px ${variables.moonLinkOrange}40, 0 18px 30px -15px ${variables.moonLinkPink}40`,
  buttonShadowActive: `0 13px 30px -15px ${variables.moonLinkOrange}40, 0 13px 30px -15px ${variables.moonLinkPink}40`,
  buttonSecondary: variables.moonButtonSecondary,
  buttonShadowSecondary: `0 18px 30px -15px ${variables.moonLinkBlue}40, 0 18px 30px -15px ${variables.moonLinkCyan}40`,
  buttonShadowSecondaryActive: `0 13px 30px -15px ${variables.moonLinkBlue}40, 0 13px 30px -15px ${variables.moonLinkCyan}40`,
  globalBackground: variables.moonBackground,
  globalBackgroundLight: variables.moonBackgroundDark,
  globalText: variables.moonText,
  contentBackgroundHover: variables.moonBackgroundLight,
  contentShadow: `3px -3px 10px ${variables.moonShadowDark}15, inset -3px 3px 8px ${variables.moonShadowLight}, -3px 3px 10px ${variables.moonShadowDark}80, inset 2px -2px 2px ${variables.moonShadowDark}, inset 3px -3px 10px ${variables.moonShadowDark}f5, inset 3px -3px 3px ${variables.moonShadowLight}00, inset -5px 5px 5px ${variables.moonShadowDark}00`,
  contentShadowHover: `5px -5px 8px ${variables.moonShadowDark}00, inset -5px 5px 10px ${variables.moonShadowLight}00, -5px 5px 15px ${variables.moonShadowDark}00, inset 5px -5px 5px ${variables.moonShadowDark}00, inset 1px -1px 25px ${variables.moonShadowDark}00, inset 8px -8px 15px ${variables.moonShadowLight}, inset -4px 4px 10px ${variables.moonShadowDark}`,
  //date and time
  lightText: variables.moonTextLight,
  lightTextShadow: `3px 3px 2px ${variables.moonShadowLight}, 3px 3px 10px ${variables.moonShadowLight}, -3px -2px 10px ${variables.moonShadowDark}, -2px -2px 2px ${variables.moonShadowDark}, -3px -2px 10px ${variables.moonShadowDark}, -2px -2px 2px ${variables.moonShadowDark}, -3px -2px 10px ${variables.moonShadowDark}, -2px -2px 2px ${variables.moonShadowDark}`,
  lightTextShadowMobile: `1px 1px 1px ${variables.moonShadowLight}, 2px 2px 4px ${variables.moonShadowLight}, -3px -1px 10px ${variables.moonShadowDark}, -2px -2px 2px ${variables.moonShadowDark} , -3px -1px 10px ${variables.moonShadowDark}, -2px -2px 2px ${variables.moonShadowDark}, -3px -1px 10px ${variables.moonShadowDark}, -2px -2px 2px ${variables.moonShadowDark}`,
  //transparentButtons
  homeButtonImage: `url(${logo_big_evening})`,
  modeButtonImage: `url(${sun_evening})`,
  transparentButtonShadow: `3px -3px 10px ${variables.moonShadowDark}15, inset -3px 3px 4px ${variables.moonShadowLight}, -3px 3px 10px ${variables.moonShadowDark}80, inset 2px -2px 2px ${variables.moonShadowDark}, inset 3px -3px 10px ${variables.moonShadowDark}`,
  transparentButtonShadowHover: `3px -3px 10px ${variables.moonShadowDark}00, inset -3px 3px 4px ${variables.moonShadowLight}00, -3px 3px 10px ${variables.moonShadowDark}00, inset 2px -2px 2px ${variables.moonShadowDark}00, inset 3px -3px 10px ${variables.moonShadowDark}00, inset 3px -3px 3px ${variables.moonShadowLight}, inset -5px 5px 5px ${variables.moonShadowDark}`,
  //overview
  gameTag: `url(${games_evening})`,
  otherTag: `url(${other_evening})`,
  //alphabet
  alphabetShadow: `inset 8px -8px 15px ${variables.moonShadowLight}85, inset -4px 4px 10px ${variables.moonShadowDark}`,
  alphabetLine: `1px solid ${variables.moonShadowDark}`,
};

function App({children}) {
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
    document.title = 'Yumiru';
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Global>
        <Link to="/overview">
          <TransparentButton home />
        </Link>
        <Time />
        <Today />
        <TransparentButton
          onClick={() => {
            toggleTheme();
          }}
        ></TransparentButton>
        <Whitespace>{children}</Whitespace>
      </Global>
    </ThemeProvider>
  );
}
export default App;
