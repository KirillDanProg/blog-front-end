import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchPost} from "../../store/slices/postsSlice.js";
import {useParams} from "react-router-dom";
import styled from "styled-components"
import {Wrapper} from "../common/Wrapper.jsx";
import {PostImage} from "./PostImage";

const StyledPost = styled.div`
  width: 70%;
  margin: 0 auto;
  background-color: ${props => props.theme.subBackground};
`

export const Post = () => {
    const dispatch = useDispatch()
    const {id} = useParams()

    const post = useSelector(state => state.posts.currentPost)

    useEffect(() => {
        dispatch(fetchPost(id))
    }, [])

    return (
        <StyledPost>
            <Wrapper>
                {post.title}
            </Wrapper>
            <Wrapper>
                {post.text}
            </Wrapper>
            <PostImage src={post.imageUrl}/>
        </StyledPost>
    );
};

