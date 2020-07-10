import React from "react";

import RaisedText from "../styles/raised-text";

const Today = () => {
  const year = new Date().getFullYear().toString().substr(-2).padStart(2, "0");
  const month = String(new Date().getMonth() + 1).padStart(2, "0");
  const day = new Date().getDate().toString().padStart(2, "0");

  return (
    <>
      <RaisedText>
        <p>
          <span>{year}</span>年<span>{month}</span>月<span>{day}</span>日
        </p>
      </RaisedText>
    </>
  );
};

export default Today;
