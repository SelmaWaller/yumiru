const KanjiRadicals = [
  {
    radical_strokes_1: "+",
    radical_strokes_2: "1",
    radical_strokes_3: "2",
    radical_strokes_4: "3",
    radical_strokes_5: "4",
    radical_strokes_6: "5",
    radical_strokes_7: "6",
    radical_strokes_8: "+7",
  },
  {
    radical_strokes_1: "1",
    radical_2: "⼇",
    meaning_2: "lid, top",
    position_2: "top",
    example_2: "六 (ろく): six",
    radical_3: "*⼝",
    meaning_3: "mouth",
    position_3: "left",
    example_3: "苔 (こけ): moss",
    radical_3_2: "⻏",
    meaning_3_2: "village, country, city",
    position_3_2: "right",
    example_3_2: "隣 (となり): adjacent",
    radical_4: "⺙",
    meaning_4: "activity, to strike, hit",
    position_4: "right",
    example_4: "敏 (びん): quick",
    radical_5: "⽧",
    meaning_5: "sickness",
    position_5: "left, top",
    example_5: "痣 (あざ): birthmark",
    radical_6: "⺮",
    meaning_6: "bamboo",
    position_6: "top",
    example_6: "答え (こたえ): answer",
    radical_7: "*⾔",
    meaning_7: "words, to speak, say",
    position_7: "left",
    example_7: "計 (けい): plan",
    radical_8: "*⾦",
    meaning_8: "metal, gold, mineral",
    position_8: "left",
    example_8: "針 (はり): needle",
  },
  {
    radical_strokes_1: "1",
    radical_2: "⺅",
    meaning_2: "person",
    position_2: "left",
    example_2: "仙 (せん): wizard",
    radical_3: "⼞",
    meaning_3: "border, territorial boundaries",
    position_3: "border",
    example_3: "四 (し): four",
    radical_3_2: "⻖",
    meaning_3_2: "hill, mound",
    position_3_2: "left",
    example_3_2: "険 (けん): steepness",
    radical_4: "*⽇",
    meaning_4: "sun, day, time",
    position_4: "left",
    example_4: "旧 (きゅう): former",
    radical_5: "*⽬",
    meaning_5: "eye",
    position_5: "left",
    example_5: "首 (くび): neck",
    radical_6: "*⽶",
    meaning_6: "rice",
    position_6: "left",
    example_6: "粘 (ねば): stickiness",
    radical_7: "*⾙",
    meaning_7: "shell",
    position_7: "left",
    example_7: "財 (ざい): fortune",
    radical_8: "⾨",
    meaning_8: "gate, door",
    position_8: "border",
    example_8: "癇 (かん): temper",
  },
  {
    radical_strokes_1: "1",
    radical_2: "𠆢",
    meaning_2: "person",
    position_2: "top",
    example_2: "会 (かい): meeting",
    radical_3: "*⼟",
    meaning_3: "earth",
    position_3: "left",
    example_3: "圧 (あつ): pressure",
    radical_3_2: "⺖",
    meaning_3_2: "heart, mind, spirit",
    position_3_2: "left",
    example_3_2: "忙しい (いそがしい): busy",
    radical_4: "月",
    meaning_4: "meat, flesh",
    position_4: "left",
    example_4: "胃 (い): stomach",
    radical_5: "⽲",
    meaning_5: "grain",
    position_5: "left",
    example_5: "私 (わたし): I, me",
    radical_6: "*⽷",
    meaning_6: "thread",
    position_6: "left",
    example_6: "級 (きゅう): class",
    radical_7: "*⾛",
    meaning_7: "to run",
    position_7: "left, bottom",
    example_7: "趙: Zhao (state)",
    radical_8: "⻗",
    meaning_8: "rain",
    position_8: "top",
    example_8: "雲 (くも): cloud",
  },
  {
    radical_strokes_1: "1",
    radical_2: "⼉",
    meaning_2: "human legs",
    position_2: "bottom",
    example_2: "元 (もと): origin",
    radical_3: "*⼥",
    meaning_3: "woman",
    position_3: "left",
    example_3: "好 (こう): good",
    radical_3_2: "⺘",
    meaning_3_2: "hand",
    position_3_2: "left",
    example_3_2: "押す (おす): to push",
    radical_4: "*⽊",
    meaning_4: "tree, wood",
    position_4: "left",
    example_4: "森 (もり): forest",
    radical_5: "*⽳",
    meaning_5: "hole, cave",
    position_5: "top",
    example_5: "腔 (こう): cavity",
    radical_6: "⾍",
    meaning_6: "worm, insect, bug",
    position_6: "left",
    example_6: "蚊 (か): mosquito",
    radical_7: "⻊",
    meaning_7: "foot, leg",
    position_7: "left",
    example_7: "蹄 (ひづめ): hoof",
    radical_8: "⾴",
    meaning_8: "head, page",
    position_8: "right",
    example_8: "額 (ひたい): forehead",
  },
  {
    radical_strokes_1: "1",
    radical_2: "⼍",
    meaning_2: "cover, crown",
    position_2: "top",
    example_2: "写り (うつり): projection",
    radical_3: "*⼦",
    meaning_3: "child, son",
    position_3: "left",
    example_3: "学 (がく): learning",
    radical_3_2: "⺡",
    meaning_3_2: "water",
    position_3_2: "left",
    example_3_2: "油 (あぶら): oil",
    radical_4: "*⽕",
    meaning_4: "fire",
    position_4: "left",
    example_4: "炎 (ほのお): flame",
    radical_5: "⻂",
    meaning_5: "clothing",
    position_5: "left",
    example_5: "襟 (えり): collar",
    radical_6: "⾏",
    meaning_6: "to go",
    position_6: "left/right",
    example_6: "術 (じゅつ): art",
    radical_7: "*⾞",
    meaning_7: "vehicle, wheel, car",
    position_7: "left",
    example_7: "軸 (じく): axis",
    radical_8: "*⿂",
    meaning_8: "fish",
    position_8: "left",
    example_8: "鮒 (ふな): carp",
  },
  {
    radical_strokes_1: "1",
    radical_2: "⺉",
    meaning_2: "knife, sword",
    position_2: "right",
    example_2: "刈 (かり): cut",
    radical_3: "⼧",
    meaning_3: "roof, house",
    position_3: "top",
    example_3: "穴 (あな): hole",
    radical_3_2: "⺨",
    meaning_3_2: "beast",
    position_3_2: "left",
    example_3_2: "獄 (ごく): jail",
    radical_4: "⺣",
    meaning_4: "fire",
    position_4: "bottom",
    example_4: "点 (てん): spot",
  },
  {
    radical_strokes_1: "1",
    radical_2: "⼚",
    meaning_2: "cliff",
    position_2: "left, top",
    example_2: "仄 (ほの): slight",
    radical_3: "⼴",
    meaning_3: "slanting roof",
    position_3: "left, top",
    example_3: "蔵 (くら): warehouse",
    radical_3_2: "⺾",
    meaning_3_2: "grass",
    position_3_2: "top",
    example_3_2: "花 (はな): flower",
    radical_4: "*⽟",
    meaning_4: "jewelry, jeweled king",
    position_4: "left",
    example_4: "璚: splendid",
  },
  {
    radical_strokes_1: "1",
    radical_3: "⼻",
    meaning_3: "step, stride, street, to go",
    position_3: "left",
    example_3: "行 (こう): go",
    radical_3_2: "⻌",
    meaning_3_2: "road, walk, to advance",
    position_3_2: "left, bottom",
    example_3_2: "迚も (とても): very",
    radical_4: "⺭",
    meaning_4: "altar, festival",
    position_4: "left",
    example_4: "礼 (れい): gratitude",
  },
];

export default KanjiRadicals;
