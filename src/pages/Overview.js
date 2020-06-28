import React from 'react';
import {Link} from 'react-router-dom';

import OverviewObjects from '../lib/overview-objects';

import Title from '../components/global/title';
import GridLarge from '../components/styles/wrappers/grid-large';
import OverviewCard from '../components/styles/wrappers/overview-card';

export default function Overview() {
  return (
    <>
      <Title />
      <GridLarge>
        {OverviewObjects.map((item, index) => {
          return (
            <OverviewCard game={item.game} key={index}>
              <Link to={item.url}>
                <div key={index}>
                  <h1>{item.japName}</h1>
                  <h2>{item.furigana}</h2>
                  <h3>{item.engName}</h3>
                </div>
              </Link>
            </OverviewCard>
          );
        })}
      </GridLarge>
    </>
  );
}
