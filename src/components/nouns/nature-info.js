import React from "react";
import styled from "styled-components";
import Collapsible from "react-collapsible";

import GridSmall from "../styles/grid-small";

const CollapsibleCard = styled(GridSmall)`
  max-width: 600px;
  background: none;
  margin-bottom: 30px;
`;

const Titles = styled.div`
  z-index: 999;
  div:nth-child(1) {
    position: relative;
    p {
      font-weight: bold;
      transition-delay: 50ms;
      transition: 150ms ease-out;
      color: ${(props) => props.theme.shadowText};
      font-family: "Noto Sans JP", sans-serif;
      span {
        transform: translateX(0);
        position: absolute;
        right: 0;
        left: 0;
        top: -10px;
        color: ${(props) => props.theme.shadowText}00;
        pointer-events: none;
        position: absolute;
        padding: 10px 12px 8px;
      }
    }
    &:hover {
      p:nth-child(2) {
        transform: translateX(0);
        color: ${(props) => props.theme.shadowText}00;
      }
      span {
        transition-delay: 50ms;
        transform: translateX(0);
        color: ${(props) => props.theme.globalText};
      }
    }
  }

  .Collapsible {
    margin: 10px 0;
    display: block;
    text-align: center;
    &__trigger {
      position: relative;
      font-family: "Comfortaa", sans-serif;
      color: ${(props) => props.theme.shadowText};
    }

    .is-closed::after {
      content: "\\276F";
      position: absolute;
      margin-left: 10px;
      top: -2px;
      transform: rotate(90deg);
      transition: 200ms ease;
    }

    .is-open::after {
      content: "\\276F";
      position: absolute;
      margin-left: 10px;
      transform: rotate(270deg);
      transition: 200ms ease;
    }

    &__contentOuter {
      margin: 5px 10px 0;
    }

    table {
      overflow: auto;
      width: 100%;
      box-shadow: ${(props) => props.theme.contentShadowHover};
      background: ${(props) => props.theme.globalBackground};
      padding: 10px 20px;
      font-family: "Comfortaa", sans-serif;
      font-size: 15px;
      text-transform: uppercase;
      display: inline-block;
      ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
      }

      ::-webkit-scrollbar-track {
        background: transparent;
      }

      ::-webkit-scrollbar-thumb {
        -webkit-transition: 150ms;
        transition: 150ms;
        border-radius: 100px;
        background: ${(props) => props.theme.globalScroll};
        &:hover {
          -webkit-transition: 150ms;
          transition: 150ms;
          background: ${(props) => props.theme.globalScrollHover};
        }
      }

      ::-webkit-scrollbar-corner,
      ::-webkit-resizer {
        background: transparent;
        border: none;
      }
      tr {
        border-bottom: 1px solid grey;
      }
      td {
        min-width: 120px;
        text-align: left;
        line-height: 30px;
        &:nth-child(2) {
          font-size: 22px;
        }
        span {
          font-weight: bold;
          color: ${(props) => props.theme.shadowText}bb;
        }
      }
      &:hover span {
        color: ${(props) => props.theme.shadowText}bb;
      }
    }
  }
`;

