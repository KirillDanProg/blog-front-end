import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authAPI} from "../../api/auth.js";


const initialState = {
    userName: null,
    userId: null,
    status: "idle",
    token: null,
    error: null
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.userName = null
            state.userId = null
            state.status = "idle"
        },
        setAppError: (state, action) => {
            state.error = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(authLogin.rejected, (state) => {
                state.error = "Неверный логин или пароль"
            })
            .addCase(authLogin.fulfilled, (state, action) => {
                state.userName = action.payload.data.userName
                state.userId = action.payload.data._id
                localStorage.setItem("token", action.payload.data.token)
            })
            .addCase(authMe.rejected, (state) => {
                state.status = "failed"
                state.error = "Вы не авторизованы"
            })
            .addCase(authMe.pending, (state) => {
                state.status = "loading"
            })
            .addCase(authMe.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.userId = action.payload.data._id
                state.userName = action.payload.data.userName
            })
            .addCase(authRegister.pending, (state) => {
                state.status = "loading"
            })
            .addCase(authRegister.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.userId = action.payload.data._id
                localStorage.setItem("token", action.payload.data.token)
            })
            .addCase(authRegister.rejected, (state) => {
                state.status = "failed"
                state.error = "Что-то пошло не так, попробуйте снова"
            })
    }
})

export const authReducer = authSlice.reducer
export const {logout, setAppError} = authSlice.actions

export const authRegister = createAsyncThunk("auth/register", async (data) => {
    return await authAPI.register(data)
})
export const authLogin = createAsyncThunk("auth/login", async (data) => {
    return await authAPI.login(data)
})
export const authMe = createAsyncThunk("auth/me", async () => {
    return await authAPI.me()
})