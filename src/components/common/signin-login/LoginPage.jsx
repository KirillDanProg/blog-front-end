import React from 'react';
import styled from "styled-components"
import {Form} from "../Form.jsx";


const StyledSignInPage = styled.div`

`
export const LoginPage = () => {
    return (
        <StyledSignInPage>

            <Form formType={"login"} />

        </StyledSignInPage>
    )
};

