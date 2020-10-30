import React, { useState } from "react";
import styled from "styled-components";

import Title from "../components/global/title";
import JapanSVG from "../components/map/japan-svg";
import japan from "../components/map/prefectures/japan.png";
const SVG = styled.div`
  margin-left: 0;
  display: flex;
  justify-content: center;
  svg {
    margin-top: 25px;
    min-width: 500px;
    path {
      transition: 200ms;
      &:hover {
        transition: 200ms;
        fill: ${(props) => props.theme.globalText};
      }
    }
    .activeCity {
      stroke-width: 3;
      stroke: ${(props) => props.theme.invertedText}10;
      fill: ${(props) => props.theme.globalText};
      &:hover {
        fill: ${(props) => props.theme.globalText};
      }
    }
  }
`;

const InfoWindow = styled.div`
  margin-top: 15px;
  margin-left: -100px;
  padding: 0 20px;
  color: ${(props) => props.theme.globalText};
  background: linear-gradient(
    to top,
    #00000000,
    ${(props) => props.theme.globalText}85 80%
  );
  background-size: 2px 100%;
  background-position: 0 0;
  background-repeat: no-repeat;
  min-width: 400px;
  max-width: 400px;
  min-height: 510px;
  max-height: 510px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    -webkit-transition: 150ms;
    transition: 150ms;
    border-radius: 100px;
    background: ${(props) => props.theme.globalScroll};
    &:hover {
      -webkit-transition: 150ms;
      transition: 150ms;
      background: ${(props) => props.theme.globalScrollHover};
    }
  }

  ::-webkit-scrollbar-corner,
  ::-webkit-resizer {
    background: transparent;
    border: none;
  }
  h2 {
    margin-top: -5px;
    font-family: "Noto Sans JP", sans-serif;
  }
  p {
    margin-top: -10px;
    font-family: "Comfortaa", sans-serif;
    text-transform: uppercase;
  }
  .normalCase {
    text-transform: none;
    font-family: "Noto Sans JP", sans-serif;
    font-weight: bold;
    max-width: 350px;
    position: relative;
    span {
      font-weight: normal;
      position: absolute;
      right: 0;
    }
  }
  .image {
    margin-top: 20px;
    max-width: 350px;
    min-height: 220px;
    max-height: 220px;
    display: flex;
    align-items: bottom;
    justify-content: bottom;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .description {
    margin-top: 35px;
  }
`;

const CityList = styled.div`
  position: relative;
  margin-top: 15px;
  right: 94px;
  min-width: 160px;
  max-height: 500px;
  overflow: auto;
  user-select: none !important;
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    -webkit-transition: 150ms;
    transition: 150ms;
    border-radius: 100px;
    background: ${(props) => props.theme.globalScroll};
    &:hover {
      -webkit-transition: 150ms;
      transition: 150ms;
      background: ${(props) => props.theme.globalScrollHover};
    }
  }

  ::-webkit-scrollbar-corner,
  ::-webkit-resizer {
    background: transparent;
    border: none;
  }
  button {
    background: none;
    border: none;
    outline: 0 transparent;
    cursor: pointer;
    font-family: "Comfortaa", sans-serif;
    text-transform: uppercase;
    font-size: 14px;
    margin-bottom: 12px;
    color: ${(props) => props.theme.globalText}aa;
    &:focus {
      color: ${(props) => props.theme.globalText};
      font-weight: bold;
    }
    &:hover {
      color: ${(props) => props.theme.globalText};
    }
  }
  .selectedCity {
    color: ${(props) => props.theme.globalText};
  }
`;

export default function JapanMap() {
  const [cityName, setCityName] = useState();
  const [cityKanji, setCityKanji] = useState();
  const [cityImage, setCityImage] = useState();
  const [cityRegion, setCityRegion] = useState();
  const [cityArea, setCityArea] = useState();
  const [cityPopulation, setCityPopulation] = useState();
  const [cityAverageHigh, setCityAverageHigh] = useState();
  const [cityAverageLow, setCityAverageLow] = useState();
  const [activeCity, setActiveCity] = useState();

  return (
    <>
      <Title />
      <SVG>
        <svg
          baseProfile="tiny"
          fill="#53587ebb"
          height="800"
          stroke="#9FAED250"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          version="1.2"
          viewBox="50 0 900 853"
          maxwidth="500"
          xmlns="http://www.w3.org/2000/svg"
        >
          {JapanSVG.map((city, index) => {
            return (
              <svg key={index}>
                <path
                  d={city.d}
                  onMouseDown={() => {
                    setActiveCity(city.d)
                    setCityKanji(city.kanji)
                    setCityName(city.name)
                    setCityImage(city.image)
                    setCityRegion(city.region)
                    setCityArea(city.area)
                    setCityPopulation(city.population)
                    setCityAverageHigh(city.averageHigh)
                    setCityAverageLow(city.averageLow)
                  }}
                />
                <path className="activeCity" d={activeCity} />
              </svg>
            );
          })}
        </svg>

        <CityList>
          {JapanSVG.map((city, index) => {
            return (
              <div key={index}>
                {city.name ? (
                  <button
                    className={activeCity === city.d ? "selectedCity" : ""}
                    onMouseOver={() => {
                      setActiveCity(city.d)
                    }}
                    onMouseDown={() => {
                      setCityKanji(city.kanji)
                      setCityName(city.name)
                      setCityImage(city.image)
                      setCityRegion(city.region)
                      setCityArea(city.area)
                      setCityPopulation(city.population)
                      setCityAverageHigh(city.averageHigh)
                      setCityAverageLow(city.averageLow)
                    }}
                  >
                    {city.name}
                  </button>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </CityList>

        <InfoWindow>
          <h2>{cityKanji ? cityKanji : "都市を選択"}</h2>
          <p>{cityName ? cityName : "Select a city"}</p>
          <div className="image">
            <img src={cityImage ? cityImage : japan} alt={cityName} />
          </div>
          <div className="description">
            <p className="normalCase">Region: <span>{cityRegion}</span></p>
            <p className="normalCase area">Area: <span>{cityArea}</span></p>
            <p className="normalCase">Population: <span>{cityPopulation}</span></p>
            <p className="normalCase">Average high: <span>{cityAverageHigh}</span></p>
            <p className="normalCase">Average low: <span>{cityAverageLow}</span></p>
          </div>
        </InfoWindow>
      </SVG>
    </>
  );
}
