import React from 'react';
import styled from "styled-components"


const StyledPostText = styled.p`
  font-size: 18px;
`
export const PostText = ({text}) => {
    return (
        <StyledPostText>
            {text}
        </StyledPostText>
    );
};

