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

const HomeInfo = () => {
  return (
    <>
      {/* Convert to mapping */}
      <CollapsibleCard>
        <Titles>
          <div>
            <p>Rooms and furniture</p>
            <p>
              部屋と家具<span>へやとかぐ</span>
            </p>
          </div>
          <Collapsible trigger="Entranceway">
            <table>
              <tr>
                <td>Entranceway</td>
                <td>玄関</td>
                <td>げんかん</td>
                <td>Genkan</td>
              </tr>
              <tr>
                <td>(Coat) hanger</td>
                <td>&nbsp;</td>
                <td>ハンガー</td>
                <td>Hangā</td>
              </tr>
              <tr>
                <td>Drawer</td>
                <td>引き出し</td>
                <td>ひきだし</td>
                <td>Hikidashi</td>
              </tr>
              <tr>
                <td>Shoe rack</td>
                <td>靴箱</td>
                <td>くつばこ</td>
                <td>Kutsubako</td>
              </tr>
            </table>
          </Collapsible>
          <Collapsible trigger="Living room">
            <table>
              <tr>
                <td>Living room</td>
                <td>居間</td>
                <td>いま</td>
                <td>Ima</td>
              </tr>
              <tr>
                <td>Futon</td>
                <td>布団</td>
                <td>ふとん</td>
                <td>Futon</td>
              </tr>
              <tr>
                <td>Chair</td>
                <td>椅子</td>
                <td>いす</td>
                <td>Isu</td>
              </tr>
              <tr>
                <td>Table</td>
                <td>&nbsp;</td>
                <td>テーブル</td>
                <td>Tēburu</td>
              </tr>
              <tr>
                <td>TV</td>
                <td>&nbsp;</td>
                <td>テレビ</td>
                <td>Terebi</td>
              </tr>
              <tr>
                <td>Bookshelf</td>
                <td>本棚</td>
                <td>ほんだな</td>
                <td>Hondana</td>
              </tr>
            </table>
          </Collapsible>
          <Collapsible trigger="Bedroom">
            <table>
              <tr>
                <td>Bedroom</td>
                <td>寝室</td>
                <td>しんしつ</td>
                <td>Shinshitsu</td>
              </tr>
              <tr>
                <td>Bed</td>
                <td>&nbsp;</td>
                <td>ベッド</td>
                <td>Beddo</td>
              </tr>
              <tr>
                <td>Desk</td>
                <td>机</td>
                <td>つくえ</td>
                <td>Tskue</td>
              </tr>
              <tr>
                <td>Nightstand</td>
                <td>&nbsp;</td>
                <td>ナイトスタンド</td>
                <td>Naitostando</td>
              </tr>
              <tr>
                <td>Carpet</td>
                <td>絨毯</td>
                <td>じゅうたん</td>
                <td>Jūtan</td>
              </tr>
              <tr>
                <td>Wardrobe</td>
                <td>&nbsp;</td>
                <td>ワードローブ</td>
                <td>Wādorōbu</td>
              </tr>
              <tr>
                <td>Lamp</td>
                <td>電灯</td>
                <td>でんとう</td>
                <td>Dentō</td>
              </tr>
            </table>
          </Collapsible>
          <Collapsible trigger="Kitchen">
            <table>
              <tr>
                <td>Kitchen</td>
                <td>台所</td>
                <td>だいどころ</td>
                <td>Daidokoro</td>
              </tr>
              <tr>
                <td>Stove</td>
                <td>&nbsp;</td>
                <td>ストーブ</td>
                <td>Stōbu</td>
              </tr>
              <tr>
                <td>Fridge</td>
                <td>冷蔵庫</td>
                <td>れいぞうこ</td>
                <td>Rēzōko</td>
              </tr>
              <tr>
                <td>Cupboard</td>
                <td>食器棚</td>
                <td>しょっきだな</td>
                <td>Shōkidana</td>
              </tr>
              <tr>
                <td>Tableware</td>
                <td>食器</td>
                <td>しょっき</td>
                <td>Shōki</td>
              </tr>
            </table>
          </Collapsible>
          <Collapsible trigger="Bathroom">
            <table>
              <tr>
                <td>Bathroom</td>
                <td>お手洗い</td>
                <td>おてあらい</td>
                <td>Otearai</td>
              </tr>
              <tr>
                <td>Sink</td>
                <td>&nbsp;</td>
                <td>シンク</td>
                <td>Shinku</td>
              </tr>
              <tr>
                <td>Shower</td>
                <td>&nbsp;</td>
                <td>シャワー</td>
                <td>Shawā</td>
              </tr>
              <tr>
                <td>Toilet</td>
                <td>&nbsp;</td>
                <td>トイレ</td>
                <td>Toire</td>
              </tr>
              <tr>
                <td>Soap</td>
                <td>石鹸</td>
                <td>せっけん</td>
                <td>Sekken</td>
              </tr>
              <tr>
                <td>Mirror</td>
                <td>鏡</td>
                <td>かがみ</td>
                <td>Kagami</td>
              </tr>
            </table>
          </Collapsible>
          <Collapsible trigger="Various storerooms">
            <table>
              <tr>
                <td>Storeroom</td>
                <td>貯蔵室</td>
                <td>ちょぞうしつ</td>
                <td>Chozōshitsu</td>
              </tr>
              <tr>
                <td>Basement</td>
                <td>地下</td>
                <td>ちか</td>
                <td>Chika</td>
              </tr>
              <tr>
                <td>Attic</td>
                <td>屋根裏</td>
                <td>やねうら</td>
                <td>Yaneura</td>
              </tr>
              <tr>
                <td>Garage</td>
                <td>車庫</td>
                <td>しゃこ</td>
                <td>Shako</td>
              </tr>
              <tr>
                <td>Washing machine</td>
                <td>洗濯機</td>
                <td>せんたくき</td>
                <td>Sentakki</td>
              </tr>
              <tr>
                <td>Dryer</td>
                <td>乾燥機</td>
                <td>かんそうき</td>
                <td>Kansōki</td>
              </tr>
              <tr>
                <td>Boxes</td>
                <td>箱</td>
                <td>はこ</td>
                <td>Hako</td>
              </tr>
              <tr>
                <td>Vacuum cleaner</td>
                <td>掃除機</td>
                <td>そうじき</td>
                <td>Sōjiki</td>
              </tr>
              <tr>
                <td>Car</td>
                <td>車</td>
                <td>くるま</td>
                <td>Kuruma</td>
              </tr>
              <tr>
                <td>Bicycle</td>
                <td>自転車</td>
                <td>じてんしゃ</td>
                <td>Jitensha</td>
              </tr>
            </table>
          </Collapsible>
          <Collapsible trigger="Garden">
            <table>
              <tr>
                <td>Garden</td>
                <td>庭</td>
                <td>にわ</td>
                <td>Niwa</td>
              </tr>
              <tr>
                <td>Gazebo</td>
                <td>&nbsp;</td>
                <td>ガゼボ</td>
                <td>Gazebo</td>
              </tr>
              <tr>
                <td>Bench</td>
                <td>縁台</td>
                <td>えんだい</td>
                <td>Endai</td>
              </tr>
              <tr>
                <td>Fountain</td>
                <td>噴水</td>
                <td>ふんすい</td>
                <td>Funsui</td>
              </tr>
            </table>
          </Collapsible>
        </Titles>
      </CollapsibleCard>
    </>
  );
};

export default HomeInfo;
