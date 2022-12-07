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
  gap: 20px;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  background: #1D2126;

  .header {
    display: none;
  }

  .create-post-btn {
  }

  @media ${device.tablet} {
    justify-content: end;
    .header {
      display: block;
      //align-items: center;
    }

    .header.logout {
    }

    .menu-burger {
      display: none;
    }
    .create-post-btn {
    }
  }
`
export const Header = ({toggleSidebar, isShown}) => {

    const isAuth = useSelector(state => state.auth.userId)

    const createPostPath = isAuth ? "/create-post" : "/signin"

    return (
        <StyledHeader>

            <CustomLink className="create-post-btn"
                        variant="contained"
                        text="+ Создать статью"
                        path={`${createPostPath}`}
            />

            <LoginLogout/>

            {
                isShown
                    ? <Close toggleSidebar={toggleSidebar}/>
                    : <MenuBurger className="menu-burger"
                                  toggleSidebar={toggleSidebar}/>
            }
        </StyledHeader>
    )
};
