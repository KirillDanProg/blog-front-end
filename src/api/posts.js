import {instance} from "./axiosInstance.js";

export const postsAPI = {
    getPosts: () => {
        return instance("posts")
    },
    getPost: (postId) => {
        return instance(`posts/${postId}`)
    }
}