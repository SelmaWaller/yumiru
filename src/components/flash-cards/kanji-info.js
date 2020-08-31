import React from "react";
import styled from "styled-components";

import FlexWrapper from "../styles/flex-wrapper";
import InfoTitle from "../alphabets-and-numbers/styles/info-title"; //move to global
import InfoBlock from "../alphabets-and-numbers/styles/info-block"; //move to global
import Card from "../styles/card";
import PaddingContainer from "../../components/styles/padding-container";
import ScrollContainer from "../../components/styles/scroll-container";
import TableGrid from "../../components/styles/table-grid";
import KanjiRadicals from "./kanji-radicals";

const tableTitle = styled(InfoTitle)`
  margin-bottom: 30px;
`;

const RadicalsCard = styled(Card)`
  td {
    transition-delay: 50ms;
    position: relative;
    max-width: 170px;
    &:hover span {
      transition: 150ms;
      opacity: 1;
      transform: scale(1);
      left: 45px;
      top: -60px;
    }
  }
  span:nth-child(2) {
    opacity: 0;
    transform: scale(0.3);
    top: 0;
    left: -50px;
    min-width: 100px;
    position: absolute;
    transition: 150ms;
    color: ${(props) => props.theme.globalText};
    box-shadow: ${(props) => props.theme.floatShadow};
    padding: 10px;
    background: ${(props) => props.theme.globalBackgroundLight};
  }
`;

const RadicalContainer = styled(PaddingContainer)`
  p {
    font-size: 15px;
    font-family: "Noto Sans JP", sans-serif;
    color: ${(props) => props.theme.globalText}a9;
  }
`;

const KanjiInfo = () => {
  return (
    <>
      <FlexWrapper>
        <InfoTitle>
          <span>Side notes</span>
        </InfoTitle>
      </FlexWrapper>
      <InfoBlock>
        <ul>
          <li>
            <span>KUN reading</span>
          </li>
          <li>訓読み &rarr; くんよみ</li>
          <li>Native Japanese reading of a Chinese character</li>
        </ul>
        <ul>
          <li>
            <span>ON reading</span>
          </li>
          <li>音読み &rarr; おんよみ</li>
          <li>Chinese-derived reading of a kanji</li>
        </ul>
        <ul>
          <li>
            <span>Radicals (of a kanji character)</span>
          </li>
          <li>部首 &rarr; ぶしゅ</li>
          <li>A component/element of a Chinese character</li>
          <li>There are in total 214 traditional kanji radicals</li>
        </ul>
      </InfoBlock>
      <FlexWrapper>
        <InfoTitle as={tableTitle}>
          <span>Important radicals</span>
        </InfoTitle>
      </FlexWrapper>
      <RadicalContainer>
        <ScrollContainer>
          <TableGrid>
            {KanjiRadicals.map((radical, index) => {
              return (
                <RadicalsCard key={index}>
                  <tbody>
                    <tr>
                      <th>{radical.radical_strokes_1}</th>
                    </tr>
                    <tr>
                      <td>
                        {radical.radical_strokes_2}
                        {radical.radical_2}
                        <span>{radical.position_2}</span>
                        <span>
                          {radical.meaning_2}
                          <span>{radical.example_2}</span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {radical.radical_strokes_3}
                        {radical.radical_3}
                        <span>{radical.position_3}</span>
                        <span>
                          {radical.meaning_3}
                          <span>{radical.example_3}</span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {radical.radical_3_2}
                        <span>{radical.position_3_2}</span>
                        <span>
                          {radical.meaning_3_2}
                          <span>{radical.example_3_2}</span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {radical.radical_strokes_4}
                        {radical.radical_4}
                        {radical.position_4 ? (
                          <span>{radical.position_4}</span>
                        ) : (
                          <span>&nbsp;</span>
                        )}
                        <span>
                          {radical.meaning_4}
                          <span>{radical.example_4}</span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {radical.radical_strokes_5}
                        {radical.radical_5}
                        <span>{radical.position_5}</span>
                        <span>
                          {radical.meaning_5}
                          <span>{radical.example_5}</span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {radical.radical_strokes_6}
                        {radical.radical_6}
                        <span>{radical.position_6}</span>
                        <span>
                          {radical.meaning_6}
                          <span>{radical.example_6}</span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {radical.radical_strokes_7}
                        {radical.radical_7}
                        <span>{radical.position_7}</span>

                        <span>
                          {radical.meaning_7}
                          <span>{radical.example_7}</span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {radical.radical_strokes_8}
                        {radical.radical_8}
                        <span>{radical.position_8}</span>
                        <span>
                          {radical.meaning_8}
                          <span>{radical.example_8}</span>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </RadicalsCard>
              );
            })}
          </TableGrid>
        </ScrollContainer>
        <p>*Variants of currently unavailable radicals</p>
        <p>
          Top, right, bottom, left: The radical's typical position when combined
          in a kanji
        </p>
      </RadicalContainer>
    </>
  );
};
export default KanjiInfo;
