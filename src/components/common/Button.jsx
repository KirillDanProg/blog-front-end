import styled from "styled-components";
import React from "react";
import {device} from "../../assets/mediaqueries/media.js";

export const StyledButton = styled.button`
  all: unset;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  width: fit-content;
  padding: 4px 12px;

  @media ${device.tablet} {
    padding: ${props => props.padding};
  }

  &:hover {
    transition: 0.3s;
    background-color: #1489ff;
    color: white;
  }

  &:active {
    background-color: #006aff;
  }

  ${props => props.variant === "outlined" && `
        color: #0066CC;
        border: 3px solid #0066CC;
    `}
  ${props => props.variant === "contained" && `
        color: white;
        background-color: #0066CC;
    `}
`


export const Button = (props) => {
    const onClickHandler = () => {
        props.callback && props.callback()
    }
    return (
        <StyledButton onClick={onClickHandler} {...props} />
    )
}