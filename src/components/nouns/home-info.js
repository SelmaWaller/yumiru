import React from 'react';

import GridSmall from '../styles/grid-small';

const HomeInfo = () => {
  return (
    <>
      <GridSmall>
        {/* collapsible */}
        <ul>
          <li>house:</li>
          <li>staircase</li>
          <li>rooms</li>
          <li>levels</li>
          <li>driveway</li>
        </ul>
        <ul>
          <li>garden:</li>
          <li>fountain</li>
          <li>outhouse</li>
          <li>pond</li>
        </ul>
        <p></p>
      </GridSmall>
    </>
  );
};

export default HomeInfo;
