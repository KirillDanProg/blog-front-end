import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export const useAuthRedirect = () => {
    const isAuth = useSelector(state => state.auth.userId)

    const navigate = useNavigate()

    useEffect(() => {
        if(!isAuth) {
            navigate("/signin")
        } else {
            navigate("/")
        }
    }, [isAuth])
}