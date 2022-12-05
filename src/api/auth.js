import {instance} from "./axiosInstance.js";

export const authAPI = {
    register: (data) => {
        return instance.post("auth/register", data)
    },
    login: (data) => {
        return instance.post("auth/login", data)
    },
    logout: () => {
        return instance.delete("auth/login")
    },
    me: () => {
        return instance.get("auth/me")
    }
}
