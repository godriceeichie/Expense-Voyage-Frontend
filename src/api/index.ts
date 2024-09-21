import axios from "axios";

export const api = axios.create({
    baseURL: "https://expense-voyage-backend.onrender.com/api",
    withCredentials: true,
})

export const privateApi = axios.create({
    baseURL: "https://expense-voyage-backend.onrender.com/api",
    withCredentials: true,
})
