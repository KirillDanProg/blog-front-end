import React, {useEffect} from 'react';
import styled from "styled-components"
import {Link, useParams} from "react-router-dom"

const StyledCustomLink = styled.div`
  .link {
    padding: 5px 15px;
    margin: ${props => props.margin}
    display: inline-block;
    text-decoration: none;
    color: inherit;
    border-radius: 15px;
  }

  .link:hover {
    padding: 5px 15px;
    border-radius: 15px;
    background-color: ${props => props.theme.other};
    transition: 0.3s;
  }

  ${props => props.variant === "contained" && `
  .link {
  margin-right: 15px;
    padding: 5px 15px;
    border-radius: 15px;
    background-color: dodgerblue;
    }
  `}

`
export const CustomLink = ({path, text, ...props}) => {

    return (
        <StyledCustomLink {...props}>
            <Link className="link" to={path}>
                {text}
            </Link>
        </StyledCustomLink>

    );
};

