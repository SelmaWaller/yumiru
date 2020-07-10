import React from "react";
import styled from "styled-components";

import FlexWrapper from "../../styles/flex-wrapper";
import InfoTitle from "../styles/info-title";
import InfoBlock from "../styles/info-block";

const counters = styled(FlexWrapper)`
  margin-top: -60px;
`;

const NumberInfo = ({ isButtonOne }) => {
  return (
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
            <span>[1]</span>: 零 &rarr; れい/rē (mostly used when talking about
            time)
          </li>
          <li>
            <span>[1]</span>: ゼロ &rarr; zero (mostly used in mathematics and
            science)
          </li>
          <li>
            <span>[1]</span>: 丸 &rarr; まる/maru (literally means circle)
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
      <FlexWrapper as={counters}>
        <InfoTitle>
          <span>Counting</span>
        </InfoTitle>
      </FlexWrapper>
      <InfoBlock>
        <ul>
          <li>
            <span>Important counters</span>
          </li>
        </ul>
      </InfoBlock>
    </>
  );
};

export default NumberInfo;
