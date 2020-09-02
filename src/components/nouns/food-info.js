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

const FoodInfo = () => {
  return (
    <>
      {/* Convert to mapping */}
      <CollapsibleCard>
        <Titles>
          <div>
            <p>Raw materials</p>
            <p>
              原材料
              <span>げんざいりょう</span>
            </p>
          </div>
          <Collapsible trigger="Vegetables">
            <table>
              <tbody>
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
                  <td>Cucumber</td>
                  <td>胡瓜</td>
                  <td>きゅうり</td>
                  <td>Kyūri</td>
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
              </tbody>
            </table>
          </Collapsible>
          <Collapsible trigger="Fruits">
            <table>
              <tbody>
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
              </tbody>
            </table>
          </Collapsible>
          <Collapsible trigger="Meat">
            <table>
              <tbody>
                <tr>
                  <td>Meat</td>
                  <td>肉</td>
                  <td>にく</td>
                  <td>Niku</td>
                </tr>
                <tr>
                  <td>Steak</td>
                  <td>&nbsp;</td>
                  <td>ステーキ</td>
                  <td>Sutēki</td>
                </tr>
                <tr>
                  <td>Pork</td>
                  <td>豚肉</td>
                  <td>ぶたにく</td>
                  <td>Butaniku</td>
                </tr>
                <tr>
                  <td>Beef</td>
                  <td>牛肉</td>
                  <td>ぎゅうにく</td>
                  <td>Gyūniku</td>
                </tr>
                <tr>
                  <td>Fish meat</td>
                  <td>魚肉</td>
                  <td>ぎょにく</td>
                  <td>Gyoniku</td>
                </tr>
                <tr>
                  <td>Chicken</td>
                  <td>鳥肉</td>
                  <td>とりにく</td>
                  <td>Toriniku</td>
                </tr>
              </tbody>
            </table>
          </Collapsible>
          <Collapsible trigger="Grains">
            <table>
              <tbody>
                <tr>
                  <td>Grains</td>
                  <td>穀類</td>
                  <td>こくるい</td>
                  <td>Kokurui</td>
                </tr>
                <tr>
                  <td>(Cooked) rice</td>
                  <td>ご飯</td>
                  <td>ごはん</td>
                  <td>Gohan</td>
                </tr>
                <tr>
                  <td>Noodles</td>
                  <td>太麺</td>
                  <td>ふとめん</td>
                  <td>Futomen</td>
                </tr>
                <tr>
                  <td>Bread</td>
                  <td>&nbsp;</td>
                  <td>パン</td>
                  <td>Pan</td>
                </tr>
                <tr>
                  <td>Oats</td>
                  <td>オーツ麦</td>
                  <td>おおつむぎ</td>
                  <td>Ōtsu mugi</td>
                </tr>
                <tr>
                  <td>Wheat</td>
                  <td>小麦</td>
                  <td>こむぎ</td>
                  <td>Komugi</td>
                </tr>
              </tbody>
            </table>
          </Collapsible>
        </Titles>
      </CollapsibleCard>
    </>
  );
};

export default FoodInfo;
