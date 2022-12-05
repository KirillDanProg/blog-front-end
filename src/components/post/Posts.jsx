import React, {memo} from 'react';
import {useSelector} from "react-redux";
import {PostContainer} from "./PostContainer.jsx";
import {Flex} from "../common/Flex.jsx";
import {useFetchPosts} from "../../hooks/useFetchPosts.js";

export const Posts = memo(() => {
    const posts = useSelector(state => state.posts.items)

    const mappedPosts = posts?.map(post => {
        return <PostContainer key={post._id}
                              post={post}/>
    })

    useFetchPosts()

    return (
        <Flex justify="space-evenly">
            {mappedPosts}
        </Flex>
    );
});

