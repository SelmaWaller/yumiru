import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

import OverviewObjects from '../components/overview-objects';

import Title from '../components/global/title';
import GridLarge from '../components/styles/grid-large';
import OverviewCard from '../components/styles/overview-card';

export default function Overview() {
  useEffect(() => {
    document.title = 'Yumiru | Overview';
  }, []);

  return (
    <>
      <Title />
      <GridLarge>
        {OverviewObjects.map((item, index) => {
          return (
            <Link key={index} to={item.url}>
              <OverviewCard game={item.game}>
                <div key={index}>
                  <h1>{item.japName}</h1>
                  <h2>{item.furigana}</h2>
                  <h3>{item.engName}</h3>
                </div>
              </OverviewCard>
            </Link>
          );
        })}
      </GridLarge>
    </>
  );
}
