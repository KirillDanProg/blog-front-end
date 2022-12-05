import {useDispatch} from "react-redux";
import {authMe} from "../store/slices/authSlice.js";
import {useEffect} from "react";

export const useAppInit = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(authMe())
    }, [])

}