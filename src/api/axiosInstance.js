import axios from "axios"

export const instance = axios.create({
    baseURL: "https://blog-api-erlu.onrender.com",
    headers: {
        "Authorization": `Bearer ${window.localStorage.getItem("token")}`
    }
})