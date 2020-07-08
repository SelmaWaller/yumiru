import styled from "styled-components";

import SmallButton from "../../styles/colored-button-small";

const Kanji = styled(SmallButton)`
  span::before {
    content: "漢字";
    left: 85px;
  }
  span::after {
    content: "KANJI";
    left: 50px;
  }
  &:hover {
    span::before {
      left: 115px;
    }
    span::after {
      left: 75px;
    }
  }
  &:disabled {
    span::before {
      content: "KANJI";
    }
    span::after {
      left: 75px;
    }
  }
`;

export default Kanji;
