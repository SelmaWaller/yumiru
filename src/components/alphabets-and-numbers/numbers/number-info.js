import React from "react";

import FlexWrapper from "../../styles/flex-wrapper";
import InfoTitle from "../styles/info-title";
import InfoBlock from "../styles/info-block";

const NumberInfo = ({ isButtonOne }) => {
  return (
    <>
      {isButtonOne ? (
        <>
          <FlexWrapper>
            <InfoTitle>
              <span>Alternative readings and more</span>
            </InfoTitle>
          </FlexWrapper>
          <InfoBlock>
            <ul>
              <li>
                <span>Alternative readings</span>
              </li>
              <li>
                <span>[1]</span>: 零 &rarr; れい/rē (mostly used when talking
                about time)
              </li>
              <li>
                <span>[1]</span>: ゼロ &rarr; zero (mostly used in mathematics
                and science)
              </li>
              <li>
                <span>[2]</span>: 四 &rarr; よん、し/yon, shi
              </li>
              <li>
                <span>[3]</span>: 七 &rarr; なな、しち/nana, shichi
              </li>
              <li>
                <span>[4]</span>: 九 &rarr; きゅう、く/kyū, ku
              </li>
              <li>
                <span>[5]</span>: (一)千 &rarr; せん、いっせん/sen, issen
              </li>
            </ul>
            <ul>
              <li>
                <span>Examples</span>
              </li>
              <li>
                380 1709:
                <br />
                三百八十万 千七百九
                <br />
                (sanbyaku hachi-jū man, sen nana-hyaku kyū)
              </li>
              <li>
                1 3625 2800:
                <br />
                一億 三千六百二十五万 二千八百
                <br />
                (ichi-oku, san-zen rop-pyaku ni-jū go-man, ni-sen hap-pyaku)
              </li>
            </ul>
            <ul>
              <li>
                <span>Higher numbers</span>
              </li>
              <li>
                正/10<sup>40</sup> &rarr; sē
              </li>
              <li>
                載/10<sup>44</sup> &rarr; sai
              </li>
              <li>
                極/10<sup>48</sup> &rarr; goku
              </li>
              <li>
                恒河沙/10<sup>52</sup> &rarr; gōgasha
              </li>
              <li>
                阿僧祇/10<sup>56</sup> &rarr; asōgi
              </li>
              <li>
                那由他/10<sup>60</sup> &rarr; nayuta
              </li>
              <li>
                不可思議/10<sup>64</sup> &rarr; fukashigi
              </li>
              <li>
                無量大数/10<sup>68</sup> &rarr; muryōtaisū
              </li>
            </ul>
          </InfoBlock>
        </>
      ) : (
        <>
          <FlexWrapper>
            <InfoTitle>
              <span>Counting</span>
            </InfoTitle>
          </FlexWrapper>
          <InfoBlock>
            <ul>
              <li>
                <span>Wago-system</span>
              </li>
              <li>一 &rarr; ひとつ/ひ</li>
              <li>二 &rarr; ふたつ/ふ</li>
              <li>三 &rarr; みっつ/み</li>
              <li>四 &rarr; よっつ/よ</li>
              <li>五 &rarr; いつつ/い(つ)</li>
              <li>六 &rarr; むっつ/む</li>
              <li>七 &rarr; ななつ/な</li>
              <li>八 &rarr; やっつ/や</li>
              <li>九 &rarr; ここのつ/こ</li>
              <li>十 &rarr; とお</li>
            </ul>
            <ul>
              <li>
                <span>Kango-system</span>
              </li>
              <li>一 &rarr; いち</li>
              <li>二 &rarr; に</li>
              <li>三 &rarr; さん</li>
              <li>四 &rarr; し/よん</li>
              <li>五 &rarr; ご</li>
              <li>六 &rarr; ろく</li>
              <li>七 &rarr; しち/なな</li>
              <li>八 &rarr; はち</li>
              <li>九 &rarr; く/きゅう</li>
              <li>十 &rarr; じゅう</li>
            </ul>
            <ul>
              <li>
                <span>Pronunciations</span>
              </li>
              <li>
                As with counting numbers, the sounds of some counters vary
                depending on how many countings they're at
              </li>
              <li>一匹 (ひき) &rarr; いっぴき</li>
              <li>一分 (ふん) &rarr; いっぷん</li>
              <li>一日 (か) &rarr; ついたち/いっぴ</li>
            </ul>
            <ul>
              <li>
                <span>Other less common counters</span>
              </li>
              <li>
                There are around 500 counters in the japanese language, and more
                than 200 of them are in the 'less/somewhat common' category.
              </li>
            </ul>
          </InfoBlock>
        </>
      )}
    </>
  );
};

export default NumberInfo;
