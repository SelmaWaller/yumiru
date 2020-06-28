import React, {useEffect, useState} from 'react';

import TransparentText from '../styles/transparent-text';

const Time = () => {
  const [getTime, setGetTime] = useState(new Date());
  const isAm = useState(
    getTime.getHours() >= 0 && getTime.getHours() < 12 ? true : false
  );

  const [displayAmpm] = useState(isAm ? '午前' : '午後');
  const Time = (
    <p>
      {displayAmpm}
      <span>{new Date().getHours().toString().padStart(2, '0')}</span>時
      <span>{new Date().getMinutes().toString().padStart(2, '0')}</span>分
      <span>{new Date().getSeconds().toString().padStart(2, '0')}</span>秒
    </p>
  );

  useEffect(() => {
    let timer = setInterval(() => timeNow(), 1000);

    return () => {
      clearInterval(timer);
    };
  });

  const timeNow = () => {
    setGetTime(new Date());
  };

  return (
    <>
      <TransparentText time>{Time}</TransparentText>
    </>
  );
};

export default Time;
