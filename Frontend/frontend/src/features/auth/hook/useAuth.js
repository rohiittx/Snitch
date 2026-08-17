import { useDispatch } from "react-redux"
import { setUser, setLoading, setError } from "../state/auth.slice"
import { register, login } from "../services/api.services"


export const useAuth = () => {

    const dispatch = useDispatch()

    const handleRegister = async (email, password, fullName, contact, isSeller = false) => {
        try {
            dispatch(setLoading(true))
            const data = await register({ email, password, fullName, contact, isSeller })
            dispatch(setUser(data))
        } catch (error) {
            // console.log("Register failed", error)
            console.log("Register failed:", error)
            console.log("STATUS:", error.response?.status)
            console.log("BACKEND RESPONSE:", error.response?.data)

            dispatch(setError(error.response?.data?.message || "Registration failed. Please try again."))
        } finally {
            dispatch(setLoading(false))
        }
    }

    const handleLogin = async (email, contact, password) => {
        try {
            dispatch(setLoading(true))
            const data = await login({ email, contact, password })
            dispatch(setUser(data))
        } catch (error) {
            console.log("Login failed", error)
            dispatch(setError(error.response?.data?.message || "Login failed. Please try again."))
        } finally {
            dispatch(setLoading(false))
        }
    }

    return {
        handleLogin,
        handleRegister
    }

}