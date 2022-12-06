import React from 'react';
import styled from "styled-components";
import {device} from "../../assets/mediaqueries/media.js";

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || "column"};
  justify-content: ${props => props.justify || "center"};
  align-items: ${props => props.align || "center"};
  width: 100%;
  text-align: center;
  margin: ${props => props.margin || "0"};
  gap: ${props => props.gap || "0"};

  ${props => props.position === "center" && `
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%)
  `}
  ${props => props.position === "top-left" && `
    position: absolute;
    top: 0;
    left: 0;
  `} @media ${device.tablet} {
    display: flex;
    align-items: ${props => props.align || "center"};
    justify-content: ${props => props.justify || "center"};
    gap: ${props => props.gap || "0px"};
    flex-direction: ${props => props.direction || "row"};
    padding: ${props => props.padding || "0"};

    .img {
      width: 100%;
    }
  }
`

export const Flex = (props) => {
    return (
        <StyledFlex {...props}/>
    );
};

