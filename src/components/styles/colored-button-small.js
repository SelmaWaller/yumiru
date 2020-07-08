import styled from "styled-components";

import Button from "./colored-button";

const SmallButton = styled(Button)`
  margin: 25px 15px 10px;
  min-height: 60px;
  min-width: 205px;
  z-index: 99;

  span::before {
    content: "平仮名";
    top: 13px;
    left: 70px;
  }
  span::after {
    content: "HIRAGANA";
    top: 22px;
    left: 35px;
  }
  &:hover {
    span::before {
      left: 90px;
    }
    span::after {
      left: 55px;
    }
  }

  &:disabled {
    span::before {
      opacity: 0;
    }
    span::after {
      left: 55px;
      opacity: 1;
    }
  }
`;

export default SmallButton;
