import styled from 'styled-components';

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1200px) {
    display: block;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default FlexWrapper;
