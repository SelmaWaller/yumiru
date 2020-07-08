import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import day from "./components/global/day-theme";
import evening from "./components/global/evening-theme";

import moon_daytime from "./svgs/icons/moon/moon_daytime.gif";
import sun_evening from "./svgs/icons/sun/sun_evening.gif";

import Global from "./components/styles/global";
import Whitespace from "./components/styles/top-whitespace";
import TransparentButton from "./components/styles/transparent-button";
import Time from "./components/global/time";
import Today from "./components/global/today.js";
import Footer from "./components/global/footer.js";

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
        <Footer />
      </Global>
    </ThemeProvider>
  );
}
export default App;
