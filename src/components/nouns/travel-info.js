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
            <p>Stations</p>
            <p>
              駅<span>えき</span>
            </p>
          </div>
          <Collapsible trigger="Airport">
            <table>
              <tr>
                <td>Airport</td>
                <td>空港</td>
                <td>くうこう</td>
                <td>Kūkō</td>
              </tr>
              <tr>
                <td>Airplane</td>
                <td>飛行機</td>
                <td>ひこうき</td>
                <td>Hikōki</td>
              </tr>
              <tr>
                <td>Luggage</td>
                <td>荷物</td>
                <td>にもつ</td>
                <td>Nimotsu</td>
              </tr>
              <tr>
                <td>Flight</td>
                <td>便</td>
                <td>びん</td>
                <td>Bin</td>
              </tr>
              <tr>
                <td>Depart</td>
                <td>出発</td>
                <td>しゅっぱつ</td>
                <td>Shuppatsu</td>
              </tr>
              <tr>
                <td>Arrive</td>
                <td>到着</td>
                <td>とうちゃく</td>
                <td>Tōchaku</td>
              </tr>
              <tr>
                <td>Gate</td>
                <td>搭乗口</td>
                <td>とうじょうぐち</td>
                <td>Tōjō kuchi</td>
              </tr>
              <tr>
                <td>Passport</td>
                <td>&nbsp;</td>
                <td>パスポート</td>
                <td>Pasupōto</td>
              </tr>
              <tr>
                <td>Duty-free</td>
                <td>免税</td>
                <td>めんぜい</td>
                <td>Menzei</td>
              </tr>
              <tr>
                <td>Airplane ticket</td>
                <td>航空券</td>
                <td>こうくうけん</td>
                <td>Kōkūken</td>
              </tr>
            </table>
          </Collapsible>
          <Collapsible trigger="Train station">
            <table>
              <tr>
                <td>Train</td>
                <td>電車</td>
                <td>でんしゃ</td>
                <td>Densha</td>
              </tr>
              <tr>
                <td>Ticket window</td>
                <td>窓口</td>
                <td>まどぐち</td>
                <td>Mado guchi</td>
              </tr>
              <tr>
                <td>Direction</td>
                <td>方面</td>
                <td>ほうめん</td>
                <td>Hōmen</td>
              </tr>
              <tr>
                <td>Train conductor</td>
                <td>車掌</td>
                <td>しゃしょう</td>
                <td>Shashō</td>
              </tr>
              <tr>
                <td>Ticket</td>
                <td>切符</td>
                <td>きっぷ</td>
                <td>Kippu</td>
              </tr>
              <tr>
                <td>Season ticket</td>
                <td>定期券</td>
                <td>ていきけん</td>
                <td>Teikiken</td>
              </tr>
              <tr>
                <td>Reserved seat</td>
                <td>指定席</td>
                <td>していせき</td>
                <td>Shitei seki</td>
              </tr>
              <tr>
                <td>Unreserved seat</td>
                <td>自由席</td>
                <td>じゆうせき</td>
                <td>Jiyū seki</td>
              </tr>
              <tr>
                <td>Local express</td>
                <td>準急</td>
                <td>じゅんきゅう</td>
                <td>Junkyū</td>
              </tr>
              <tr>
                <td>Bullet train</td>
                <td>新幹線</td>
                <td>しんかんせん</td>
                <td>Shinkansen</td>
              </tr>
              <tr>
                <td>Train transfer</td>
                <td>乗り換え</td>
                <td>のりかえ</td>
                <td>Norikae</td>
              </tr>
              <tr>
                <td>Last stop</td>
                <td>終点</td>
                <td>しゅうてん</td>
                <td>Shūten</td>
              </tr>
            </table>
          </Collapsible>
          <Collapsible trigger="Bus/Subway station">
            <table>
              <tr>
                <td>Bus station</td>
                <td>バス停</td>
                <td>ばすてい</td>
                <td>Basutei</td>
              </tr>
              <tr>
                <td>Subway</td>
                <td>地下鉄</td>
                <td>ちかてつ</td>
                <td>Chikatetsu</td>
              </tr>
              <tr>
                <td>Stop</td>
                <td>停留所</td>
                <td>ていりゅうじょ</td>
                <td>Teiryūjo</td>
              </tr>
              <tr>
                <td>Driver</td>
                <td>運転者</td>
                <td>うんてんしゃ</td>
                <td>Untensha</td>
              </tr>
              <tr>
                <td>Minibus</td>
                <td>&nbsp;</td>
                <td>ミニバス</td>
                <td>Minibasu</td>
              </tr>
              <tr>
                <td>Passenger</td>
                <td>旅客</td>
                <td>りょかく</td>
                <td>Ryokaku</td>
              </tr>
            </table>
          </Collapsible>
        </Titles>
      </CollapsibleCard>
    </>
  );
};

export default NatureInfo;
