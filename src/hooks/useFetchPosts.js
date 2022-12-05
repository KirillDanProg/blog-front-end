import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchPosts} from "../store/slices/postsSlice.js";

export const useFetchPosts = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

}