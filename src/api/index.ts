import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8000/api",
    withCredentials: true,
    // headers: {
    //     "Content-Type": "application/json"
    // }
})

export const privateApi = axios.create({
    baseURL: "http://localhost:8000/api",
    withCredentials: true,
    // headers: {
    //     "Content-Type": "application/json"
    // }
})
