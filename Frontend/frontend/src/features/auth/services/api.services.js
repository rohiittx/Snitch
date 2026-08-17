import axios from "axios"

const apiService = axios.create({
    baseURL: "http://localhost:3000/api/auth",
    withCredentials: true
})

export const register = async ({ email, password, fullName, contact, isSeller }) => {
    const response = await apiService.post("/register", { email, password, fullName, contact, isSeller })
    return response.data
}

export const login = async ({ email, contact, password }) => {
    const response = await apiService.post("/login", { email, contact, password })
    return response.data
}
