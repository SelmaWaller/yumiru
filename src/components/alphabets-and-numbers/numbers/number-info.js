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
                <span>[2]</span>: 四 &rarr; よん/し (yon/shi)
              </li>
              <li>
                <span>[3]</span>: 七 &rarr; なな/しち (nana/shichi)
              </li>
              <li>
                <span>[4]</span>: 九 &rarr; きゅう/く (kyū/ku)
              </li>
              <li>
                <span>[5]</span>: (一)千 &rarr; せん/いっせん (sen/issen)
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
                正/10<sup>40</sup> &rarr; せい (sē)
              </li>
              <li>
                載/10<sup>44</sup> &rarr; さい (sai)
              </li>
              <li>
                極/10<sup>48</sup> &rarr; ごく (goku)
              </li>
              <li>
                恒河沙/10<sup>52</sup> &rarr; ごうがしゃ (gōgasha)
              </li>
              <li>
                阿僧祇/10<sup>56</sup> &rarr; あそうぎ (asōgi)
              </li>
              <li>
                那由他/10<sup>60</sup> &rarr; なゆた (nayuta)
              </li>
              <li>
                不可思議/10<sup>64</sup> &rarr; ふかしぎ (fukashigi)
              </li>
              <li>
                無量大数/10<sup>68</sup> &rarr; むりょうたいすう (muryōtaisū)
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
              <li>一 &rarr; ひとつ/ひ (hitotsu/hi)</li>
              <li>二 &rarr; ふたつ/ふ (futatsu/fu)</li>
              <li>三 &rarr; みっつ/み (mittsu/mi)</li>
              <li>四 &rarr; よっつ/よ (yottsu/yo)</li>
              <li>五 &rarr; いつつ/い (itsutsu/i)</li>
              <li>六 &rarr; むっつ/む (muttsu)</li>
              <li>七 &rarr; ななつ/な (nanatsu/na)</li>
              <li>八 &rarr; やっつ/や (yattsu/ya)</li>
              <li>九 &rarr; ここのつ/こ (kokonotsu/ko)</li>
              <li>十 &rarr; とお (tō)</li>
            </ul>
            <ul>
              <li>
                <span>Kango-system</span>
              </li>
              <li>一 &rarr; いち (ichi)</li>
              <li>二 &rarr; に (ni)</li>
              <li>三 &rarr; さん (san)</li>
              <li>四 &rarr; し/よん (shi/yon)</li>
              <li>五 &rarr; ご (go)</li>
              <li>六 &rarr; ろく (roku)</li>
              <li>七 &rarr; しち/なな (shichi/nana)</li>
              <li>八 &rarr; はち (hachi)</li>
              <li>九 &rarr; く/きゅう (kyū/ku)</li>
              <li>十 &rarr; じゅう (jū)</li>
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
