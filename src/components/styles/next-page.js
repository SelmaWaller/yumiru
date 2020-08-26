import styled from "styled-components";

import PaginationButton from "./pagination";

const NextPage = styled(PaginationButton)`
  span::after {
    right: unset;
    left: 86px;
  }
  &:disabled {
    span::after {
      transform: rotate(90deg);
    }
    &:hover {
      span::after {
        transform: rotate(90deg);
      }
    }
  }
  &:hover {
    span::after {
      right: unset;
      transform: rotate(90deg);
    }
  }
  @media (max-width: 1200px) {
    span::after {
      left: 60px;
    }
  }
`;

export default NextPage;
