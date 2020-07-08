import styled from "styled-components";

import SmallButton from "../../styles/colored-button-small";

const Katakana = styled(SmallButton)`
  span::before {
    content: "片仮名";
  }
  span::after {
    content: "KATAKANA";
  }
  &:disabled {
    span::before {
      content: "KATAKANA";
    }
  }
`;

export default Katakana;
