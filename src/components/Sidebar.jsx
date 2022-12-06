import React from 'react';
import styled from 'styled-components'
import {Navigation} from "./nav/Navigation.jsx";

const StyledSidebar = styled.div`
  width: 50%;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(100%);
  background-color: ${props => props.theme.backgroundColor};
  transition: 1s;

  ${props => props.isVisible && `
    transition: 1s;
    transform: translateX(0)
  `}
`
export const Sidebar = ({isShown}) => {
    return (
        <StyledSidebar isVisible={isShown}>
            <Navigation isShown={isShown}/>
        </StyledSidebar>
    );
};

