import React from "react";

import FlexWrapper from "../../styles/flex-wrapper";
import InfoTitle from "../styles/info-title";
import InfoBlock from "../styles/info-block";

const AlphabetInfo = () => {
  return (
    <>
      <FlexWrapper>
        <InfoTitle>
          <span>Newer katakana methods</span>
        </InfoTitle>
      </FlexWrapper>
      <InfoBlock>
        <ul>
          <li>
            <span>f-</span>
          </li>
          <li>ファ &rarr; fa</li>
          <li>フィ &rarr; fi</li>
          <li>フュ &rarr; fyu</li>
          <li>フェ &rarr; fe</li>
          <li>フォ &rarr; fo</li>
        </ul>
        <ul>
          <li>
            <span>u-, v-</span>
          </li>
          <li>ウィ &rarr; wi</li>
          <li>ウェ &rarr; we</li>
          <li>ウォ &rarr; wo</li>
          <li>ヴァ &rarr; va</li>
          <li>ヴィ &rarr; vi</li>
          <li>ヴェ &rarr; ve</li>
          <li>ヴォ &rarr; vo</li>
        </ul>
        <ul>
          <li>
            <span>ts-</span>
          </li>
          <li>ツァ &rarr; tsa</li>
          <li>ツィ &rarr; tsi</li>
          <li>ツェ &rarr; tse</li>
          <li>ツォ &rarr; tso</li>
        </ul>
        <ul>
          <li>
            <span>ch-, sh-, j-</span>
          </li>
          <li>チェ &rarr; che</li>
          <li>シェ &rarr; she</li>
          <li>ジェ &rarr; je</li>
        </ul>
        <ul>
          <li>
            <span>t-, d-</span>
          </li>
          <li>トゥ &rarr; tu</li>
          <li>ティ &rarr; ti</li>
          <li>ディ &rarr; di</li>
          <li>デュ &rarr; du</li>
        </ul>
      </InfoBlock>
      <FlexWrapper>
        <InfoTitle>
          <span>Pronunciations</span>
        </InfoTitle>
      </FlexWrapper>
      <InfoBlock>
        <ul>
          <li>
            <span>Double consonants and vowels</span>
          </li>
          <li>っ/ッ &rarr; small tsu/pause: prolongs the next consonant</li>
          <li>ん/ン &rarr; exception for double n</li>
          <li>ー &rarr; katakana only: prolongs syllables</li>
          <li>あ &rarr; normal a: prolongs a/ya (aa/ā)</li>
          <li>い &rarr; normal i: prolongs e/-e or i/-i (ee/ei/ē, ii/ī)</li>
          <li>う &rarr; normal u: prolongs u/yu, o/yo (uu/ū, ou/ō)</li>
          <li>お &rarr; normal o: prolongs o/yo (oo/ō)</li>
        </ul>
        <ul>
          <li>
            <span>Examples</span>
          </li>
          <li>コップ &rarr; koppu (cup)</li>
          <li>コンピューター &rarr; konpyūtā/konpyuutaa (computer)</li>
          <li>がっこう &rarr; gakkō/gakkou (school)</li>
          <li>おんな &rarr; onna (woman)</li>
          <li>おばさん &rarr; obasan (aunt)</li>
          <li>おばあさん &rarr; obāsan/obaasan (grandma)</li>
          <li>おおきい &rarr; ōkī/ookii (big)</li>
          <li>まって &rarr; matte (wait)</li>
        </ul>
        <ul>
          <li>
            <span>Sound representations</span>
          </li>
          <li>
            あ/ア &rarr; as in c<span>a</span>
            rt
          </li>
          <li>
            い/イ &rarr; as in w<span>i</span>nd
          </li>
          <li>
            う/ウ &rarr; as in n<span>oo</span>n
          </li>
          <li>
            え/エ &rarr; as in s<span>e</span>nd
          </li>
          <li>
            お/オ &rarr; as in r<span>o</span>ck
          </li>
          <li>
            The <span>R</span> should be pronounced with the tip of your tongue
            thouching the front ridges
          </li>
          <li>
            An <span>ん</span> (n) followed by <span>b</span> or <span>p</span>{" "}
            is pronounced like <span>m</span>
          </li>
        </ul>
        <ul>
          <li>
            <span>Foreign/loan words & endings with consonants</span>
          </li>
          <li>
            Katakana is usually used for countries and foreign words, places and
            names
          </li>
          <li>
            The only consonant a japanese word can end with is <span>ん</span>{" "}
            (n)
          </li>
          <li>
            The letter <span>L</span> is always replaced with <span>ル</span>{" "}
            (ru)
          </li>
          <li>idol &rarr; アイドル (aidoru)</li>
          <li>bargain &rarr; バーゲン (bāgen)</li>
          <li>bumper &rarr; バンパー (banpā)</li>
        </ul>
      </InfoBlock>
    </>
  );
};
export default AlphabetInfo;
