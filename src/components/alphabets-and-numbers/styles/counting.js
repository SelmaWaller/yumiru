import styled from "styled-components";

import SmallButton from "../../styles/colored-button-small";

const Counting = styled(SmallButton)`
  span::before {
    content: "数える";
  }
  span::after {
    content: "COUNTING";
  }
  &:hover {
    span::after {
      left: 52px;
    }
  }
  &:disabled {
    span::after {
      content: "COUNTING";
      left: 52px;
    }
  }
`;

export default Counting;
