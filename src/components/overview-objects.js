import letters from "../images/letters.png";
import nouns from "../images/nouns.png";
import unfinished from "../images/unfinished.png";

const OverviewObjects = [
  {
    preview: letters,
    furigana: "も 文 — すう 数 — じ 字",
    japName: "文字と数字",
    engName: "Letters and numbers",
    url: "/alphabets",
    disabled: false,
  },
  {
    preview: nouns,
    furigana: "めい 名 — し 詞",
    japName: "名詞",
    engName: "Nouns",
    url: "/nouns",
    disabled: false,
  },
  {
    preview: unfinished,
    furigana: "せ 世 — かい 界 — ち 地 — ず 図",
    japName: "世界地図",
    engName: "World Map",
    url: "/",
    disabled: true,
  },
  {
    preview: unfinished,
    furigana: "は 梯 — しご 子",
    japName: "梯子ゲーム",
    engName: "Ladder Game",
    url: "/",
    disabled: true,
  },
  {
    preview: unfinished,
    furigana: "き 記 — おく 憶",
    japName: "記憶ゲーム",
    engName: "Memory Game",
    url: "/",
    disabled: true,
  },
  {
    preview: unfinished,
    furigana: "お 合",
    japName: "カードを合わせる",
    engName: "Match the Cards",
    url: "/",
    disabled: true,
  },
];

export default OverviewObjects;
