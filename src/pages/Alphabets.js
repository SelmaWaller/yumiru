import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import hiragana from '../components/hiragana';
import katakana from '../components/katakana';

import Title from '../components/global/title';
import FlexWrapper from '../components/styles/flex-wrapper';
import Button from '../components/styles/colored-button';
import TransparentButton from '../components/styles/transparent-button';
import GridSmall from '../components/styles/grid-small';
import Card from '../components/styles/card';

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

const SyllablesButton = styled(TransparentButton)`
  right: unset;
  left: unset;
  transform: scale(0.8);
  position: relative;
  top: 0;
  box-shadow: ${(props) => props.theme.transparentButtonShadow};
  background: none;
  font-family: 'Comfortaa', sans-serif;
  background: none;
  text-transform: uppercase;

  &:hover {
    box-shadow: ${(props) => props.theme.transparentButtonShadowHover};
  }
`;

const Gojuon = styled(SyllablesButton)`
  span::before {
    content: '五十音';
    font-size: 22px;
    position: absolute;
    top: 25px;
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
      top: 11px;
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
    top: 18px;
  }

  span::after {
    content: 'Han-dakuon';
    font-size: 14px;
    bottom: 22px;
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

export default function Alphabets() {
  const [isHiragana, setIsHiragana] = useState(true);
  const [hiraganaGojuon, setHiraganaGojuon] = useState(true);
  const [hiraganaDakuon, setHiraganaDakuon] = useState(false);
  const [hiraganaHandakuon, setHiraganaHandakuon] = useState(false);
  const [hiraganaYoon, setHiraganaYoon] = useState(false);
  const [isKatakana, setIsKatakana] = useState(false);
  const [katakanaGojuon, setKatakanaGojuon] = useState(false);
  const [katakanaDakuon, setKatakanaDakuon] = useState(false);
  const [katakanaHandakuon, setKatakanaHandakuon] = useState(false);
  const [katakanaYoon, setKatakanaYoon] = useState(false);

  const [gojuonActive, setGojuonActive] = useState(true);
  const [dakuonActive, setDakuonActive] = useState(false);
  const [handakuonActive, setHandakuonActive] = useState(false);
  const [yoonActive, setYoonActive] = useState(false);
  useEffect(() => {
    document.title = 'Yumiru | Alphabets';
  }, []);

  const toggleAlphabet = () => {
    setIsHiragana(!isHiragana);
    setIsKatakana(!isKatakana);
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
            disabled={isKatakana}
            secondary
            as={Katakana}
            onClick={() => {
              toggleAlphabet();
            }}
          >
            <span></span>
          </AlphabetButton>
        </div>
      </FlexWrapper>
      <GridSmall>
        {isHiragana
          ? hiragana.map((letter, index) => {
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
                          {hiraganaHandakuon ? letter.handakuon_romaji_a : ' '}
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
                          {hiraganaHandakuon ? letter.handakuon_romaji_i : ' '}
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
                          {hiraganaHandakuon ? letter.handakuon_romaji_u : ' '}
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
                          {hiraganaHandakuon ? letter.handakuon_romaji_e : ' '}
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
                          {hiraganaHandakuon ? letter.handakuon_romaji_o : ' '}
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
          : katakana.map((letter, index) => {
              return (
                <Card yoonText key={index}>
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
                          {katakanaHandakuon ? letter.handakuon_romaji_a : ' '}
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
                          {katakanaHandakuon ? letter.handakuon_romaji_i : ' '}
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
                          {katakanaHandakuon ? letter.handakuon_romaji_u : ' '}
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
                          {katakanaHandakuon ? letter.handakuon_romaji_e : ' '}
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
                          {katakanaHandakuon ? letter.handakuon_romaji_o : ' '}
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
      </GridSmall>
    </>
  );
}
