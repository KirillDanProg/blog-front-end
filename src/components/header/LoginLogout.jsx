import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {logout} from "../../store/slices/authSlice.js";
import {CustomLink, Wrapper, Button} from "../common/index.js";
import React from "react";

export const LoginLogout = () => {

    const isAuth = useSelector(state => state.auth.userId)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logoutHandler = () => {
        localStorage.removeItem("token")
        dispatch(logout())
        navigate("/signin")
    }

    return (
        <>
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
        </>
    )
}