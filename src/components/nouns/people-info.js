import React from "react";
import styled from "styled-components";
import Collapsible from "react-collapsible";

import GridSmall from "../styles/grid-small";

const CollapsibleCard = styled(GridSmall)`
  max-width: 600px;
  background: none;
  margin-bottom: 25px;
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

const PeopleInfo = () => {
  return (
    <>
      {/* Convert to mapping */}
      <CollapsibleCard>
        <Titles>
          <div>
            <p>Relationships</p>
            <p>
              関係
              <span>かんけい</span>
            </p>
          </div>
          <Collapsible trigger="Family">
            <table>
              <tr>
                <td>Family</td>
                <td>家族</td>
                <td>かぞく</td>
                <td>Kazoku</td>
              </tr>
              <tr>
                <td>Grandfather</td>
                <td>祖父</td>
                <td>そふ</td>
                <td>Sofu</td>
              </tr>
              <tr>
                <td>Grandmother</td>
                <td>祖母</td>
                <td>そぼ</td>
                <td>Sobo</td>
              </tr>
              <tr>
                <td>Uncle</td>
                <td>伯父</td>
                <td>おじ</td>
                <td>Oji</td>
              </tr>
              <tr>
                <td>Aunt</td>
                <td>叔母</td>
                <td>おば</td>
                <td>Oba</td>
              </tr>
              <tr>
                <td>Husband</td>
                <td>夫</td>
                <td>おっと</td>
                <td>Otto</td>
              </tr>
              <tr>
                <td>Wife</td>
                <td>妻</td>
                <td>つま</td>
                <td>Tsuma</td>
              </tr>
              <tr>
                <td>Mother</td>
                <td>母</td>
                <td>はは</td>
                <td>Haha</td>
              </tr>
              <tr>
                <td>Father</td>
                <td>父</td>
                <td>ちち</td>
                <td>Chichi</td>
              </tr>
              <tr>
                <td>Sibling</td>
                <td>同生</td>
                <td>どうせい</td>
                <td>Dōsē</td>
              </tr>
              <tr>
                <td>Older sister</td>
                <td>姉</td>
                <td>あね</td>
                <td>Ane</td>
              </tr>
              <tr>
                <td>Younger sister</td>
                <td>妹</td>
                <td>いもうと</td>
                <td>Imōto</td>
              </tr>
              <tr>
                <td>Older brother</td>
                <td>兄</td>
                <td>あに</td>
                <td>Ani</td>
              </tr>
              <tr>
                <td>Younger brother</td>
                <td>弟</td>
                <td>おとうと</td>
                <td>Otōto</td>
              </tr>
              <tr>
                <td>Cousin (male)</td>
                <td>従兄弟</td>
                <td>いとこ</td>
                <td>Itoko</td>
              </tr>
              <tr>
                <td>Cousin (female)</td>
                <td>従姉妹</td>
                <td>いとこ</td>
                <td>Itoko</td>
              </tr>
              <tr>
                <td>Child</td>
                <td>子供</td>
                <td>こども</td>
                <td>Kodomo</td>
              </tr>
              <tr>
                <td>Son</td>
                <td>息子</td>
                <td>むすこ</td>
                <td>Musuko</td>
              </tr>
              <tr>
                <td>Daughter</td>
                <td>娘</td>
                <td>むすめ</td>
                <td>Musume</td>
              </tr>
              <tr>
                <td>Grandchild</td>
                <td>孫</td>
                <td>まご</td>
                <td>Mago</td>
              </tr>
              <tr>
                <td>Grandson</td>
                <td>孫息子</td>
                <td>まごむすこ</td>
                <td>Magomusuko</td>
              </tr>
              <tr>
                <td>Granddaughter</td>
                <td>孫娘</td>
                <td>まごむすめ</td>
                <td>Magomusume</td>
              </tr>
            </table>
          </Collapsible>
          <Collapsible trigger="Friends and other">
            <table>
              <tr>
                <td>Friend</td>
                <td>友達</td>
                <td>ともだち</td>
                <td>Tomodachi</td>
              </tr>
              <tr>
                <td>Boyfriend</td>
                <td>彼氏</td>
                <td>かれし</td>
                <td>Kareshi</td>
              </tr>
              <tr>
                <td>Girlfriend</td>
                <td>彼女</td>
                <td>かのじょ</td>
                <td>Kanojo</td>
              </tr>
              <tr>
                <td>Acquaintance</td>
                <td>知人</td>
                <td>ちじん</td>
                <td>Chijin</td>
              </tr>
              <tr>
                <td>Colleague</td>
                <td>同僚</td>
                <td>どうりょう</td>
                <td>Dōryō</td>
              </tr>
              <tr>
                <td>Boss</td>
                <td>上司</td>
                <td>じょうし</td>
                <td>Jōshi</td>
              </tr>
              <tr>
                <td>Teacher</td>
                <td>先生</td>
                <td>せんせい</td>
                <td>Sensē</td>
              </tr>
              <tr>
                <td>Classmate</td>
                <td>同級生</td>
                <td>どうきゅうせい</td>
                <td>Dōkyūsē</td>
              </tr>
              <tr>
                <td>Landlord/lady</td>
                <td>家主</td>
                <td>やぬし</td>
                <td>Yanushi</td>
              </tr>
              <tr>
                <td>Tenant</td>
                <td>借家人</td>
                <td>しゃくやにん</td>
                <td>Shakuyanin</td>
              </tr>
              <tr>
                <td>Fiancé</td>
                <td>&nbsp;</td>
                <td>フィアンセ</td>
                <td>Fianse</td>
              </tr>
            </table>
          </Collapsible>
        </Titles>
      </CollapsibleCard>

      <CollapsibleCard>
        <Titles>
          <div>
            <p>Body</p>
            <p>
              体<span>からだ</span>
            </p>
          </div>
          <Collapsible trigger="Head">
            <table>
              <tr>
                <td>Head</td>
                <td>頭</td>
                <td>あたま</td>
                <td>Atama</td>
              </tr>
              <tr>
                <td>Hair</td>
                <td>髪</td>
                <td>かみ</td>
                <td>Kami</td>
              </tr>
              <tr>
                <td>Forehead</td>
                <td>額</td>
                <td>ひたい</td>
                <td>Hitai</td>
              </tr>
              <tr>
                <td>Eyebrow</td>
                <td>眉</td>
                <td>まゆ</td>
                <td>Mayu</td>
              </tr>
              <tr>
                <td>Eye</td>
                <td>眼</td>
                <td>め</td>
                <td>Me</td>
              </tr>
              <tr>
                <td>Eyelash</td>
                <td>&nbsp;</td>
                <td>まつげ</td>
                <td>Matsuge</td>
              </tr>
              <tr>
                <td>Nose</td>
                <td>鼻</td>
                <td>はな</td>
                <td>Hana</td>
              </tr>
              <tr>
                <td>Mouth</td>
                <td>口</td>
                <td>くち</td>
                <td>Kuchi</td>
              </tr>
              <tr>
                <td>Lip</td>
                <td>唇</td>
                <td>くちびる</td>
                <td>Kuchibiru</td>
              </tr>
              <tr>
                <td>Teeth</td>
                <td>歯並び</td>
                <td>はならび</td>
                <td>Hanarabi</td>
              </tr>
              <tr>
                <td>Cheek</td>
                <td>頬</td>
                <td>ほお</td>
                <td>Hō</td>
              </tr>
              <tr>
                <td>Chin</td>
                <td>顎</td>
                <td>あご</td>
                <td>Ago</td>
              </tr>
              <tr>
                <td>Ear</td>
                <td>耳</td>
                <td>みみ</td>
                <td>Mimi</td>
              </tr>
              <tr>
                <td>Tongue</td>
                <td>舌</td>
                <td>した</td>
                <td>Shita</td>
              </tr>
            </table>
          </Collapsible>
          <Collapsible trigger="Body">
            <table>
              <tr>
                <td>Body</td>
                <td>体</td>
                <td>からだ</td>
                <td>Karada</td>
              </tr>
              <tr>
                <td>Neck</td>
                <td>首</td>
                <td>くび</td>
                <td>Kubi</td>
              </tr>
              <tr>
                <td>Chest</td>
                <td>胸</td>
                <td>むね</td>
                <td>Mune</td>
              </tr>
              <tr>
                <td>Back</td>
                <td>背</td>
                <td>せ</td>
                <td>Se</td>
              </tr>
              <tr>
                <td>Rib</td>
                <td>肋</td>
                <td>あばら</td>
                <td>Abara</td>
              </tr>
              <tr>
                <td>Stomach</td>
                <td>腹</td>
                <td>はら</td>
                <td>Hara</td>
              </tr>
              <tr>
                <td>Waist</td>
                <td>腰</td>
                <td>こし</td>
                <td>Koshi</td>
              </tr>
            </table>
          </Collapsible>
          <Collapsible trigger="Arm">
            <table>
              <tr>
                <td>Arm</td>
                <td>腕</td>
                <td>うで</td>
                <td>Ude</td>
              </tr>
              <tr>
                <td>Shoulder</td>
                <td>肩</td>
                <td>かた</td>
                <td>Kata</td>
              </tr>
              <tr>
                <td>Elbow</td>
                <td>肘</td>
                <td>ひじ</td>
                <td>Hiji</td>
              </tr>
              <tr>
                <td>Wrist</td>
                <td>手首</td>
                <td>てくび</td>
                <td>Tekubi</td>
              </tr>
              <tr>
                <td>Hand</td>
                <td>手</td>
                <td>て</td>
                <td>Te</td>
              </tr>
              <tr>
                <td>Palm</td>
                <td>平手</td>
                <td>ひらて</td>
                <td>Hirate</td>
              </tr>
              <tr>
                <td>Finger</td>
                <td>指</td>
                <td>ゆび</td>
                <td>Yubi</td>
              </tr>
              <tr>
                <td>Nail</td>
                <td>爪</td>
                <td>つめ</td>
                <td>Tsume</td>
              </tr>
            </table>
          </Collapsible>
          <Collapsible trigger="Leg">
            <table>
              <tr>
                <td>Leg</td>
                <td>脚</td>
                <td>あし</td>
                <td>Ashi</td>
              </tr>
              <tr>
                <td>Thigh</td>
                <td>股</td>
                <td>もも</td>
                <td>Momo</td>
              </tr>
              <tr>
                <td>Knee</td>
                <td>膝</td>
                <td>ひざ</td>
                <td>Hiza</td>
              </tr>
              <tr>
                <td>Calf</td>
                <td>腓</td>
                <td>こむら</td>
                <td>Komura</td>
              </tr>
              <tr>
                <td>Foot</td>
                <td>足</td>
                <td>あし</td>
                <td>Ashi</td>
              </tr>
              <tr>
                <td>Toe</td>
                <td>足の指</td>
                <td>あしのゆび</td>
                <td>Ashi no yubi</td>
              </tr>
            </table>
          </Collapsible>
        </Titles>
      </CollapsibleCard>

      <CollapsibleCard>
        <Titles>
          <div>
            <p>Clothing</p>
            <p>
              服<span>ふく</span>
            </p>
          </div>
          <Collapsible trigger="Outwear">
            <table>
              <tr>
                <td>Hat</td>
                <td>帽子</td>
                <td>ぼうし</td>
                <td>Bōshi</td>
              </tr>
              <tr>
                <td>Scarf</td>
                <td>&nbsp;</td>
                <td>スカーフ</td>
                <td>Skāfu</td>
              </tr>
              <tr>
                <td>Jacket</td>
                <td>上着</td>
                <td>うわぎ</td>
                <td>Uwagi</td>
              </tr>
              <tr>
                <td>Coat</td>
                <td>&nbsp;</td>
                <td>コート</td>
                <td>Kōto</td>
              </tr>
              <tr>
                <td>Boots</td>
                <td>&nbsp;</td>
                <td>ブーツ</td>
                <td>Būtsu</td>
              </tr>
              <tr>
                <td>Mittens</td>
                <td>手袋</td>
                <td>てぶくろ</td>
                <td>Tebukuro</td>
              </tr>
            </table>
          </Collapsible>
          <Collapsible trigger="Casual">
            <table>
              <tr>
                <td>Sweater</td>
                <td>&nbsp;</td>
                <td>セーター</td>
                <td>Sētā</td>
              </tr>
              <tr>
                <td>Shirt</td>
                <td>&nbsp;</td>
                <td>シャツ</td>
                <td>Shatsu</td>
              </tr>
              <tr>
                <td>Pants</td>
                <td>&nbsp;</td>
                <td>ズボン</td>
                <td>Zubon</td>
              </tr>
              <tr>
                <td>Shorts</td>
                <td>短パン</td>
                <td>たんパン</td>
                <td>Tanpan</td>
              </tr>
              <tr>
                <td>Underwear</td>
                <td>下着</td>
                <td>したぎ</td>
                <td>Shitagi</td>
              </tr>
              <tr>
                <td>Socks</td>
                <td>靴下</td>
                <td>くつした</td>
                <td>Kutsushita</td>
              </tr>
              <tr>
                <td>Shoes</td>
                <td>靴</td>
                <td>くつ</td>
                <td>Kutsu</td>
              </tr>
              <tr>
                <td>Hoodie</td>
                <td>&nbsp;</td>
                <td>パーカー</td>
                <td>Pākā</td>
              </tr>
            </table>
          </Collapsible>
          <Collapsible trigger="Formal">
            <table>
              <tr>
                <td>Dress</td>
                <td>身なり</td>
                <td>みなり</td>
                <td>Minari</td>
              </tr>
              <tr>
                <td>Suit</td>
                <td>背広</td>
                <td>せびろ</td>
                <td>Sebiro</td>
              </tr>
              <tr>
                <td>Dress shirt</td>
                <td>&nbsp;</td>
                <td>ワイシャツ</td>
                <td>Waishatsu</td>
              </tr>
              <tr>
                <td>Skirt</td>
                <td>&nbsp;</td>
                <td>スカート</td>
                <td>Skāto</td>
              </tr>
              <tr>
                <td>Blazer</td>
                <td>&nbsp;</td>
                <td>ブレザー</td>
                <td>Burezā</td>
              </tr>
              <tr>
                <td>Blouse</td>
                <td>&nbsp;</td>
                <td>ブラウス</td>
                <td>Burausu</td>
              </tr>
              <tr>
                <td>Pumps</td>
                <td>&nbsp;</td>
                <td>パンプス</td>
                <td>Pampusu</td>
              </tr>
            </table>
          </Collapsible>
          <Collapsible trigger="Workout">
            <table>
              <tr>
                <td>Swimsuit</td>
                <td>水着</td>
                <td>みずぎ</td>
                <td>Mizugi</td>
              </tr>
              <tr>
                <td>Bikini</td>
                <td>&nbsp;</td>
                <td>ビキニ</td>
                <td>Bikini</td>
              </tr>
              <tr>
                <td>Sneakers</td>
                <td>運動靴</td>
                <td>うんどうぐつ</td>
                <td>Undōgutsu</td>
              </tr>
            </table>
          </Collapsible>
          <Collapsible trigger="Accessories">
            <table>
              <tr>
                <td>Accessories</td>
                <td>部品</td>
                <td>ぶひん</td>
                <td>Buhin</td>
              </tr>
              <tr>
                <td>Belt</td>
                <td>&nbsp;</td>
                <td>ベルト</td>
                <td>Beruto</td>
              </tr>
              <tr>
                <td>Wrist watch</td>
                <td>腕時計</td>
                <td>うでどけい</td>
                <td>Udedokē</td>
              </tr>
              <tr>
                <td>Necklace</td>
                <td>首飾り</td>
                <td>くびかざ</td>
                <td>kubikazaku</td>
              </tr>
              <tr>
                <td>Necktie</td>
                <td>&nbsp;</td>
                <td>ネクタイ</td>
                <td>Nekutai</td>
              </tr>
              <tr>
                <td>Earrings</td>
                <td>耳飾り</td>
                <td>みみかざり</td>
                <td>Mimikazari</td>
              </tr>
              <tr>
                <td>Ring</td>
                <td>指輪</td>
                <td>ゆびわ</td>
                <td>Yubiwa</td>
              </tr>
              <tr>
                <td>Bracelet</td>
                <td>腕飾り</td>
                <td>うでかざり</td>
                <td>Udekazari</td>
              </tr>
              <tr>
                <td>Suspenders</td>
                <td>靴下止め</td>
                <td>くつしたどめ</td>
                <td>Kutsushitadome</td>
              </tr>
              <tr>
                <td>Bag</td>
                <td>鞄</td>
                <td>かばん</td>
                <td>Kaban</td>
              </tr>
              <tr>
                <td>Handbag</td>
                <td>手提げ</td>
                <td>てさげ</td>
                <td>Tesage</td>
              </tr>
            </table>
          </Collapsible>
        </Titles>
      </CollapsibleCard>
    </>
  );
};

export default PeopleInfo;
