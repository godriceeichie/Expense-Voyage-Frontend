import axios from "axios";

export const api = axios.create({
    baseURL: "https://dd47-105-116-7-64.ngrok-free.app/api",
    withCredentials: true,
})

export const privateApi = axios.create({
    baseURL: "https://dd47-105-116-7-64.ngrok-free.app/api",
    withCredentials: true,
})
