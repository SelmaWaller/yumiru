import React, { useState, useEffect } from "react";
import styled from "styled-components";

import hiragana from "../components/hiragana";
import katakana from "../components/katakana";

import Title from "../components/global/title";
import FlexWrapper from "../components/styles/flex-wrapper";
import Button from "../components/styles/colored-button";
import TransparentButton from "../components/styles/transparent-button";
import GridSmall from "../components/styles/grid-small";
import Card from "../components/styles/card";

const AlphabetButton = styled(Button)`
  margin: 25px 15px 35px;
  z-index: 99;

  span::before {
    content: "平仮名";
    left: 85px;
  }
  span::after {
    content: "HIRAGANA";
    left: 40px;
  }
  &:hover {
    span::before {
      left: 105px;
    }
    span::after {
      left: 70px;
    }
    img {
      right: 165px;
    }
  }
  img {
    right: 75px;
  }
`;

const Katakana = styled(AlphabetButton)`
  span::before {
    content: "片仮名";
  }
  span::after {
    content: "KATAKANA";
  }
`;

const FormsButton = styled(TransparentButton)`
  right: unset;
  left: unset;
  transform: scale(0.8);
  position: relative;
  top: 0;
  box-shadow: ${(props) => props.theme.transparentButtonShadow}
  background: none;

  &:hover {
  box-shadow: ${(props) => props.theme.transparentButtonShadowHover}
  }
`;

const Gojuon = styled(FormsButton)``;
const Dakuon = styled(FormsButton)``;
const Handakuon = styled(FormsButton)``;
const Yoon = styled(FormsButton)``;

export default function Alphabets() {
  const [isHiragana, setIsHiragana] = useState(true);
  const [hiraganaGojuon, setHiraganaGojuon] = useState(false);
  const [hiraganaDakuon, setHiraganaDakuon] = useState(false);
  const [hiraganaHandakuon, setHiraganaHandakuon] = useState(false);
  const [hiraganaYoon, setHiraganaYoon] = useState(false);
  const [isKatakana, setIsKatakana] = useState(false);
  const [katakanaGojuon, setKatakanaGojuon] = useState(false);
  const [katakanaDakuon, setKatakanaDakuon] = useState(false);
  const [katakanaHandakuon, setKatakanaHandakuon] = useState(false);
  const [katakanaYoon, setKatakanaYoon] = useState(false);
  useEffect(() => {
    document.title = "Yumiru | Alphabets";
  }, []);

  const toKatakana = () => {
    setIsHiragana(false);
    setIsKatakana(true);
  };
  const toHiragana = () => {
    setIsHiragana(true);
    setIsKatakana(false);
  };
  const toGojuon = () => {
    isHiragana
      ? setHiraganaGojuon(true) &&
        setHiraganaDakuon(false) &&
        setHiraganaHandakuon(false) &&
        setHiraganaYoon(false)
      : setKatakanaGojuon(true) &&
        setKatakanaDakuon(false) &&
        setKatakanaHandakuon(false) &&
        setKatakanaYoon(false);
  };
  const toDakuon = () => {
    isHiragana
      ? setHiraganaGojuon(false) &&
        setHiraganaDakuon(true) &&
        setHiraganaHandakuon(false) &&
        setHiraganaYoon(false)
      : setKatakanaGojuon(false) &&
        setKatakanaDakuon(true) &&
        setKatakanaHandakuon(false) &&
        setKatakanaYoon(false);
  };
  const toHandakuon = () => {
    isHiragana
      ? setHiraganaGojuon(false) &&
        setHiraganaDakuon(false) &&
        setHiraganaHandakuon(true) &&
        setHiraganaYoon(false)
      : setKatakanaGojuon(false) &&
        setKatakanaDakuon(false) &&
        setKatakanaHandakuon(true) &&
        setKatakanaYoon(false);
  };
  const toYoon = () => {
    isHiragana
      ? setHiraganaGojuon(false) &&
        setHiraganaDakuon(false) &&
        setHiraganaHandakuon(false) &&
        setHiraganaYoon(true)
      : setKatakanaGojuon(false) &&
        setKatakanaDakuon(false) &&
        setKatakanaHandakuon(false) &&
        setKatakanaYoon(true);
  };
  return (
    <>
      <Title />
      <FlexWrapper>
        <AlphabetButton
          onClick={() => {
            toHiragana();
          }}
        >
          <span></span>
        </AlphabetButton>
        <FormsButton
          as={Gojuon}
          onClick={() => {
            toGojuon();
          }}
        >
          <span></span>
        </FormsButton>
        <FormsButton
          as={Dakuon}
          onClick={() => {
            toDakuon();
          }}
        >
          <span></span>
        </FormsButton>
        <FormsButton
          as={Handakuon}
          onClick={() => {
            toHandakuon();
          }}
        >
          <span></span>
        </FormsButton>
        <FormsButton
          as={Yoon}
          onClick={() => {
            toYoon();
          }}
        >
          <span></span>
        </FormsButton>
        <AlphabetButton
          secondary
          as={Katakana}
          onClick={() => {
            toKatakana();
          }}
        >
          <span></span>
        </AlphabetButton>
      </FlexWrapper>
      <GridSmall>
        {isHiragana
          ? hiragana.map((letter, index) => {
              return (
                <Card key={index}>
                  <tbody>
                    <tr>
                      <th>{letter.consonant}</th>
                    </tr>
                    <tr>
                      <td>
                        {letter.hirlettera ? letter.hirlettera : letter.vowela}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {letter.hirletteri ? letter.hirletteri : letter.voweli}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {letter.hirletteru ? letter.hirletteru : letter.vowelu}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {letter.hirlettere ? letter.hirlettere : letter.vowele}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {letter.hirlettero ? letter.hirlettero : letter.vowelo}
                      </td>
                    </tr>
                  </tbody>
                </Card>
              );
            })
          : katakana.map((letter, index) => {
              return (
                <Card key={index}>
                  <tbody>
                    <tr>
                      <th>{letter.consonant}</th>
                    </tr>
                    <tr>
                      <td>
                        {letter.hirlettera ? letter.hirlettera : letter.vowela}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {letter.hirletteri ? letter.hirletteri : letter.voweli}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {letter.hirletteru ? letter.hirletteru : letter.vowelu}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {letter.hirlettere ? letter.hirlettere : letter.vowele}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {letter.hirlettero ? letter.hirlettero : letter.vowelo}
                      </td>
                    </tr>
                  </tbody>
                </Card>
              );
            })}
      </GridSmall>
    </>
  );
}
