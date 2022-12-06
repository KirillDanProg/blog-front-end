import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components"
import {device} from "../../assets/mediaqueries/media.js";

const StyledNavItem = styled.div`
  
  padding: 10px 20px;
  .link {
    text-decoration: none;
    color: lightgray;
  }

   &:hover {
    transition: 0.5s;
    transform: scale(1.2) translateX(30px);
    text-decoration: white;
  }
  @media ${device.tablet} {
    &:hover {
      transform: scale(1.3);
      .link {
        color: white;
      }
    }
  }
`
export const NavItem = (props) => {
    return (
        <StyledNavItem>
            <Link className="link" to={props.to}>
                {props.value}
            </Link>
        </StyledNavItem>
    );
};

