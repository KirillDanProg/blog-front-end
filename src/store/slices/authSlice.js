import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authAPI} from "../../api/auth.js";


const initialState = {
    userName: null,
    userId: null,
    status: "idle"
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.userName = null
            state.userId = null
            state.status = "idle"
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(authLogin.fulfilled, (state, action) => {
                state.userName = action.payload.data.userName
                state.userId = action.payload.data._id
                localStorage.setItem("token", action.payload.data.token)
            })
            .addCase(authMe.rejected, (state, action) => {
                state.status = "failed"
            })
            .addCase(authMe.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(authMe.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.userId = action.payload.data._id
                state.userName = action.payload.data.userName
            })
    }
})

export const authReducer = authSlice.reducer
export const {logout} = authSlice.actions

export const authRegister = createAsyncThunk("auth/register", async (data) => {
    return await authAPI.register(data)
})
export const authLogin = createAsyncThunk("auth/login", async (data) => {
    return await authAPI.login(data)
})
export const authMe = createAsyncThunk("auth/me", async () => {
    return await authAPI.me()
})