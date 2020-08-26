import React, { useState } from "react";
import styled from "styled-components";

import Title from "../components/global/title";
import GridMedium from "../components/styles/grid-medium";
import GridSmall from "../components/styles/grid-small";
import FlexWrapper from "../components/styles/flex-wrapper";
import Card from "../components/styles/global-card";
import PaginationButton from "../components/styles/pagination";
import TabButton from "../components/alphabets-and-numbers/styles/tab-button";
import Grade1 from "../components/flash-cards/grade-1";
import Grade2 from "../components/flash-cards/grade-2";
import Grade3 from "../components/flash-cards/grade-3";
import Grade4 from "../components/flash-cards/grade-4";
import Grade5 from "../components/flash-cards/grade-5";
import Grade6 from "../components/flash-cards/grade-6";
import Grade7 from "../components/flash-cards/grade-7";
import NextPage from "../components/styles/next-page";
import CurrentPage from "../components/styles/current-page";

const FlashCardGrid = styled(GridMedium)`
  margin-top: -20px;
`;

const FlashCard = styled(Card)`
  text-align: center;
  min-height: 170px;
  max-height: 170px;
  min-width: 300px;
  perspective: 1000px;
  box-shadow: none;
  user-select: none;
  transiton: 0ms;
  &:hover {
    box-shadow: none;
  }

  .flip {
    transition: transform 300ms, box-shadow 150ms;
    position: relative;
    transform-style: preserve-3d;
    width: 300px;
    height: 170px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: ${(props) => props.theme.flashCardShadowFront};
  }

  &:active .flip {
    transform: rotateY(180deg);
  }

  .flip__kanji,
  .flip__solution {
    position: absolute;
    -webkit-backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      margin: 0;
      font-size: 70px;
      font-family: "Comfortaa", sans-serif;
      color: ${(props) => props.theme.globalText};
    }
    div {
      display: block;
      margin-left: 20px;
      margin-right: 20px;
      min-width: 140px;
      max-width: 140px;
      ul {
        padding: 0;
        li {
          line-height: 30px;
          text-align: left;
          font-size: 16px;
          font-family: "Noto Sans JP", sans-serif;
          color: ${(props) => props.theme.globalText}a9;
        }
      }
    }
  }

  .flip__solution {
    position: absolute;
    width: 89%;
    height: 76%;
    background: ${(props) => props.theme.invertedBackground};
    box-shadow: ${(props) => props.theme.flashCardShadowBack};
    backface-visibility: hidden;
    transform: rotateY(180deg);
    font-family: "Comfortaa", sans-serif;
    text-transform: uppercase;
    padding: 20px;
    h1 {
      color: ${(props) => props.theme.invertedText};
      font-size: 16px;
    }
  }
`;

const Grades = styled.div`
    margin-top: 20px;
    text-align: center;
    select, option {
      font-size: 20px;
      font-weight: bold;
      font-family: "Comfortaa", sans-serif;
      text-transform: uppercase;
      color: ${(props) => props.theme.globalText};
  }
}
`;

export default function BasicKanji() {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGrade, setSelectedGrade] = useState(Grade1);

  let nextPage = () => {
    setStart(start + 12);
    setEnd(end + 12);
    setCurrentPage(currentPage + 1);
  };
  let prevPage = () => {
    setStart(start - 12);
    setEnd(end - 12);
    setCurrentPage(currentPage - 1);
  };
  let resetPage = () => {
    setStart(0);
    setEnd(12);
    setCurrentPage(1);
  };
  return (
    <>
      <Title />
      <Grades>
        <FlexWrapper>
          <TabButton
            disabled={selectedGrade === Grade1}
            onClick={() => {
              resetPage();
              setSelectedGrade(Grade1);
            }}
          >
            <span>☆</span>
            <div>
              <span>Grade&nbsp;1</span>
            </div>
          </TabButton>
          <TabButton
            disabled={selectedGrade === Grade2}
            onClick={() => {
              resetPage();
              setSelectedGrade(Grade2);
            }}
          >
            <span>☆☆</span>
            <div>
              <span>Grade&nbsp;2</span>
            </div>
          </TabButton>
          <TabButton
            disabled={selectedGrade === Grade3}
            onClick={() => {
              resetPage();
              setSelectedGrade(Grade3);
            }}
          >
            <span>☆☆☆</span>
            <div>
              <span>Grade&nbsp;3</span>
            </div>
          </TabButton>
          <TabButton
            disabled={selectedGrade === Grade4}
            onClick={() => {
              resetPage();
              setSelectedGrade(Grade4);
            }}
          >
            <span>★</span>
            <div>
              <span>Grade&nbsp;4</span>
            </div>
          </TabButton>
          <TabButton
            disabled={selectedGrade === Grade5}
            onClick={() => {
              resetPage();
              setSelectedGrade(Grade5);
            }}
          >
            <span>★★</span>
            <div>
              <span>Grade&nbsp;5</span>
            </div>
          </TabButton>
          <TabButton
            disabled={selectedGrade === Grade6}
            onClick={() => {
              resetPage();
              setSelectedGrade(Grade6);
            }}
          >
            <span>★★★</span>
            <div>
              <span>Grade&nbsp;6</span>
            </div>
          </TabButton>
          <TabButton
            disabled={selectedGrade === Grade7}
            onClick={() => {
              resetPage();
              setSelectedGrade(Grade7);
            }}
          >
            <span>✯</span>
            <div>
              <span>Junior&nbsp;High&nbsp;School</span>
            </div>
          </TabButton>
        </FlexWrapper>
        <FlexWrapper>
          <GridSmall>
            <PaginationButton
              disabled={start <= 1}
              onClick={() => {
                prevPage();
              }}
            >
              <span>PREV</span>
            </PaginationButton>
            <CurrentPage>
              <span>{currentPage} / 7</span>
            </CurrentPage>
            <PaginationButton
              as={NextPage}
              disabled={start >= 70}
              onClick={() => {
                nextPage();
              }}
            >
              <span>NEXT</span>
            </PaginationButton>
          </GridSmall>
        </FlexWrapper>
        <FlashCardGrid>
          {selectedGrade.slice(start, end).map((card, index) => {
            return (
              <FlashCard key={index}>
                <div className="flip">
                  <div className="flip__kanji">
                    <div>
                      <ul>
                        <li>{card.hiragana}</li>
                        <li>{card.katakana}</li>
                      </ul>
                    </div>
                    <h1>{card.kanji}</h1>
                  </div>
                  <div className="flip__solution">
                    <h1>{card.english}</h1>
                  </div>
                </div>
              </FlashCard>
            );
          })}
        </FlashCardGrid>
      </Grades>
    </>
  );
}
