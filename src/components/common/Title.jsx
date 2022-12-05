import React from 'react';
import styled from "styled-components";



const StyledTitle = styled.div`
  font-size: 22px;
  font-weight: 500;
  line-height: 25px;
  text-align: center;
`

export const Title = ({value, type, className, ...restProps}) => {
    return (
        <StyledTitle {...restProps}
                     className={className}
        >
            {value}
        </StyledTitle>
    );
};
