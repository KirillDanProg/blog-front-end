import React from 'react';
import styled from "styled-components";
import {device} from "../assets/mediaqueries/media.js";
import {CustomLink} from "./common/CustomLink";
import {useDispatch, useSelector} from "react-redux";
import {Wrapper} from "./common/Wrapper.jsx";
import {Button} from "./common/Button";
import {useNavigate} from "react-router-dom";
import {logout} from "../store/slices/authSlice.js";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  background: #1D2126;

  .header {
    display: none;
  }

  @media ${device.tablet} {
    justify-content: space-between;
    .header {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: end;
    }

    .header.logout {
      justify-content: space-between;
    }

  }
`
export const Header = () => {
    const isAuth = useSelector(state => state.auth.userId)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logoutHandler = () => {
        localStorage.removeItem("token")
        dispatch(logout())
        navigate("/signin")
    }

    return (
        <StyledHeader>
            {
                !isAuth
                    ? <Wrapper className="header login">
                        <CustomLink path="/login"
                                    text="Войти"/>
                        /
                        <CustomLink path="/signin"
                                    text="Зарегистрироваться"/>
                    </Wrapper>
                    : <Wrapper className="header logout">
                        LOGO
                        <Button callback={logoutHandler}
                                variant="contained"
                        >
                            Выйти
                        </Button>
                    </Wrapper>

            }

        </StyledHeader>
    )
};

