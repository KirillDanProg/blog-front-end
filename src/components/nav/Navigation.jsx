import React from 'react';
import styled from "styled-components"
import {NavItem} from "./NavItem.jsx";
import {device} from "../../assets/mediaqueries/media.js";


const StyledNavigation = styled.div`

  display: none;
  margin-top: 40px;

  @media ${device.tablet} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 70px;
  }

  ${props => props.isShown && `
  display: flex;
  flex-direction: column;
  
  `}
`
export const Navigation = (props) => {
    return (
        <StyledNavigation {...props}>

            <NavItem to="" value="Репертуар"/>
            <NavItem to="" value="Фото и Видео"/>
            <NavItem to="" value="Проекты"/>
            <NavItem to="" value="Контакты"/>
            <NavItem to="" value="Выйти"/>

        </StyledNavigation>
    );
};