const NatureInfo = () => {
  return (
    <>
      {/* Convert to mapping */}
      <CollapsibleCard>
        <Titles>
          <div>
            <p>Animals and insects</p>
            <p>
              動物や虫
              <span>どうぶつやむし</span>
            </p>
          </div>
          <Collapsible trigger="Zoo">
            <table>
              <tr>
                <td>Zoo</td>
                <td>動物園</td>
                <td>どうぶつえん</td>
                <td>Dōbutsuen</td>
              </tr>
              <tr>
                <td>Turtle</td>
                <td>亀</td>
                <td>かめ</td>
                <td>Kame</td>
              </tr>
              <tr>
                <td>Elephant</td>
                <td>象</td>
                <td>ぞう</td>
                <td>Zō</td>
              </tr>
              <tr>
                <td>Giraffe</td>
                <td>&nbsp;</td>
                <td>キリン</td>
                <td>Girin</td>
              </tr>
              <tr>
                <td>Lion</td>
                <td>&nbsp;</td>
                <td>ライオン</td>
                <td>Raion</td>
              </tr>
              <tr>
                <td>Tiger</td>
                <td>虎</td>
                <td>とら</td>
                <td>Tora</td>
              </tr>
              <tr>
                <td>Penguin</td>
                <td>&nbsp;</td>
                <td>ペンギン</td>
                <td>Pengin</td>
              </tr>
              <tr>
                <td>Snake</td>
                <td>&nbsp;</td>
                <td>ヘビ</td>
                <td>Hebi</td>
              </tr>
              <tr>
                <td>Fox</td>
                <td>狐</td>
                <td>きつね</td>
                <td>Kitsune</td>
              </tr>
            </table>
          </Collapsible>
          <Collapsible trigger="Farm">
            <table>
              <tr>
                <td>Farm</td>
                <td>牧場</td>
                <td>ぼくじょう</td>
                <td>Bokujō</td>
              </tr>
              <tr>
                <td>Horse</td>
                <td>馬</td>
                <td>うま</td>
                <td>Uma</td>
              </tr>
              <tr>
                <td>Pig</td>
                <td>豚</td>
                <td>ぶた</td>
                <td>Buta</td>
              </tr>
              <tr>
                <td>Cow</td>
                <td>牛</td>
                <td>うし</td>
                <td>Ushi</td>
              </tr>
              <tr>
                <td>Chicken</td>
                <td>&nbsp;</td>
                <td>チキン</td>
                <td>Chikin</td>
              </tr>
              <tr>
                <td>Sheep</td>
                <td>羊</td>
                <td>ひつじ</td>
                <td>Hitsuji</td>
              </tr>
            </table>
          </Collapsible>
          <Collapsible trigger="Pets">
            <table>
              <tr>
                <td>Pets</td>
                <td>&nbsp;</td>
                <td>ペット</td>
                <td>Petto</td>
              </tr>
              <tr>
                <td>Dog</td>
                <td>犬</td>
                <td>いぬ</td>
                <td>Inu</td>
              </tr>
              <tr>
                <td>Puppy</td>
                <td>子犬</td>
                <td>こいぬ</td>
                <td>Koinu</td>
              </tr>
              <tr>
                <td>Cat</td>
                <td>猫</td>
                <td>ねこ</td>
                <td>Neko</td>
              </tr>
              <tr>
                <td>Kitten</td>
                <td>子猫</td>
                <td>こねこ</td>
                <td>Koneko</td>
              </tr>
              <tr>
                <td>Hamster</td>
                <td>&nbsp;</td>
                <td>ハムスター</td>
                <td>Hamstā</td>
              </tr>
              <tr>
                <td>Bird</td>
                <td>鳥</td>
                <td>とり</td>
                <td>Tori</td>
              </tr>
            </table>
          </Collapsible>
          <Collapsible trigger="Aquatic">
            <table>
              <tr>
                <td>Aquatic</td>
                <td>水生</td>
                <td>すいせい</td>
                <td>Suisē</td>
              </tr>
              <tr>
                <td>Fish</td>
                <td>魚</td>
                <td>さかな</td>
                <td>Sakana</td>
              </tr>
              <tr>
                <td>Whale</td>
                <td>鯨</td>
                <td>くじら</td>
                <td>Kujira</td>
              </tr>
              <tr>
                <td>Dolphin</td>
                <td>海豚</td>
                <td>いるか</td>
                <td>Iruka</td>
              </tr>
              <tr>
                <td>Crab</td>
                <td>&nbsp;</td>
                <td>カニ</td>
                <td>Kani</td>
              </tr>
              <tr>
                <td>Shark</td>
                <td>鮫</td>
                <td>さめ</td>
                <td>Same</td>
              </tr>
              <tr>
                <td>Starfish</td>
                <td>海星</td>
                <td>ひとで</td>
                <td>Hitode</td>
              </tr>
              <tr>
                <td>Octopus</td>
                <td>蛸</td>
                <td>たこ</td>
                <td>Tako</td>
              </tr>
            </table>
          </Collapsible>
          <Collapsible trigger="Insects">
            <table>
              <tr>
                <td>Insects</td>
                <td>虫</td>
                <td>むし</td>
                <td>Mushi</td>
              </tr>
              <tr>
                <td>Bee</td>
                <td>蜂</td>
                <td>はち</td>
                <td>Hachi</td>
              </tr>
              <tr>
                <td>Beetle</td>
                <td>甲虫</td>
                <td>かぶとむし</td>
                <td>Kabutomushi</td>
              </tr>
              <tr>
                <td>Butterfly</td>
                <td>&nbsp;</td>
                <td>バタフライ</td>
                <td>Batafurai</td>
              </tr>
              <tr>
                <td>Ant</td>
                <td>蟻</td>
                <td>あり</td>
                <td>Ari</td>
              </tr>
              <tr>
                <td>Larva</td>
                <td>幼虫</td>
                <td>ようちゅう</td>
                <td>Yōchū</td>
              </tr>
              <tr>
                <td>Spider</td>
                <td>蜘蛛</td>
                <td>くも</td>
                <td>Kumo</td>
              </tr>
            </table>
          </Collapsible>
        </Titles>
      </CollapsibleCard>

      <CollapsibleCard>
        <Titles>
          <div>
            <p>Plants and other things</p>
            <p>
              草木や他のもの
              <span>くさきやほかのもの</span>
            </p>
          </div>
          <Collapsible trigger="Land">
            <table>
              <tr>
                <td>Land</td>
                <td>地</td>
                <td>ち</td>
                <td>Chi</td>
              </tr>
              <tr>
                <td>Tree</td>
                <td>木</td>
                <td>き</td>
                <td>Ki</td>
              </tr>
              <tr>
                <td>Flower</td>
                <td>花</td>
                <td>はな</td>
                <td>Hana</td>
              </tr>
              <tr>
                <td>Grass</td>
                <td>草</td>
                <td>くさ</td>
                <td>Kusa</td>
              </tr>
              <tr>
                <td>Boulder</td>
                <td>岩</td>
                <td>いわ</td>
                <td></td>
              </tr>
              <tr>
                <td>Bush</td>
                <td>&nbsp;</td>
                <td>ブッシュ</td>
                <td>Busshu</td>
              </tr>
              <tr>
                <td>Mountain</td>
                <td>山</td>
                <td>やま</td>
                <td>Yama</td>
              </tr>
              <tr>
                <td>Rice field</td>
                <td>田</td>
                <td>た</td>
                <td>Ta</td>
              </tr>
              <tr>
                <td>River</td>
                <td>川</td>
                <td>かわ</td>
                <td>Kawa</td>
              </tr>
            </table>
          </Collapsible>
          <Collapsible trigger="Sea">
            <table>
              <tr>
                <td>Sea</td>
                <td>海</td>
                <td>うみ</td>
                <td>Umi</td>
              </tr>
              <tr>
                <td>Seaweed</td>
                <td>海草</td>
                <td>かいそう</td>
                <td>Kaisō</td>
              </tr>
              <tr>
                <td>Coral reef</td>
                <td>サンゴ礁</td>
                <td>さんごしょう</td>
                <td>Sangoshō</td>
              </tr>
            </table>
          </Collapsible>
        </Titles>
      </CollapsibleCard>

      <CollapsibleCard>
        <Titles>
          <div>
            <p>Food</p>
            <p>
              食べ物
              <span>たべもの</span>
            </p>
          </div>
          <Collapsible trigger="Vegetables">
            <table>
              <tr>
                <td>Vegetables</td>
                <td>野菜</td>
                <td>やさい</td>
                <td>Yasai</td>
              </tr>
              <tr>
                <td>Welsh onion</td>
                <td>葱</td>
                <td>ねぎ</td>
                <td>Negi</td>
              </tr>
              <tr>
                <td>Potato</td>
                <td>じゃが芋</td>
                <td>じゃがいも</td>
                <td>Jagaimo</td>
              </tr>
              <tr>
                <td>Pumpkin</td>
                <td>南瓜</td>
                <td>かぼちゃ</td>
                <td>Kabocha</td>
              </tr>
              <tr>
                <td>White raddish</td>
                <td>大根</td>
                <td>だいこん</td>
                <td>Daikon</td>
              </tr>
              <tr>
                <td>Tomato</td>
                <td>&nbsp;</td>
                <td>トマト</td>
                <td>Tomato</td>
              </tr>
              <tr>
                <td>Corn</td>
                <td>穀物</td>
                <td>こくもつ</td>
                <td>Kokumotsu</td>
              </tr>
              <tr>
                <td>Carrot</td>
                <td>人参</td>
                <td>にんじん</td>
                <td>Ninjin</td>
              </tr>
              <tr>
                <td>Bell pepper</td>
                <td>&nbsp;</td>
                <td>ピーマン</td>
                <td>Pīman</td>
              </tr>
            </table>
          </Collapsible>
          <Collapsible trigger="Fruits">
            <table>
              <tr>
                <td>Fruit</td>
                <td>果物</td>
                <td>くだもの</td>
                <td>Kudamono</td>
              </tr>
              <tr>
                <td>Pear</td>
                <td>梨</td>
                <td>なし</td>
                <td>Nashi</td>
              </tr>
              <tr>
                <td>Apple</td>
                <td>林檎</td>
                <td>りんご</td>
                <td>Ringo</td>
              </tr>
              <tr>
                <td>Banana</td>
                <td>&nbsp;</td>
                <td>バナナ</td>
                <td>Banana</td>
              </tr>
              <tr>
                <td>Peach</td>
                <td>桃</td>
                <td>もも</td>
                <td>Momo</td>
              </tr>
              <tr>
                <td>Melon</td>
                <td>&nbsp;</td>
                <td>メロン</td>
                <td>Meron</td>
              </tr>
              <tr>
                <td>Kiwi</td>
                <td>&nbsp;</td>
                <td>キウイ</td>
                <td>Kiui</td>
              </tr>
              <tr>
                <td>Grapes</td>
                <td>葡萄</td>
                <td>ぶどう</td>
                <td>Budō</td>
              </tr>
            </table>
          </Collapsible>
        </Titles>
      </CollapsibleCard>
    </>
  );
};

export default NatureInfo;
