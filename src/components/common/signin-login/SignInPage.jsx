import React from 'react';
import styled from "styled-components"
import {Form} from "../Form.jsx";
import {CustomLink} from "../CustomLink";


const StyledSignInPage = styled.div`

`
export const SignInPage = () => {
    return (
        <StyledSignInPage>

            <Form formType="signin"/>

        </StyledSignInPage>
    )
};

