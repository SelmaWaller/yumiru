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
                <td></td>
                <td></td>
                <td></td>
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
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Hair</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Forehead</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Eyebrow</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Eye</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Eyelash</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Nose</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Mouth</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Lip</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Teeth</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Cheek</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Chin</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Ear</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Tongue</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </Collapsible>
          <Collapsible trigger="Body">
            <table>
              <tr>
                <td>Body</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Neck</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Chest</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Back</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Rib</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Stomach</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Waist</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </Collapsible>
          <Collapsible trigger="Arm">
            <table>
              <tr>
                <td>Arm</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Shoulder</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Elbow</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Wrist</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Hand</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Palm</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Finger</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Nail</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </Collapsible>
          <Collapsible trigger="Leg">
            <table>
              <tr>
                <td>Leg</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Thigh</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Knee</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Calf</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Ancle</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Foot</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Toe</td>
                <td></td>
                <td></td>
                <td></td>
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
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Scarf</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Jacket</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Coat</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Boots</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Mittens</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </Collapsible>
          <Collapsible trigger="Casual">
            <table>
              <tr>
                <td>Sweater</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>T-shirt</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Shirt</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Singlet</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Pants</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Shorts</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Socks</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Shoes</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Hoodie</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </Collapsible>
          <Collapsible trigger="Formal">
            <table>
              <tr>
                <td>Dress</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Suit</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Dress shirt</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Skirt</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Blazer</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Stockings</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Blouse</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Pumps</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </Collapsible>
          <Collapsible trigger="Workout">
            <table>
              <tr>
                <td>Leggings</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Swimsuit</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Bikini</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Sneakers</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </Collapsible>
          <Collapsible trigger="Accessories">
            <table>
              <tr>
                <td>Accessories</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Belt</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Wrist watch</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Necklace</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Tie</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Earrings</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Ring</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Bracelet</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Suspenders</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Bag</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Backpack</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </Collapsible>
        </Titles>
      </CollapsibleCard>
    </>
  );
};

export default PeopleInfo;
