import React from "react";
import styled from "styled-components";

import FlexWrapper from "../styles/flex-wrapper";
import JustifyContent from "../styles/justify-content";

const FooterBox = styled.div`
  margin-top: 47px;
  padding: 60px 0 10px;
  background: ${(props) => props.theme.footer};
  color: ${(props) => props.theme.globalText};
  bottom: 0;
`;

const Copyright = styled.p`
  font-family: "Libre Barcode 128 Text", sans-serif;
  margin: 0;
  font-size: 35px;
  padding: 60px 0 10px;
`;

const JustifyFooter = styled(JustifyContent)`
  div {
    padding: 0 15px;
    font-size: 15px;
    span {
      position: relative;
    }
    span::before {
      transition: 250ms;
      content: "༶";
      position: absolute;
      left: 0;
      top: 0;
      font-weight: bold;
      opacity: 0;
      transform: rotate(90deg);
    }
    span::after {
      transition: 250ms;
      content: "༶";
      position: absolute;
      right: 0;
      top: 0;
      font-weight: bold;
      opacity: 0;
      transform: rotate(-90deg);
    }
    a {
      transition: 250ms;
      font-family: "Roboto Mono", sans-serif;
      font-weight: 400;
      padding: 20px;
      color: ${(props) => props.theme.globalText};
      text-decoration: underline;
      &:hover {
        transition: 250ms;
        span::after {
          right: -15px;
          opacity: 1;
        }
        span::before {
          left: -15px;
          opacity: 1;
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterBox>
      <FlexWrapper>
        <JustifyFooter>
          <div>
            <a
              href="https://www.linkedin.com/in/selmawaller/"
              rel="no-opener no-referrer"
              target="blank"
            >
              <span>linkedIn</span>
            </a>
          </div>
          <div>
            <a
              href="https://selma-waller.netlify.app/"
              rel="no-opener no-referrer"
              target="blank"
            >
              <span>portfolio</span>
            </a>
          </div>
        </JustifyFooter>
      </FlexWrapper>
      <FlexWrapper>
        <JustifyContent>
          <Copyright>2020 (c) selma waller</Copyright>
        </JustifyContent>
      </FlexWrapper>
    </FooterBox>
  );
};

export default Footer;
