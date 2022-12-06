import React, {useState} from 'react';
import {Outlet} from "react-router-dom";
import {StyledAppContainer} from "./common/StyledApp";
import {Header} from "./header/Header.jsx";
import {useSelector} from "react-redux";
import {Preloader} from "./common/index.js";
import {Sidebar} from "./Sidebar";

export const Main = () => {

    const appStatus = useSelector(state => state.auth.status)

    const [isSidebarShown, setSidebarShown] = useState(false)

    return (
        <StyledAppContainer>

            {
                appStatus === "loading"
                    ? <Preloader/>
                    : <>
                        <Header toggleSidebar={setSidebarShown}
                                isShown={isSidebarShown}/>

                        <Sidebar isShown={isSidebarShown}/>

                        <Outlet/>
                    </>
            }


        </StyledAppContainer>

    );
};

