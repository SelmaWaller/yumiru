import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import hiraganaAlphabets from '../components/hiragana-alphabets';
import katakanaAlphabets from '../components/katakana-alphabets';
import kanjiNumbers from '../components/kanji-numbers';
import countingMethods from '../components/counting-methods';

import Title from '../components/global/title';
import FlexWrapper from '../components/styles/flex-wrapper';
import Button from '../components/styles/colored-button';
import TransparentButton from '../components/styles/transparent-button';
import GridSmall from '../components/styles/grid-small';
import Card from '../components/styles/card';

const PaginationButton = styled.button`
  margin-bottom: 25px;
  background: none;
  box-shadow: none;
  color: ${(props) => props.theme.globalText};
  font-family: 'Comfortaa', sans-serif;
  position: relative;
  min-width: 70px;
  min-height: 25px;
  font-size: 14px;
  outline: 0 transparent;
  border: none;
  background: none;
  cursor: pointer;
  transition: 250ms;

  span {
    transition: 250ms;
  }
  span::after {
    transition: 250ms;
    position: absolute;
    content: '༶';
    font-size: 18px;
    top: -3px;
    bottom: 0;
    right: 60px;
  }
  &:hover {
    transition: 250ms;
    span::before {
      opacity: 1;
    }
    span::after {
      transform: rotate(-90deg);
    }
  }
  &:disabled {
    cursor: default;
    opacity: 0.5;
    span::after {
      transform: rotate(-90deg);
    }
    &:hover {
      span::after {
        transform: rotate(-90deg);
      }
    }
  }
`;

const Number = styled(PaginationButton)`
  span::after {
    right: unset;
    left: 60px;
  }
  &:disabled {
    span::after {
      transform: rotate(90deg);
    }
    &:hover {
      span::after {
        transform: rotate(90deg);
      }
    }
  }
  &:hover {
    span::after {
      right: unset;
      transform: rotate(90deg);
    }
  }
`;

const CurrentPage = styled(PaginationButton)`
  font-size: 16px;
  min-width: 120px;
  cursor: default;

  span::after {
    content: '';
  }
  &:hover {
    span::after {
      content: '';
    }
  }
`;

const AlphabetButton = styled(Button)`
  margin: 25px 15px 10px;
  z-index: 99;

  span::before {
    content: '平仮名';
    left: 85px;
  }
  span::after {
    content: 'HIRAGANA';
    left: 40px;
  }
  &:hover {
    span::before {
      left: 105px;
    }
    span::after {
      left: 70px;
    }
  }

  &:disabled {
    span::before {
      opacity: 0;
    }
    span::after {
      left: 70px;
      opacity: 1;
    }
  }
`;

const Katakana = styled(AlphabetButton)`
  span::before {
    content: '片仮名';
  }
  span::after {
    content: 'KATAKANA';
  }
  &:disabled {
    span::before {
      content: 'KATAKANA';
    }
  }
`;

const Counting = styled(AlphabetButton)`
  span::before {
    content: '数える';
    transform: translateY(-2px);
  }
  span::after {
    content: 'COUNTING';
  }
  &:disabled {
    span::before {
      content: 'COUNTING';
    }
  }
`;

const Kanji = styled(AlphabetButton)`
  span::before {
    content: '漢字';
    left: 95px;
  }
  span::after {
    content: 'KANJI';
    left: 60px;
  }
  &:hover {
    span::before {
      left: 125px;
    }
    span::after {
      left: 90px;
    }
  }
  &:disabled {
    span::before {
      content: 'KANJI';
    }
    span::after {
      left: 90px;
    }
  }
`;

const SyllablesButton = styled(TransparentButton)`
  right: unset;
  left: unset;
  transform: scale(0.8);
  position: relative;
  top: 0;
  box-shadow: ${(props) => props.theme.transparentButtonShadow};
  background: none;
  background: none;
  text-transform: uppercase;

  span::after {
    font-family: 'Comfortaa', sans-serif;
  }
  &:hover {
    box-shadow: ${(props) => props.theme.transparentButtonShadowHover};
  }
`;

const Gojuon = styled(SyllablesButton)`
  span::before {
    content: '五十音';
    font-size: 22px;
    position: absolute;
    top: 20px;
    right: 0;
    left: 0;
    transition: 250ms;
  }

  span::after {
    content: 'Gojūon';
    font-size: 14px;
    position: absolute;
    bottom: 30px;
    right: 0;
    left: 0;
    transition: 250ms;
  }

  &:hover {
    transition: 250ms;
    span::before {
      opacity: 0;
      top: 30px;
    }
    span::after {
      content: 'Gojūon';
      bottom: 39px;
    }
  }
`;

const GojuonActive = styled(Gojuon)`
  box-shadow: ${(props) => props.theme.transparentButtonShadowHover};
  span::before {
    content: '';
    opacity: 0;
  }
  span::after {
    content: 'Gojūon';
    bottom: 39px;
  }
  
  &:hover {
    span::before {
      content: 'Gojūon',
      opacity: 1;
    }
    span::after {
      content: 'Gojūon',
      opacity: 1;
    }
  }

  &:active {
    span::after {
      bottom: 33px;
      transition: 250ms;
    }
  }
`;

