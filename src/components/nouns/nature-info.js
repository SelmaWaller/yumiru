import React from "react";
import styled from "styled-components";
import Collapsible from "react-collapsible";

import GridSmall from "../styles/grid-small";
import Titles from "./styles/titles";

const CollapsibleCard = styled(GridSmall)`
  max-width: 600px;
  background: none;
  margin-bottom: 25px;
  opacity: 1;
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
              <tbody>
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
              </tbody>
            </table>
          </Collapsible>
          <Collapsible trigger="Farm">
            <table>
              <tbody>
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
              </tbody>
            </table>
          </Collapsible>
          <Collapsible trigger="Pets">
            <table>
              <tbody>
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
              </tbody>
            </table>
          </Collapsible>
          <Collapsible trigger="Aquatic">
            <table>
              <tbody>
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
              </tbody>
            </table>
          </Collapsible>
          <Collapsible trigger="Insects">
            <table>
              <tbody>
                <tr>
                  <td>Insect</td>
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
                  <td>Black fly</td>
                  <td>蚋</td>
                  <td>ぶゆ</td>
                  <td>Buyu</td>
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
              </tbody>
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
              <tbody>
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
                  <td>Iwa</td>
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
              </tbody>
            </table>
          </Collapsible>
          <Collapsible trigger="Sea">
            <table>
              <tbody>
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
              </tbody>
            </table>
          </Collapsible>
        </Titles>
      </CollapsibleCard>

      <CollapsibleCard>
        <Titles>
          <div>
            <p>Colors</p>
            <p>
              色<span>いろ</span>
            </p>
          </div>
          <Collapsible trigger="Rainbow">
            <table>
              <tbody>
                <tr>
                  <td>Rainbow</td>
                  <td>虹</td>
                  <td>にじ</td>
                  <td>Niji</td>
                </tr>
                <tr>
                  <td>Red</td>
                  <td>赤</td>
                  <td>あか</td>
                  <td>Aka</td>
                </tr>
                <tr>
                  <td>Orange</td>
                  <td>橙色</td>
                  <td>だいだいいろ</td>
                  <td>Daidaiiro</td>
                </tr>
                <tr>
                  <td>Yellow</td>
                  <td>黄色</td>
                  <td>きいろ</td>
                  <td>Kiiro</td>
                </tr>
                <tr>
                  <td>Green</td>
                  <td>緑</td>
                  <td>みどり</td>
                  <td>Midori</td>
                </tr>
                <tr>
                  <td>Blue</td>
                  <td>青</td>
                  <td>あお</td>
                  <td>Ao</td>
                </tr>
                <tr>
                  <td>Purple</td>
                  <td>紫</td>
                  <td>むらさき</td>
                  <td>Murasaki</td>
                </tr>
                <tr>
                  <td>Pink</td>
                  <td>桃色</td>
                  <td>ももいろ</td>
                  <td>Momoiro</td>
                </tr>
              </tbody>
            </table>
          </Collapsible>
          <Collapsible trigger="Other">
            <table>
              <tbody>
                <tr>
                  <td>Brown</td>
                  <td>茶色</td>
                  <td>ちゃいろ</td>
                  <td>Chairo</td>
                </tr>
                <tr>
                  <td>Gold</td>
                  <td>金</td>
                  <td>きん</td>
                  <td>Kin</td>
                </tr>
                <tr>
                  <td>Silver</td>
                  <td>銀</td>
                  <td>ぎん</td>
                  <td>Gin</td>
                </tr>
                <tr>
                  <td>Black</td>
                  <td>黒</td>
                  <td>くろ</td>
                  <td>Kuro</td>
                </tr>
                <tr>
                  <td>Grey</td>
                  <td>灰色</td>
                  <td>はいいろ</td>
                  <td>Haiiro</td>
                </tr>
                <tr>
                  <td>White</td>
                  <td>白</td>
                  <td>しろ</td>
                  <td>Shiro</td>
                </tr>
              </tbody>
            </table>
          </Collapsible>
        </Titles>
      </CollapsibleCard>
    </>
  );
};

export default NatureInfo;
