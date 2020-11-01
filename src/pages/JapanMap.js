import React, { useEffect, useState } from "react";
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
    .activePrefecture {
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

const PrefectureList = styled.div`
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
  .selectedprefecture {
    color: ${(props) => props.theme.globalText};
  }
`;

export default function JapanMap() {
  const [prefectureName, setPrefectureName] = useState();
  const [prefectureKanji, setPrefectureKanji] = useState();
  const [prefectureImage, setPrefectureImage] = useState();
  const [prefectureRegion, setPrefectureRegion] = useState();
  const [prefectureArea, setPrefectureArea] = useState();
  const [prefecturePopulation, setPrefecturePopulation] = useState();
  const [prefectureAverageHigh, setPrefectureAverageHigh] = useState();
  const [prefectureAverageLow, setPrefectureAverageLow] = useState();
  const [activePrefecture, setActivePrefecture] = useState();
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
          {JapanSVG.map((prefecture, index) => {
            return (
              <svg key={index}>
                <path
                  d={prefecture.d}
                  onMouseDown={() => {
                    setActivePrefecture(prefecture.d)
                    setPrefectureKanji(prefecture.kanji)
                    setPrefectureName(prefecture.name)
                    setPrefectureImage(prefecture.image)
                    setPrefectureRegion(prefecture.region)
                    setPrefectureArea(prefecture.area)
                    setPrefecturePopulation(prefecture.population)
                    setPrefectureAverageHigh(prefecture.averageHigh)
                    setPrefectureAverageLow(prefecture.averageLow)
                  }}
                />
                <path className="activePrefecture" d={activePrefecture} />
                
              </svg>
            );
          })}
        </svg>

        <PrefectureList>
          {JapanSVG.map((prefecture, index) => {
            return (
              <div key={index}>
                {prefecture.name ? (
                  <button
                    className={activePrefecture === prefecture.d ? "selectedprefecture" : ""}
                    onMouseOver={() => {
                      setActivePrefecture(prefecture.d)
                    }}
                    onMouseDown={() => {
                      setPrefectureKanji(prefecture.kanji)
                      setPrefectureName(prefecture.name)
                      setPrefectureImage(prefecture.image)
                      setPrefectureRegion(prefecture.region)
                      setPrefectureArea(prefecture.area)
                      setPrefecturePopulation(prefecture.population)
                      setPrefectureAverageHigh(prefecture.averageHigh)
                      setPrefectureAverageLow(prefecture.averageLow)
                    }}
                  >
                    {prefecture.name}
                  </button>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </PrefectureList>

        <InfoWindow>
          <h2>{prefectureKanji ? prefectureKanji : "都市を選択"}</h2>
          <p>{prefectureName ? prefectureName : "Select a prefecture"}</p>
          <div className="image">
            <img src={prefectureImage ? prefectureImage : japan} alt={prefectureName} />
          </div>
          <div className="description">
            <p className="normalCase">Region: <span>{prefectureRegion}</span></p>
            <p className="normalCase area">Area: <span>{prefectureArea}</span></p>
            <p className="normalCase">Population: <span>{prefecturePopulation}</span></p>
            <p className="normalCase">Average high: <span>{prefectureAverageHigh}</span></p>
            <p className="normalCase">Average low: <span>{prefectureAverageLow}</span></p>
          </div>
        </InfoWindow>
      </SVG>
    </>
  );
}
