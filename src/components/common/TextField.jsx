import React, {forwardRef} from 'react';
import styled from "styled-components";


const StyledTextField = styled.input`
  width: ${props => props.width || "100%"};
  padding: ${props => props.padding || "8px 20px"};
  border: ${props => props.border || "none"};
  border-radius: ${props => props.borderRadius || "5px"};
  margin-bottom: ${props => props.margin || "0"};
  font-size: 20px;
  display: inline-block;

  &:focus {
    outline-width: ${props => props.focus};
  }
`
export const TextField = forwardRef((props, ref) => {

    return (
        <StyledTextField ref={ref} {...props}/>
    );
});

