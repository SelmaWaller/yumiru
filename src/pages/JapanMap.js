import React, { useState } from "react";
import styled from "styled-components";

import Title from "../components/global/title";
import JapanSVG from "../components/map/japan-svg";
import japan from "../components/map/prefectures/japan.png";

const SVG = styled.div`
  display: flex;
  justify-content: center;
  svg {
    margin-right: -100px;
    min-width: 50%;
    path {
      transition: 200ms;
      cursor: pointer;
      &:hover {
        transition: 200ms;
        fill: ${(props) => props.theme.invertedText};
      }
    }
    .activePrefecture {
      stroke-width: 2;
      fill: ${(props) => props.theme.invertedText};
    }
    .activeRegion {
      fill: ${(props) => props.theme.globalText};
    }
  }
  .zoom {
    position: absolute;
    left: 200px;
    z-index: 99;
  }
`;

const InfoWindow = styled.div`
  margin-top: 15px;
  padding: 0 20px 0 50px;
  margin-left: -6px;
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
  .title {
    font-size: 16px;
    font-weight: bold;
    color: ${(props) => props.theme.globalText};
    cursor: default;
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

const Regions = styled.div`
left: 200px;
position: absolute;
margin-top: 16px;
.title {
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.globalText};
  cursor: default;
}
button {
  display: block;
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
  const [activeRegions, setActiveRegions] = useState([]);
  const [activeRegion, setActiveRegion] = useState(false);

  const regions = ["Kyushu", "Chūgoku", "Shikoku", "Kansai", "Chūbu", "Kantō", "Tōhoku", "Hokkaido"]
  return (
    <>
      <Title />
      <Regions>
      <button className="title">Regions</button>
        {regions.map((region, index) => {
          return (
            <button key={index} onClick={() => {
              setActiveRegion(!activeRegion)
              JapanSVG.map((noe) => {
                if(noe.region === region) {
                  activeRegions.push(noe.d)
                }
                });
                document.getElementById("activeRegion").style=`d: path('${activeRegions.join(' ')}')`
            }} onMouseLeave={() => {setActiveRegions([])}}>{region}</button>
          )
        })}
      </Regions>
      <SVG>
        <svg 
          baseProfile="tiny"
          fill="#53587ebb"
          stroke="#9FAED250"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          version="1.2"
          viewBox="50 0 900 853"
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
                    <path className="activeRegion" id="activeRegion" d={activeRegions} />
              </svg>
            );
          })}
        </svg>
        <PrefectureList>
          <button className="title">Prefectures</button>
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
            {prefectureRegion ? <>
            <p className="normalCase">Region: <span>{prefectureRegion}</span></p>
            <p className="normalCase area">Area: <span>{prefectureArea}</span></p>
            <p className="normalCase">Population: <span>{prefecturePopulation}</span></p>
            <p className="normalCase">Average high: <span>{prefectureAverageHigh}</span></p>
            <p className="normalCase">Average low: <span>{prefectureAverageLow}</span></p>
            </> : ""}
            </div>
        </InfoWindow>
      </SVG>
    </>
  );
}
