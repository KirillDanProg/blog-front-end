import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postsAPI} from "../../api/posts.js";

const initialState = {
    items: [],
    status: "idle",
    error: null,
    currentPost: {}
}

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            // Зфагружаем посты
            .addCase(fetchPosts.pending, (state) => {
                state.items = []
                state.status = "loading"
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.items = action.payload
                state.status = "succeeded"
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.items = []
                state.status = "failed"
                state.error = action.error.message
            })

            // Загружаем пост по ID
            .addCase(fetchPost.fulfilled, (state, action) => {
                state.currentPost = action.payload
            })
    }
})

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const {data} = await postsAPI.getPosts()
    return data
})
export const fetchPost = createAsyncThunk("posts/fetchPost", async (id) => {
    const {data} = await postsAPI.getPost(id)
    return data
})

export const postsReducer = postsSlice.reducer