import React from 'react';
import {Outlet} from "react-router-dom";
import {StyledAppContainer} from "./common/StyledApp";
import {Header} from "./Header";
import {useSelector} from "react-redux";
import {Preloader} from "./common/Preloader";

export const Main = () => {

    const appStatus = useSelector(state => state.auth.status)

    return (
        <StyledAppContainer>

            {
                appStatus === "loading"
                    ? <Preloader/>
                    : <>
                        <Header/>

                        <Outlet/>
                    </>
            }


        </StyledAppContainer>

    );
};

