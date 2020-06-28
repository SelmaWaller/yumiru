import React from 'react';
import {Link} from 'react-router-dom';
import otherObjects from '../../lib/other-objects';
import OverviewOther from '../styles/wrappers/overview-other';

const OtherGrid = () => {
  return (
    <>
      {otherObjects.map((other, index) => {
        return (
          <OverviewOther key={index}>
            <Link to="/">
              <div>
                <h1>{other.japName}</h1>
                <h2>{other.furigana}</h2>
                <h3>{other.engName}</h3>
              </div>
            </Link>
          </OverviewOther>
        );
      })}
    </>
  );
};

export default OtherGrid;
