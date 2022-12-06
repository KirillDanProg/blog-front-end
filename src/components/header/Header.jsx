import React from 'react';
import styled from "styled-components";
import {device} from "../../assets/mediaqueries/media.js";
import {CustomLink} from "../common/index.js";
import {MenuBurger, Close} from "../../assets/icons/index.js";
import {LoginLogout} from "./LoginLogout.jsx";
import {useSelector} from "react-redux";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  background: #1D2126;

  .header {
    display: none;
  }

  .create-post-btn {
    margin: 0 auto;
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

    .menu-burger {
      display: none;
    }
  }
`
export const Header = ({toggleSidebar, isShown}) => {

    const isAuth = useSelector(state => state.auth.userId)

    const createPostPath = isAuth ? "/create-post" : "/signin"

    return (
        <StyledHeader>

            <LoginLogout/>

            {
                isShown
                    ? <Close toggleSidebar={toggleSidebar}/>
                    : <MenuBurger className="menu-burger"
                                  toggleSidebar={toggleSidebar}/>
            }

                <CustomLink className="create-post-btn"
                            variant="contained"
                            text="+ Создать статью"
                            path={`${createPostPath}`}
                />

        </StyledHeader>
    )
};

