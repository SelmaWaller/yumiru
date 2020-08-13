import React from "react";
import Collapsible from "react-collapsible";

import GridSmall from "../styles/grid-small";

const HomeInfo = () => {
  return (
    <GridSmall>
      <div>
        <p>Rooms and furniture</p>
        <Collapsible trigger="Entranceway • 玄関 • げんかん">
          <p>Coat hanger • ハンガー</p>
          <p>Drawer • 引き出し • ひきだし</p>
          <p>Shoe rack • 靴箱 • くつばこ</p>
        </Collapsible>
        <Collapsible trigger="Living room • 居間 • いま">
          <p>Futon • 布団 • ふとん</p>
          <p>Chair • 椅子 • いす</p>
          <p>Table • テーブル</p>
          <p>TV • テレビ</p>
          <p>Bookshelf • 本棚 • ほんだな</p>
          <p>Guitar • ギター</p>
        </Collapsible>
        <Collapsible trigger="Bedroom • 寝室 • しんしつ">
          <p>Bed • ベッド</p>
          <p>Desk • 机 • つくえ</p>
          <p>Nightstand • ナイトスタンド</p>
          <p>Carpet • 絨毯 • じゅうたん</p>
          <p>Wardrobe • ワードローブ</p>
          <p>Lamp • 電灯 • でんとう</p>
        </Collapsible>
        <Collapsible trigger="Kitchen • 台所 • だいどころ">
          <p>Stove • ストーブ</p>
          <p>Fridge • 冷蔵庫 • れいぞうこ</p>
          <p>Cupboard • 食器棚 • しょっきだな</p>
          <p>Tableware • 食器 • しょっき</p>
        </Collapsible>
        <Collapsible trigger="Bathroom • お手洗い • おてあらい">
          <p>Sink • シンク</p>
          <p>Shower • シャワー</p>
          <p>Toilet • トイレ</p>
          <p>Soap • 石鹸 • せっけん</p>
          <p>Mirror • 鏡 • かがみ</p>
        </Collapsible>
        <Collapsible trigger="Basement • 地下 • ちか">
          <p>Washing machine • 洗濯機 • せんたくき</p>
          <p>Dryer • 乾燥機 • かんそうき</p>
        </Collapsible>
        <Collapsible trigger="Attic • 屋根裏 • やねうら">
          <p>Boxes • 箱 • はこ</p>
        </Collapsible>
        <Collapsible trigger="Storage room • 貯蔵室 • ちょぞうしつ">
          <p>Vacuum cleaner • 掃除機 • そうじき</p>
        </Collapsible>
        <Collapsible trigger="Garage • 車庫 • しゃこ">
          <p>Car • 車 • くるま</p>
          <p>Bicycle • 自転車 • じてんしゃ</p>
        </Collapsible>
        <Collapsible trigger="Garden • 庭 • にわ">
          <p>Gazebo • ガゼボ</p>
          <p>Bench • 縁台 • えんだい</p>
        </Collapsible>
      </div>
    </GridSmall>
  );
};

export default HomeInfo;
