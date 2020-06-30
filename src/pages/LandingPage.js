import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import overview_icon from '../svgs/icons/buttons/overview.svg';

import Justify from '../components/styles/justify-content';
import Logo from '../components/styles/logo';
import Button from '../components/styles/colored-button';

const OverviewButton = styled(Button)`
  span::before {
    content: '概要';
    left: 70px;
  }
  span::after {
    content: 'OVERVIEW';
    left: 70px;
  }
  &:hover {
    span::before {
      left: 92px;
    }
    span::after {
      left: 88px;
    }
    img {
      right: 165px;
    }
  }
  img {
    right: 75px;
  }
`;

export default function LandingPage() {
  useEffect(() => {
    document.title = 'Yumiru';
  }, []);
  return (
    <>
      <Justify>
        <Logo />
        <Link to="/overview">
          <OverviewButton>
            <span></span>
            <img src={overview_icon} alt="icon" />
          </OverviewButton>
        </Link>
      </Justify>
    </>
  );
}
