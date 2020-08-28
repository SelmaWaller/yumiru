import React from "react";
import styled from "styled-components";

import FlexWrapper from "../styles/flex-wrapper";
import InfoTitle from "../alphabets-and-numbers/styles/info-title"; //move to global
import InfoBlock from "../alphabets-and-numbers/styles/info-block"; //move to global
import Card from "../styles/card";
/* import PaddingContainer from "../../components/styles/padding-container";
import ScrollContainer from "../../components/styles/scroll-container";
import TableGrid from "../../components/styles/table-grid";
import KanjiRadicals from "./kanji-radicals"; */

const tableTitle = styled(InfoTitle)`
  margin-bottom: 30px;
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
        </ul>
      </InfoBlock>
      <FlexWrapper>
        <InfoTitle as={tableTitle}>
          <span>Common kanji radicals</span>
        </InfoTitle>
      </FlexWrapper>
      <Card>
        <table>
          <tr>
            <th>COMING SOON</th>
          </tr>
        </table>
      </Card>
      {/* <PaddingContainer>
        <ScrollContainer>
          <TableGrid>
            {KanjiRadicals.map((radical, index) => {
              return (
                <Card key={index}>
                  <tbody>
                    <tr>
                      <td>{radical.radical_2}</td>
                    </tr>
                    <tr>
                      <td>{radical.radical_3}</td>
                    </tr>
                    <tr>
                      <td>{radical.radical_3}</td>
                    </tr>
                    <tr>
                      <td>{radical.radical_3}</td>
                    </tr>
                    <tr>
                      <td>{radical.radical_add_2}</td>
                    </tr>
                  </tbody>
                </Card>
              );
            })}
          </TableGrid>
        </ScrollContainer>
      </PaddingContainer> */}
    </>
  );
};
export default KanjiInfo;
