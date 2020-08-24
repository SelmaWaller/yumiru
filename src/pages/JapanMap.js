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
    ${(props) => props.theme.globalText}85 80%,
    #00000000
  );
  background-size: 2px 100%;
  background-position: 0 0;
  background-repeat: no-repeat;
  min-width: 400px;
  max-width: 400px;
  min-height: 600px;
  max-height: 600px;
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
    font-family: "Noto Sans JP", sans-serif;
  }
  p {
    margin-top: -10px;
    font-family: "Comfortaa", sans-serif;
    text-transform: uppercase;
  }
  div {
    margin-top: 20px;
    max-width: 350px;
    min-height: 420px;
    max-height: 420px;
    display: flex;
    align-items: bottom;
    justify-content: center;
    overflow: hidden;

    img {
      width: 180%;
      height: 180%;
    }
  }
`;

export default function JapanMap() {
  const [cityName, setCityName] = useState();
  const [cityKanji, setCityKanji] = useState();
  const [cityImage, setCityImage] = useState();

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
          viewBox="0 0 1000 853"
          maxwidth="500"
          xmlns="http://www.w3.org/2000/svg"
        >
          {JapanSVG.map((path, index) => {
            return (
              <path
                key={index}
                d={`${path.d}`}
                onMouseOver={() => {
                  setCityKanji(path.kanji);
                  setCityName(path.name);
                  setCityImage(path.image);
                }}
              ></path>
            );
          })}
        </svg>

        <InfoWindow>
          <h2>{cityKanji ? cityKanji : "都市を選択"}</h2>
          <p>{cityName ? cityName : "Select a city"}</p>
          <div>
            <img src={cityImage ? cityImage : japan} alt={cityName} />
          </div>
        </InfoWindow>
      </SVG>
    </>
  );
}
