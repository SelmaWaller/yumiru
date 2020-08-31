import React, { useState } from "react";
import styled from "styled-components";

import Title from "../components/global/title";
import GridMedium from "../components/styles/grid-medium";
import GridSmall from "../components/styles/grid-small";
import FlexWrapper from "../components/styles/flex-wrapper";
import Card from "../components/styles/global-card";
import PaginationButton from "../components/styles/pagination";
import TabButton from "../components/alphabets-and-numbers/styles/tab-button";
import Grade1 from "../components/flash-cards/grades/grade-1";
import Grade2 from "../components/flash-cards/grades/grade-2";
import Grade3 from "../components/flash-cards/grades/grade-3";
import Grade4 from "../components/flash-cards/grades/grade-4";
import Grade5 from "../components/flash-cards/grades/grade-5";
import Grade6 from "../components/flash-cards/grades/grade-6";
import Grade7 from "../components/flash-cards/grades/grade-7";
import NextPage from "../components/styles/next-page";
import CurrentPage from "../components/styles/current-page";
import KanjiInfo from "../components/flash-cards/kanji-info";

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

  &:hover .flip {
    transform: rotateY(10deg);
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
      margin: 0 -190px 0 0;
      font-size: 70px;
      font-family: "Noto Sans JP", sans-serif;
      color: ${(props) => props.theme.globalText};
      z-index: 2;
      font-weight: normal;
    }
    div {
      display: block;
      position: absolute;
      top: -40px; 
      left: -125px;
      margin-right: 20px;
      min-width: 140px;
      max-width: 140px;
      p {
          line-height: 20px;
          padding-left: 25px;
          text-align: left;
          margin-bottom: 0;
          font-size: 14px;
          font-family: "Noto Sans JP", sans-serif;
          color: ${(props) => props.theme.globalText}dd;
          span {
            font-size: 14px;
            position: absolute;
            color: ${(props) => props.theme.globalText}75;
            font-family: "Comfortaa", sans-serif;
            left: -20px;
            top: 19px;
            font-weight: bold;
          }
          &:nth-child(2) {
            margin-top: 10px;
            span {
              top: unset;
              bottom: -3px;
            }
          }
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
    text-transform: uppercase;
    padding: 20px;
    h1 {
      margin: 0;
      color: ${(props) => props.theme.invertedText};
            font-family: "Comfortaa", sans-serif;
            font-size: 16px;
      line-height: 25px;
    }
  }
`;

const HighSchool = styled(TabButton)`
  span {
    font-size: 20px;
  }
  div {
    span {
      margin-top: -5px;
      font-size: 14px;
    }
  }
`;

const Grades = styled.div`
    margin-top: 20px;
    text-align: center;
    min-height: 250px;
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
  const gradeCount = Math.round(selectedGrade.length / 12 + 0.5);
  const GradeArray = [Grade1, Grade2, Grade3, Grade4, Grade5, Grade6, Grade7];
  const [id, setId] = useState(1);

  let nextPage = () => {
    setStart(start + 12);
    setEnd(end + 12);
    setCurrentPage(currentPage + 1);
    if (currentPage === gradeCount) {
      setId(id + 1);
      setStart(0);
      setEnd(12);
      setCurrentPage(1);
      setSelectedGrade(GradeArray[id]);
    }
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
              setId(1);
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
              setId(2);
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
              setId(3);
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
              setId(4);
              resetPage();
              setSelectedGrade(Grade4);
            }}
          >
            <span>★</span>
            <div>
              <span>Grade&nbsp;4&nbsp;(coming)</span>
            </div>
          </TabButton>
          <TabButton
            disabled={selectedGrade === Grade5}
            onClick={() => {
              setId(5);
              resetPage();
              setSelectedGrade(Grade5);
            }}
          >
            <span>★★</span>
            <div>
              <span>Grade&nbsp;5&nbsp;(coming)</span>
            </div>
          </TabButton>
          <TabButton
            disabled={selectedGrade === Grade6}
            onClick={() => {
              setId(6);
              resetPage();
              setSelectedGrade(Grade6);
            }}
          >
            <span>★★★</span>
            <div>
              <span>Grade&nbsp;6&nbsp;(coming)</span>
            </div>
          </TabButton>
          <TabButton
            as={HighSchool}
            disabled={selectedGrade === Grade7}
            onClick={() => {
              setId(7);
              resetPage();
              setSelectedGrade(Grade7);
            }}
          >
            <span>✯</span>
            <div>
              <span>Jr.&nbsp;High&nbsp;(coming)</span>
            </div>
          </TabButton>
        </FlexWrapper>
        <FlexWrapper>
          <GridSmall>
            <PaginationButton
              disabled={currentPage === 1}
              onClick={() => {
                prevPage();
              }}
            >
              <span>PREV</span>
            </PaginationButton>
            <CurrentPage>
              <span>
                {currentPage} / {gradeCount}
              </span>
            </CurrentPage>
            <PaginationButton
              disabled={selectedGrade === Grade7 && currentPage === gradeCount}
              as={NextPage}
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
                      <p>
                        {card.kun ? <span>KUN </span> : ""}
                        {card.kun}
                      </p>
                      <p>
                        {card.on ? <span>ON </span> : ""}
                        {card.on}
                      </p>
                    </div>
                    <h1>{card.kanji}</h1>
                  </div>
                  <div className="flip__solution">
                    <h1>{card.meaning}</h1>
                  </div>
                </div>
              </FlashCard>
            );
          })}
        </FlashCardGrid>
      </Grades>
      <KanjiInfo />
    </>
  );
}
