import React from 'react';
import styled from "styled-components";
import {device} from "../../assets/mediaqueries/media.js";


const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color};
  transition: all 0.5s ease;
  @media ${device.mobileS} {
  }
`

export const StyledAppContainer = (props) => {
    return <AppContainer {...props}/>
};

