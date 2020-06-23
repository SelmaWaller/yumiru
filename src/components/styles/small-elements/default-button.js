import styled from "styled-components";

const DefaultButton = styled.button`
  background: ${(props) => props.theme.mainButtonDefault};
  border: none;
  border-radius: 100px;
  padding: 15px 40px;
  font-size: 20px;
`;

export default DefaultButton;