const Dakuon = styled(Gojuon)`
  span::before {
    content: '濁音';
  }

  span::after {
    content: 'Dakuon';
  }

  &:hover {
    span::after {
      content: 'Dakuon';
    }
  }
`;

const DakuonActive = styled(GojuonActive)`
  span::before {
    content: 'Dakuon';
  }
  span::after {
    content: 'Dakuon';
  }
  &:hover {
    span::before {
      content: 'Dakuon';
    }
    span::after {
      content: 'Dakuon';
    }
  }
`;

const Handakuon = styled(Gojuon)`
  span::before {
    content: '半濁音';
    top: 15px;
  }

  span::after {
    content: 'Han-dakuon';
    font-size: 14px;
    bottom: 25px;
  }

  &:hover {
    span::after {
      content: 'Han-dakuon';
      bottom: 31px;
    }
  }
`;
const HandakuonActive = styled(GojuonActive)`
  span::before {
    content: 'Han-dakuon';
    bottom: 31px;
  }
  span::after {
    content: 'Han-dakuon';
    bottom: 31px;
  }
  &:hover {
    span::before {
      content: 'Han-dakuon';
      bottom: 31px;
    }
    span::after {
      content: 'Han-dakuon';
      bottom: 31px;
    }
  }

  &:active {
    span::after {
      bottom: 25px;
    }
  }
`;

const Yoon = styled(Gojuon)`
  span::before {
    content: '拗音';
  }

  span::after {
    content: 'Yōon';
  }

  &:hover {
    span::after {
      content: 'Yōon';
    }
  }
`;

const YoonActive = styled(GojuonActive)`
  span::before {
    content: 'Yōon';
  }
  span::after {
    content: 'Yōon';
  }
  &:hover {
    span::before {
      content: 'Yōon';
    }
    span::after {
      content: 'Yōon';
    }
  }
`;

const Ten = styled(Gojuon)`
  span::before {
    content: '十';
  }

  span::after {
    content: 'Jū';
  }

  &:hover {
    span::after {
      content: 'Jū';
    }
  }
`;

const TenActive = styled(GojuonActive)`
  span::before {
    content: 'Jū';
  }
  span::after {
    content: 'Jū';
  }
  &:hover {
    span::before {
      content: 'Jū';
    }
    span::after {
      content: 'Jū';
    }
  }
`;

const Hundred = styled(Gojuon)`
  span::before {
    content: '百';
  }

  span::after {
    content: 'Hyaku';
  }

  &:hover {
    span::after {
      content: 'Hyaku';
    }
  }
`;

const HundredActive = styled(GojuonActive)`
  span::before {
    content: 'Hyaku';
  }
  span::after {
    content: 'Hyaku';
  }
  &:hover {
    span::before {
      content: 'Hyaku';
    }
    span::after {
      content: 'Hyaku';
    }
  }
`;

const Thousand = styled(Gojuon)`
  span::before {
    content: '千';
  }

  span::after {
    content: 'Sen';
  }

  &:hover {
    span::after {
      content: 'Sen';
    }
  }
`;

const ThousandActive = styled(GojuonActive)`
  span::before {
    content: 'Sen';
  }
  span::after {
    content: 'Sen';
  }
  &:hover {
    span::before {
      content: 'Sen';
    }
    span::after {
      content: 'Sen';
    }
  }
`;

const Tenthousand = styled(Gojuon)`
  span::before {
    content: '万+';
  }

  span::after {
    content: 'Man+';
  }

  &:hover {
    span::after {
      content: 'Man+';
    }
  }
`;

const TenthousandActive = styled(GojuonActive)`
  span::before {
    content: 'Man+';
  }
  span::after {
    content: 'Man+';
  }
  &:hover {
    span::before {
      content: 'Man+';
    }
    span::after {
      content: 'Man+';
    }
  }
`;

