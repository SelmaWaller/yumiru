import React from "react";

import kanjiNumbers from "../../../components/kanji-numbers";

import Card from "../../styles/card";

const NumberTable = ({
  isButtonOne,
  buttonOneTabOne,
  buttonOneTabTwo,
  buttonOneTabThree,
  buttonOneTabFour,
}) => {
  return (
    <>
      <>
        {isButtonOne ? (
          kanjiNumbers.map((number, index) => {
            return (
              <Card key={index}>
                <tbody>
                  <tr>
                    <th>
                      {buttonOneTabOne ? number.ten_romaji : " "}
                      {buttonOneTabTwo ? number.hundred_romaji : " "}
                      {buttonOneTabThree ? number.thousand_romaji : " "}
                      {buttonOneTabFour ? number.tenthousand_romaji : " "}
                      <span>
                        <sup>
                          {!buttonOneTabFour ? number.ten_alternative : ""}
                          {buttonOneTabFour
                            ? number.tenthousand_alternative
                            : ""}
                        </sup>
                        {buttonOneTabOne ? number.ten_romaji_top : " "}
                        {buttonOneTabTwo ? number.hundred_romaji_top : " "}
                        {buttonOneTabThree ? number.thousand_romaji_top : " "}
                        {buttonOneTabFour ? number.tenthousand_romaji_top : " "}
                      </span>
                    </th>
                  </tr>
                  <tr>
                    <td>
                      {buttonOneTabOne ? number.ten_1 : " "}
                      {buttonOneTabTwo ? number.hundred_1 : " "}
                      {buttonOneTabThree ? number.thousand_1 : " "}
                      {buttonOneTabFour ? number.tenthousand_1 : " "}
                      {buttonOneTabFour ? number.tenthousand : " "}
                      <sup>
                        {buttonOneTabFour ? number.tenthousand_elevated_1 : " "}
                      </sup>
                      <span>
                        {buttonOneTabOne ? number.ten_romaji_1 : " "}
                        {buttonOneTabTwo ? number.hundred_romaji_1 : " "}
                        {buttonOneTabThree ? number.thousand_romaji_1 : " "}
                        {buttonOneTabFour ? number.tenthousand_romaji_1 : " "}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {buttonOneTabOne ? number.ten_2 : " "}
                      {buttonOneTabTwo ? number.hundred_2 : " "}
                      {buttonOneTabThree ? number.thousand_2 : " "}
                      {buttonOneTabFour ? number.tenthousand_2 : " "}
                      {buttonOneTabFour ? number.tenthousand : " "}
                      <sup>
                        {buttonOneTabFour ? number.tenthousand_elevated_2 : " "}
                      </sup>
                      <span>
                        {buttonOneTabOne ? number.ten_romaji_2 : " "}
                        {buttonOneTabTwo ? number.hundred_romaji_2 : " "}
                        {buttonOneTabThree ? number.thousand_romaji_2 : " "}
                        {buttonOneTabFour ? number.tenthousand_romaji_2 : " "}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {buttonOneTabOne ? number.ten_3 : " "}
                      {buttonOneTabTwo ? number.hundred_3 : " "}
                      {buttonOneTabThree ? number.thousand_3 : " "}
                      {buttonOneTabFour ? number.tenthousand_3 : " "}
                      {buttonOneTabFour ? number.tenthousand : " "}
                      <sup>
                        {buttonOneTabFour ? number.tenthousand_elevated_3 : " "}
                      </sup>
                      <span>
                        {buttonOneTabOne ? number.ten_romaji_3 : " "}
                        {buttonOneTabTwo ? number.hundred_romaji_3 : " "}
                        {buttonOneTabThree ? number.thousand_romaji_3 : " "}
                        {buttonOneTabFour ? number.tenthousand_romaji_3 : " "}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {buttonOneTabOne ? number.ten_4 : " "}
                      {buttonOneTabTwo ? number.hundred_4 : " "}
                      {buttonOneTabThree ? number.thousand_4 : " "}{" "}
                      {buttonOneTabFour ? number.tenthousand_4 : " "}
                      {buttonOneTabFour ? number.tenthousand : " "}
                      <sup>
                        {buttonOneTabFour ? number.tenthousand_elevated_4 : " "}
                      </sup>
                      <span>
                        {buttonOneTabOne ? number.ten_romaji_4 : " "}
                        {buttonOneTabTwo ? number.hundred_romaji_4 : " "}
                        {buttonOneTabThree ? number.thousand_romaji_4 : " "}
                        {buttonOneTabFour ? number.tenthousand_romaji_4 : " "}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {buttonOneTabOne ? number.ten_5 : " "}
                      {buttonOneTabTwo ? number.hundred_5 : " "}
                      {buttonOneTabThree ? number.thousand_5 : " "}
                      {buttonOneTabFour ? number.tenthousand_5 : " "}
                      {buttonOneTabFour ? number.tenthousand : " "}
                      <sup>
                        {buttonOneTabFour ? number.tenthousand_elevated_5 : " "}
                      </sup>
                      <span>
                        {buttonOneTabOne ? number.ten_romaji_5 : " "}
                        {buttonOneTabTwo ? number.hundred_romaji_5 : " "}
                        {buttonOneTabThree ? number.thousand_romaji_5 : " "}
                        {buttonOneTabFour ? number.tenthousand_romaji_5 : " "}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {buttonOneTabOne ? number.ten_6 : " "}
                      {buttonOneTabTwo ? number.hundred_6 : " "}
                      {buttonOneTabThree ? number.thousand_6 : " "}
                      {buttonOneTabFour ? number.tenthousand_6 : " "}
                      {buttonOneTabFour ? number.tenthousand : " "}
                      <sup>
                        {buttonOneTabFour ? number.tenthousand_elevated_6 : " "}
                      </sup>
                      <span>
                        {buttonOneTabOne ? number.ten_romaji_6 : " "}
                        {buttonOneTabTwo ? number.hundred_romaji_6 : " "}
                        {buttonOneTabThree ? number.thousand_romaji_6 : " "}
                        {buttonOneTabFour ? number.tenthousand_romaji_6 : " "}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {buttonOneTabOne ? number.ten_7 : " "}
                      {buttonOneTabTwo ? number.hundred_7 : " "}
                      {buttonOneTabThree ? number.thousand_7 : " "}
                      {buttonOneTabFour ? number.tenthousand_7 : " "}
                      {buttonOneTabFour ? number.tenthousand : " "}
                      <sup>
                        {buttonOneTabFour ? number.tenthousand_elevated_7 : " "}
                      </sup>
                      <span>
                        {buttonOneTabOne ? number.ten_romaji_7 : " "}
                        {buttonOneTabTwo ? number.hundred_romaji_7 : " "}
                        {buttonOneTabThree ? number.thousand_romaji_7 : " "}
                        {buttonOneTabFour ? number.tenthousand_romaji_7 : " "}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {buttonOneTabOne ? number.ten_8 : " "}
                      {buttonOneTabTwo ? number.hundred_8 : " "}
                      {buttonOneTabThree ? number.thousand_8 : " "}
                      {buttonOneTabFour ? number.tenthousand_8 : " "}
                      {buttonOneTabFour ? number.tenthousand : " "}
                      <sup>
                        {buttonOneTabFour ? number.tenthousand_elevated_8 : " "}
                      </sup>
                      <span>
                        {buttonOneTabOne ? number.ten_romaji_8 : " "}
                        {buttonOneTabTwo ? number.hundred_romaji_8 : " "}
                        {buttonOneTabThree ? number.thousand_romaji_8 : " "}
                        {buttonOneTabFour ? number.tenthousand_romaji_8 : " "}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {buttonOneTabOne ? number.ten_9 : " "}
                      {buttonOneTabTwo ? number.hundred_9 : " "}
                      {buttonOneTabThree ? number.thousand_9 : " "}
                      {buttonOneTabFour ? number.tenthousand_9 : " "}
                      {buttonOneTabFour ? number.tenthousand : " "}
                      <sup>
                        {buttonOneTabFour ? number.tenthousand_elevated_9 : " "}
                      </sup>

                      <span>
                        {buttonOneTabOne ? number.ten_romaji_9 : " "}
                        {buttonOneTabTwo ? number.hundred_romaji_9 : " "}
                        {buttonOneTabThree ? number.thousand_romaji_9 : " "}
                        {buttonOneTabFour ? number.tenthousand_romaji_9 : " "}
                      </span>
                    </td>
                  </tr>
                  {buttonOneTabOne ? (
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
        ) : (
          <Card>
            <tbody>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td>COMING SOON</td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td></td>
              </tr>
            </tbody>
          </Card>
        )}
      </>
    </>
  );
};

export default NumberTable;
