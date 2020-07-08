import styled from "styled-components";

import PaginationButton from "../../styles/pagination";

const CurrentPage = styled(PaginationButton)`
  font-size: 16px;
  min-width: 120px;
  cursor: default;

  span::after {
    content: "";
  }
  &:hover {
    span::after {
      content: "";
    }
  }
`;

export default CurrentPage;
