import React from 'react';
import styled from "styled-components"
import {device} from "../../assets/mediaqueries/media.js";


const StyledPostImage = styled.img`
    width: 150px;
  
  @media ${device.tablet} {
    width: 300px;
  }
`
export const PostImage = ({src}) => {
    return (
        <StyledPostImage src={src}/>
    );
};