export default function Alphabets() {
  const [alphabets, setAlphabets] = useState(true);
  const [isHiragana, setIsHiragana] = useState(true);

  const [hiraganaGojuon, setHiraganaGojuon] = useState(true);
  const [hiraganaDakuon, setHiraganaDakuon] = useState(false);
  const [hiraganaHandakuon, setHiraganaHandakuon] = useState(false);
  const [hiraganaYoon, setHiraganaYoon] = useState(false);
  const [katakanaGojuon, setKatakanaGojuon] = useState(false);
  const [katakanaDakuon, setKatakanaDakuon] = useState(false);
  const [katakanaHandakuon, setKatakanaHandakuon] = useState(false);
  const [katakanaYoon, setKatakanaYoon] = useState(false);

  const [gojuonActive, setGojuonActive] = useState(true);
  const [dakuonActive, setDakuonActive] = useState(false);
  const [handakuonActive, setHandakuonActive] = useState(false);
  const [yoonActive, setYoonActive] = useState(false);

  const [kanjiTen, setKanjiTen] = useState(true);
  const [kanjiHundred, setKanjiHundred] = useState(false);
  const [kanjiThousand, setKanjiThousand] = useState(false);
  const [kanjiTenthousand, setKanjiTenthousand] = useState(false);

  const [tenActive, setTenActive] = useState(true);
  const [hundredActive, setHundredActive] = useState(false);
  const [thousandActive, setThousandActive] = useState(false);
  const [tenthousandActive, setTenthousandActive] = useState(false);
  useEffect(() => {
    document.title = 'Yumiru | Alphabets';
  }, []);

  const toggleNumbers = () => {
    setAlphabets(!alphabets);
  };
  const toggleAlphabet = () => {
    setIsHiragana(!isHiragana);
    if (gojuonActive) {
      setHiraganaGojuon(true);
      setKatakanaGojuon(true);
      setHiraganaDakuon(false);
      setKatakanaDakuon(false);
      setHiraganaHandakuon(false);
      setKatakanaHandakuon(false);
      setHiraganaYoon(false);
      setKatakanaYoon(false);
    }
    if (dakuonActive) {
      setHiraganaGojuon(false);
      setKatakanaGojuon(false);
      setHiraganaDakuon(true);
      setKatakanaDakuon(true);
      setHiraganaHandakuon(false);
      setKatakanaHandakuon(false);
      setHiraganaYoon(false);
      setKatakanaYoon(false);
    }
    if (handakuonActive) {
      setHiraganaGojuon(false);
      setKatakanaGojuon(false);
      setHiraganaDakuon(false);
      setKatakanaDakuon(false);
      setHiraganaHandakuon(true);
      setKatakanaHandakuon(true);
      setHiraganaYoon(false);
      setKatakanaYoon(false);
    }
    if (yoonActive) {
      setHiraganaGojuon(false);
      setKatakanaGojuon(false);
      setHiraganaDakuon(false);
      setKatakanaDakuon(false);
      setHiraganaHandakuon(false);
      setKatakanaHandakuon(false);
      setHiraganaYoon(true);
      setKatakanaYoon(true);
    }
  };

  const toggleKanji = () => {
    setIsHiragana(!isHiragana);
    if (tenActive) {
      setKanjiTen(true);
      setKanjiTen(true);
      setKanjiHundred(false);
      setKanjiHundred(false);
      setKanjiThousand(false);
      setKanjiThousand(false);
      setKanjiTenthousand(false);
      setKanjiTenthousand(false);
    }
    if (hundredActive) {
      setKanjiTen(false);
      setKanjiTen(false);
      setKanjiHundred(true);
      setKanjiHundred(true);
      setKanjiThousand(false);
      setKanjiThousand(false);
      setKanjiTenthousand(false);
      setKanjiTenthousand(false);
    }
    if (thousandActive) {
      setKanjiTen(false);
      setKanjiTen(false);
      setKanjiHundred(false);
      setKanjiHundred(false);
      setKanjiThousand(true);
      setKanjiThousand(true);
      setKanjiTenthousand(false);
      setKanjiTenthousand(false);
    }
    if (tenthousandActive) {
      setKanjiTen(false);
      setKanjiTen(false);
      setKanjiHundred(false);
      setKanjiHundred(false);
      setKanjiThousand(false);
      setKanjiThousand(false);
      setKanjiTenthousand(true);
      setKanjiTenthousand(true);
    }
  };
  const toTen = () => {
    if (isHiragana) {
      setKanjiTen(true);
      setTenActive(true);
      setKanjiHundred(false);
      setHundredActive(false);
      setKanjiThousand(false);
      setThousandActive(false);
      setKanjiTenthousand(false);
      setTenthousandActive(false);
    } else {
      setKanjiTen(true);
      setTenActive(true);
      setKanjiHundred(false);
      setHundredActive(false);
      setKanjiThousand(false);
      setThousandActive(false);
      setKanjiTenthousand(false);
      setTenthousandActive(false);
    }
  };

  const toHundred = () => {
    if (isHiragana) {
      setKanjiTen(false);
      setTenActive(false);
      setKanjiHundred(true);
      setHundredActive(true);
      setKanjiThousand(false);
      setThousandActive(false);
      setKanjiTenthousand(false);
      setTenthousandActive(false);
    } else {
      setKanjiTen(false);
      setTenActive(false);
      setKanjiHundred(true);
      setHundredActive(true);
      setKanjiThousand(false);
      setThousandActive(false);
      setKanjiTenthousand(false);
      setTenthousandActive(false);
    }
  };
  const toThousand = () => {
    if (isHiragana) {
      setKanjiTen(false);
      setTenActive(false);
      setKanjiHundred(false);
      setHundredActive(false);
      setKanjiThousand(true);
      setThousandActive(true);
      setKanjiTenthousand(false);
      setTenthousandActive(false);
    } else {
      setKanjiTen(false);
      setTenActive(false);
      setKanjiHundred(false);
      setHundredActive(false);
      setKanjiThousand(true);
      setThousandActive(true);
      setKanjiTenthousand(false);
      setTenthousandActive(false);
    }
  };
  const toTenthousand = () => {
    if (isHiragana) {
      setKanjiTen(false);
      setTenActive(false);
      setKanjiHundred(false);
      setHundredActive(false);
      setKanjiThousand(false);
      setThousandActive(false);
      setKanjiTenthousand(true);
      setTenthousandActive(true);
    } else {
      setKanjiTen(false);
      setTenActive(false);
      setKanjiHundred(false);
      setHundredActive(false);
      setKanjiThousand(false);
      setThousandActive(false);
      setKanjiTenthousand(true);
      setTenthousandActive(true);
    }
  };

  const toGojuon = () => {
    if (isHiragana) {
      setHiraganaGojuon(true);
      setGojuonActive(true);
      setHiraganaDakuon(false);
      setDakuonActive(false);
      setHiraganaHandakuon(false);
      setHandakuonActive(false);
      setHiraganaYoon(false);
      setYoonActive(false);
    } else {
      setKatakanaGojuon(true);
      setGojuonActive(true);
      setKatakanaDakuon(false);
      setDakuonActive(false);
      setKatakanaHandakuon(false);
      setHandakuonActive(false);
      setKatakanaYoon(false);
      setYoonActive(false);
    }
  };
  const toDakuon = () => {
    if (isHiragana) {
      setHiraganaGojuon(false);
      setGojuonActive(false);
      setHiraganaDakuon(true);
      setDakuonActive(true);
      setHiraganaHandakuon(false);
      setHandakuonActive(false);
      setHiraganaYoon(false);
      setYoonActive(false);
    } else {
      setKatakanaGojuon(false);
      setGojuonActive(false);
      setKatakanaDakuon(true);
      setDakuonActive(true);
      setKatakanaHandakuon(false);
      setHandakuonActive(false);
      setKatakanaYoon(false);
      setYoonActive(false);
    }
  };
  const toHandakuon = () => {
    if (isHiragana) {
      setHiraganaGojuon(false);
      setGojuonActive(false);
      setHiraganaDakuon(false);
      setDakuonActive(false);
      setHiraganaHandakuon(true);
      setHandakuonActive(true);
      setHiraganaYoon(false);
      setYoonActive(false);
    } else {
      setKatakanaGojuon(false);
      setGojuonActive(false);
      setKatakanaDakuon(false);
      setDakuonActive(false);
      setKatakanaHandakuon(true);
      setHandakuonActive(true);
      setKatakanaYoon(false);
      setYoonActive(false);
    }
  };
  const toYoon = () => {
    if (isHiragana) {
      setHiraganaGojuon(false);
      setGojuonActive(false);
      setHiraganaDakuon(false);
      setDakuonActive(false);
      setHiraganaHandakuon(false);
      setHandakuonActive(false);
      setHiraganaYoon(true);
      setYoonActive(true);
    } else {
      setKatakanaGojuon(false);
      setGojuonActive(false);
      setKatakanaDakuon(false);
      setDakuonActive(false);
      setKatakanaHandakuon(false);
      setHandakuonActive(false);
      setKatakanaYoon(true);
      setYoonActive(true);
    }
  };
  return (
    <>
      <Title />
      <FlexWrapper>
        <PaginationButton
          disabled={alphabets}
          onClick={() => {
            toggleNumbers();
          }}
        >
          <span>PREV</span>
        </PaginationButton>
        <CurrentPage>
          <span>{alphabets ? `ALPHABETS` : `NUMBERS`}</span>
        </CurrentPage>
        <PaginationButton
          as={Number}
          disabled={!alphabets}
          onClick={() => {
            toggleNumbers();
          }}
        >
          <span>NEXT</span>
        </PaginationButton>
      </FlexWrapper>
      <FlexWrapper>
        {alphabets ? (
          <>
            <div>
              <AlphabetButton
                disabled={isHiragana}
                onClick={() => {
                  toggleAlphabet();
                }}
              >
                <span></span>
              </AlphabetButton>
            </div>
            <div>
              <SyllablesButton
                as={gojuonActive ? GojuonActive : Gojuon}
                onClick={() => {
                  toGojuon();
                }}
              >
                <span></span>
              </SyllablesButton>
              <SyllablesButton
                as={dakuonActive ? DakuonActive : Dakuon}
                onClick={() => {
                  toDakuon();
                }}
              >
                <span></span>
              </SyllablesButton>
              <SyllablesButton
                as={handakuonActive ? HandakuonActive : Handakuon}
                onClick={() => {
                  toHandakuon();
                }}
              >
                <span></span>
              </SyllablesButton>
              <SyllablesButton
                as={yoonActive ? YoonActive : Yoon}
                onClick={() => {
                  toYoon();
                }}
              >
                <span></span>
              </SyllablesButton>
            </div>
            <div>
              <AlphabetButton
                disabled={!isHiragana}
                secondary
                as={Katakana}
                onClick={() => {
                  toggleAlphabet();
                }}
              >
                <span></span>
              </AlphabetButton>
            </div>
          </>
        ) : (
          <>
            <div>
              <AlphabetButton
                disabled={isHiragana}
                as={Kanji}
                onClick={() => {
                  toggleKanji();
                }}
              >
                <span></span>
              </AlphabetButton>
            </div>
            <div>
              <SyllablesButton
                as={tenActive ? TenActive : Ten}
                onClick={() => {
                  toTen();
                }}
              >
                <span></span>
              </SyllablesButton>
              <SyllablesButton
                as={hundredActive ? HundredActive : Hundred}
                onClick={() => {
                  toHundred();
                }}
              >
                <span></span>
              </SyllablesButton>
              <SyllablesButton
                as={thousandActive ? ThousandActive : Thousand}
                onClick={() => {
                  toThousand();
                }}
              >
                <span></span>
              </SyllablesButton>
              <SyllablesButton
                as={tenthousandActive ? TenthousandActive : Tenthousand}
                onClick={() => {
                  toTenthousand();
                }}
              >
                <span></span>
              </SyllablesButton>
            </div>
            <div>
              <AlphabetButton
                disabled={!isHiragana}
                secondary
                as={Counting}
                onClick={() => {
                  toggleKanji();
                }}
              >
                <span></span>
              </AlphabetButton>
            </div>
          </>
        )}
      </FlexWrapper>
      <GridSmall>
        {alphabets ? (
          <>
            {isHiragana
              ? hiraganaAlphabets.map((letter, index) => {
                  return (
                    <Card key={index}>
                      <tbody>
                        <tr>
                          <th>
                            {hiraganaGojuon ? letter.gojuon_romaji : ' '}
                            {hiraganaDakuon ? letter.dakuon_romaji : ' '}
                            {hiraganaHandakuon ? letter.handakuon_romaji : ' '}
                            {hiraganaYoon ? letter.yoon_romaji : ' '}
                          </th>
                        </tr>
                        <tr>
                          <td>
                            {hiraganaGojuon ? letter.gojuon_a : ' '}
                            {hiraganaDakuon ? letter.dakuon_a : ' '}
                            {hiraganaHandakuon ? letter.handakuon_a : ' '}
                            {hiraganaYoon ? letter.yoon_1 : ' '}

                            <span>
                              {hiraganaGojuon ? letter.gojuon_romaji_a : ' '}
                              {hiraganaDakuon ? letter.dakuon_romaji_a : ' '}
                              {hiraganaHandakuon
                                ? letter.handakuon_romaji_a
                                : ' '}
                              {hiraganaYoon ? letter.yoon_romaji_1 : ' '}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            {hiraganaGojuon ? letter.gojuon_i : ' '}
                            {hiraganaDakuon ? letter.dakuon_i : ' '}
                            {hiraganaHandakuon ? letter.handakuon_i : ' '}
                            {hiraganaYoon ? letter.yoon_2 : ' '}
                            <span>
                              {hiraganaGojuon ? letter.gojuon_romaji_i : ' '}
                              {hiraganaDakuon ? letter.dakuon_romaji_i : ' '}
                              {hiraganaHandakuon
                                ? letter.handakuon_romaji_i
                                : ' '}
                              {hiraganaYoon ? letter.yoon_romaji_2 : ' '}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            {hiraganaGojuon ? letter.gojuon_u : ' '}
                            {hiraganaDakuon ? letter.dakuon_u : ' '}
                            {hiraganaHandakuon ? letter.handakuon_u : ' '}
                            {hiraganaYoon ? letter.yoon_3 : ' '}
                            <span>
                              {hiraganaGojuon ? letter.gojuon_romaji_u : ' '}
                              {hiraganaDakuon ? letter.dakuon_romaji_u : ' '}
                              {hiraganaHandakuon
                                ? letter.handakuon_romaji_u
                                : ' '}
                              {hiraganaYoon ? letter.yoon_romaji_3 : ' '}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            {hiraganaGojuon ? letter.gojuon_e : ' '}
                            {hiraganaDakuon ? letter.dakuon_e : ' '}
                            {hiraganaHandakuon ? letter.handakuon_e : ' '}{' '}
                            {hiraganaYoon ? letter.yoon_4 : ' '}
                            <span>
                              {hiraganaGojuon ? letter.gojuon_romaji_e : ' '}
                              {hiraganaDakuon ? letter.dakuon_romaji_e : ' '}
                              {hiraganaHandakuon
                                ? letter.handakuon_romaji_e
                                : ' '}
                              {hiraganaYoon ? letter.yoon_romaji_4 : ' '}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            {hiraganaGojuon ? letter.gojuon_o : ' '}
                            {hiraganaDakuon ? letter.dakuon_o : ' '}
                            {hiraganaHandakuon ? letter.handakuon_o : ' '}
                            {hiraganaYoon ? letter.yoon_5 : ' '}

                            <span>
                              {hiraganaGojuon ? letter.gojuon_romaji_o : ' '}
                              {hiraganaDakuon ? letter.dakuon_romaji_o : ' '}
                              {hiraganaHandakuon
                                ? letter.handakuon_romaji_o
                                : ' '}
                              {hiraganaYoon ? letter.yoon_romaji_5 : ' '}
                            </span>
                          </td>
                        </tr>
                        {hiraganaYoon ? (
                          <>
                            <tr>
                              <td>
                                {letter.yoon_6}
                                <span>{letter.yoon_romaji_6}</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                {letter.yoon_7}
                                <span>{letter.yoon_romaji_7}</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                {letter.yoon_8}
                                <span>{letter.yoon_romaji_8}</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                {letter.yoon_9}
                                <span>{letter.yoon_romaji_9}</span>
                              </td>
                            </tr>
                          </>
                        ) : (
                          <></>
                        )}
                      </tbody>
                    </Card>
                  );
                })
              : katakanaAlphabets.map((letter, index) => {
                  return (
                    <Card key={index}>
                      <tbody>
                        <tr>
                          <th>
                            {katakanaGojuon ? letter.gojuon_romaji : ' '}
                            {katakanaDakuon ? letter.dakuon_romaji : ' '}
                            {katakanaHandakuon ? letter.handakuon_romaji : ' '}
                            {katakanaYoon ? letter.yoon_romaji : ' '}
                          </th>
                        </tr>
                        <tr>
                          <td>
                            {katakanaGojuon ? letter.gojuon_a : ' '}
                            {katakanaDakuon ? letter.dakuon_a : ' '}
                            {katakanaHandakuon ? letter.handakuon_a : ' '}
                            {katakanaYoon ? letter.yoon_1 : ' '}

                            <span>
                              {katakanaGojuon ? letter.gojuon_romaji_a : ' '}
                              {katakanaDakuon ? letter.dakuon_romaji_a : ' '}
                              {katakanaHandakuon
                                ? letter.handakuon_romaji_a
                                : ' '}
                              {katakanaYoon ? letter.yoon_romaji_1 : ' '}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            {katakanaGojuon ? letter.gojuon_i : ' '}
                            {katakanaDakuon ? letter.dakuon_i : ' '}
                            {katakanaHandakuon ? letter.handakuon_i : ' '}
                            {katakanaYoon ? letter.yoon_2 : ' '}
                            <span>
                              {katakanaGojuon ? letter.gojuon_romaji_i : ' '}
                              {katakanaDakuon ? letter.dakuon_romaji_i : ' '}
                              {katakanaHandakuon
                                ? letter.handakuon_romaji_i
                                : ' '}
                              {katakanaYoon ? letter.yoon_romaji_2 : ' '}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            {katakanaGojuon ? letter.gojuon_u : ' '}
                            {katakanaDakuon ? letter.dakuon_u : ' '}
                            {katakanaHandakuon ? letter.handakuon_u : ' '}
                            {katakanaYoon ? letter.yoon_3 : ' '}
                            <span>
                              {katakanaGojuon ? letter.gojuon_romaji_u : ' '}
                              {katakanaDakuon ? letter.dakuon_romaji_u : ' '}
                              {katakanaHandakuon
                                ? letter.handakuon_romaji_u
                                : ' '}
                              {katakanaYoon ? letter.yoon_romaji_3 : ' '}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            {katakanaGojuon ? letter.gojuon_e : ' '}
                            {katakanaDakuon ? letter.dakuon_e : ' '}
                            {katakanaHandakuon ? letter.handakuon_e : ' '}{' '}
                            {katakanaYoon ? letter.yoon_4 : ' '}
                            <span>
                              {katakanaGojuon ? letter.gojuon_romaji_e : ' '}
                              {katakanaDakuon ? letter.dakuon_romaji_e : ' '}
                              {katakanaHandakuon
                                ? letter.handakuon_romaji_e
                                : ' '}
                              {katakanaYoon ? letter.yoon_romaji_4 : ' '}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            {katakanaGojuon ? letter.gojuon_o : ' '}
                            {katakanaDakuon ? letter.dakuon_o : ' '}
                            {katakanaHandakuon ? letter.handakuon_o : ' '}
                            {katakanaYoon ? letter.yoon_5 : ' '}

                            <span>
                              {katakanaGojuon ? letter.gojuon_romaji_o : ' '}
                              {katakanaDakuon ? letter.dakuon_romaji_o : ' '}
                              {katakanaHandakuon
                                ? letter.handakuon_romaji_o
                                : ' '}
                              {katakanaYoon ? letter.yoon_romaji_5 : ' '}
                            </span>
                          </td>
                        </tr>
                        {katakanaYoon ? (
                          <>
                            <tr>
                              <td>
                                {letter.yoon_6}
                                <span>{letter.yoon_romaji_6}</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                {letter.yoon_7}
                                <span>{letter.yoon_romaji_7}</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                {letter.yoon_8}
                                <span>{letter.yoon_romaji_8}</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                {letter.yoon_9}
                                <span>{letter.yoon_romaji_9}</span>
                              </td>
                            </tr>
                          </>
                        ) : (
                          <></>
                        )}
                      </tbody>
                    </Card>
                  );
                })}
          </>
        ) : (
          <>
            {isHiragana
              ? kanjiNumbers.map((number, index) => {
                  return (
                    <Card key={index}>
                      <tbody>
                        <tr>
                          <th>
                            {kanjiTen ? number.ten_romaji : ' '}
                            {kanjiHundred ? number.hundred_romaji : ' '}
                            {kanjiThousand ? number.thousand_romaji : ' '}
                            {kanjiTenthousand ? number.tenthousand_romaji : ' '}
                            <span>
                              {kanjiTen ? number.ten_romaji_top : ' '}
                              {kanjiHundred ? number.hundred_romaji_top : ' '}
                              {kanjiThousand ? number.thousand_romaji_top : ' '}
                              {kanjiTenthousand
                                ? number.tenthousand_romaji_top
                                : ' '}
                            </span>
                          </th>
                        </tr>
                        <tr>
                          <td>
                            {kanjiTen ? number.ten_1 : ' '}
                            {kanjiHundred ? number.hundred_1 : ' '}
                            {kanjiThousand ? number.thousand_1 : ' '}
                            {kanjiTenthousand ? number.tenthousand_1 : ' '}

                            <span>
                              {kanjiTenthousand
                                ? number.tenthousand_romaji_1
                                : ' '}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            {kanjiTen ? number.ten_2 : ' '}
                            {kanjiHundred ? number.hundred_2 : ' '}
                            {kanjiThousand ? number.thousand_2 : ' '}
                            {kanjiTenthousand ? number.tenthousand_2 : ' '}
                            <span>
                              {kanjiTen ? number.ten_romaji_2 : ' '}
                              {kanjiHundred ? number.hundred_romaji_2 : ' '}
                              {kanjiThousand ? number.thousand_romaji_2 : ' '}
                              {kanjiTenthousand
                                ? number.tenthousand_romaji_2
                                : ' '}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            {kanjiTen ? number.ten_3 : ' '}
                            {kanjiHundred ? number.hundred_3 : ' '}
                            {kanjiThousand ? number.thousand_3 : ' '}
                            {kanjiTenthousand ? number.tenthousand_3 : ' '}
                            <span>
                              {kanjiTen ? number.ten_romaji_3 : ' '}
                              {kanjiHundred ? number.hundred_romaji_3 : ' '}
                              {kanjiThousand ? number.thousand_romaji_3 : ' '}
                              {kanjiTenthousand
                                ? number.tenthousand_romaji_3
                                : ' '}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            {kanjiTen ? number.ten_4 : ' '}
                            {kanjiHundred ? number.hundred_4 : ' '}
                            {kanjiThousand ? number.thousand_4 : ' '}{' '}
                            {kanjiTenthousand ? number.tenthousand_4 : ' '}
                            <span>
                              {kanjiTen ? number.ten_romaji_4 : ' '}
                              {kanjiHundred ? number.hundred_romaji_4 : ' '}
                              {kanjiThousand ? number.thousand_romaji_4 : ' '}
                              {kanjiTenthousand
                                ? number.tenthousand_romaji_4
                                : ' '}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            {kanjiTen ? number.ten_5 : ' '}
                            {kanjiHundred ? number.hundred_5 : ' '}
                            {kanjiThousand ? number.thousand_5 : ' '}
                            {kanjiTenthousand ? number.tenthousand_5 : ' '}

                            <span>
                              {kanjiTen ? number.ten_romaji_5 : ' '}
                              {kanjiHundred ? number.hundred_romaji_5 : ' '}
                              {kanjiThousand ? number.thousand_romaji_5 : ' '}
                              {kanjiTenthousand
                                ? number.tenthousand_romaji_5
                                : ' '}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            {kanjiTen ? number.ten_6 : ' '}
                            {kanjiHundred ? number.hundred_6 : ' '}
                            {kanjiThousand ? number.thousand_6 : ' '}
                            {kanjiTenthousand ? number.tenthousand_6 : ' '}

                            <span>
                              {kanjiTen ? number.ten_romaji_6 : ' '}
                              {kanjiHundred ? number.hundred_romaji_6 : ' '}
                              {kanjiThousand ? number.thousand_romaji_6 : ' '}
                              {kanjiTenthousand
                                ? number.tenthousand_romaji_6
                                : ' '}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            {kanjiTen ? number.ten_7 : ' '}
                            {kanjiHundred ? number.hundred_7 : ' '}
                            {kanjiThousand ? number.thousand_7 : ' '}
                            {kanjiTenthousand ? number.tenthousand_7 : ' '}

                            <span>
                              {kanjiTen ? number.ten_romaji_7 : ' '}
                              {kanjiHundred ? number.hundred_romaji_7 : ' '}
                              {kanjiThousand ? number.thousand_romaji_7 : ' '}
                              {kanjiTenthousand
                                ? number.tenthousand_romaji_7
                                : ' '}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            {kanjiTen ? number.ten_8 : ' '}
                            {kanjiHundred ? number.hundred_8 : ' '}
                            {kanjiThousand ? number.thousand_8 : ' '}
                            {kanjiTenthousand ? number.tenthousand_8 : ' '}

                            <span>
                              {kanjiTen ? number.ten_romaji_8 : ' '}
                              {kanjiHundred ? number.hundred_romaji_8 : ' '}
                              {kanjiThousand ? number.thousand_romaji_8 : ' '}
                              {kanjiTenthousand
                                ? number.tenthousand_romaji_8
                                : ' '}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            {kanjiTen ? number.ten_9 : ' '}
                            {kanjiHundred ? number.hundred_9 : ' '}
                            {kanjiThousand ? number.thousand_9 : ' '}
                            {kanjiTenthousand ? number.tenthousand_9 : ' '}

                            <span>
                              {kanjiTen ? number.ten_romaji_9 : ' '}
                              {kanjiHundred ? number.hundred_romaji_9 : ' '}
                              {kanjiThousand ? number.thousand_romaji_9 : ' '}
                              {kanjiTenthousand
                                ? number.tenthousand_romaji_9
                                : ' '}
                            </span>
                          </td>
                        </tr>
                        {kanjiTen ? (
                          <>
                            <tr>
                              <td>
                                {number.ten_10}

                                <span>{number.ten_romaji_10}</span>
                              </td>
                            </tr>
                          </>
                        ) : (
                          <></>
                        )}
                      </tbody>
                    </Card>
                  );
                })
              : countingMethods.map((number, index) => {
                  return (
                    <Card key={index}>
                      <tbody>
                        <tr>
                          <th>
                            {kanjiTen ? number.ten_romaji : ' '}
                            {kanjiHundred ? number.hundred_romaji : ' '}
                            {kanjiThousand ? number.thousand_romaji : ' '}
                            {kanjiTenthousand ? number.tenthousand_romaji : ' '}
                          </th>
                        </tr>
                        <tr>
                          <td>
                            {kanjiTen ? number.ten_1 : ' '}
                            {kanjiHundred ? number.hundred_1 : ' '}
                            {kanjiThousand ? number.thousand_1 : ' '}
                            {kanjiTenthousand ? number.tenthousand_1 : ' '}

                            <span>
                              {kanjiTen ? number.ten_romaji_1 : ' '}
                              {kanjiHundred ? number.hundred_romaji_1 : ' '}
                              {kanjiThousand ? number.thousand_romaji_1 : ' '}
                              {kanjiTenthousand
                                ? number.tenthousand_romaji_1
                                : ' '}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            {kanjiTen ? number.ten_2 : ' '}
                            {kanjiHundred ? number.hundred_2 : ' '}
                            {kanjiThousand ? number.thousand_2 : ' '}
                            {kanjiTenthousand ? number.tenthousand_2 : ' '}
                            <span>
                              {kanjiTen ? number.ten_romaji_2 : ' '}
                              {kanjiHundred ? number.hundred_romaji_2 : ' '}
                              {kanjiThousand ? number.thousand_romaji_2 : ' '}
                              {kanjiTenthousand
                                ? number.tenthousand_romaji_2
                                : ' '}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            {kanjiTen ? number.ten_3 : ' '}
                            {kanjiHundred ? number.hundred_3 : ' '}
                            {kanjiThousand ? number.thousand_3 : ' '}
                            {kanjiTenthousand ? number.tenthousand_3 : ' '}
                            <span>
                              {kanjiTen ? number.ten_romaji_3 : ' '}
                              {kanjiHundred ? number.hundred_romaji_3 : ' '}
                              {kanjiThousand ? number.thousand_romaji_3 : ' '}
                              {kanjiTenthousand
                                ? number.tenthousand_romaji_3
                                : ' '}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            {kanjiTen ? number.ten_4 : ' '}
                            {kanjiHundred ? number.hundred_4 : ' '}
                            {kanjiThousand ? number.thousand_4 : ' '}{' '}
                            {kanjiTenthousand ? number.tenthousand_4 : ' '}
                            <span>
                              {kanjiTen ? number.ten_romaji_4 : ' '}
                              {kanjiHundred ? number.hundred_romaji_4 : ' '}
                              {kanjiThousand ? number.thousand_romaji_4 : ' '}
                              {kanjiTenthousand
                                ? number.tenthousand_romaji_4
                                : ' '}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </Card>
                  );
                })}
          </>
        )}
      </GridSmall>
    </>
  );
}
